const db = require("../config/mySQL");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otp = require("otp-generator");
const nodemailer = require("nodemailer");

module.exports = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      const saltRounds = Math.floor(Math.random() * 10) + 1;
      //hashPw
      bcrypt.hash(body.password, saltRounds, (err, hashedPassword) => {
        const newUser = { ...body, password: hashedPassword };
        const queryStr = `INSERT INTO users SET ?`;
        db.query(queryStr, newUser, (err, data) => {
          if (!err) {
            const newBalance = {
              id_user: data.insertId,
              balance: 0,
            };
            const insertBalance = `INSERT INTO balance SET ?`;
            db.query(insertBalance, newBalance, (err, data) => {
              if (!err) {
                const otpCode = otp.generate(6, {
                  alphabets: true,
                  upperCase: true,
                  specialChars: false,
                });
                const OTPsend = {
                  email: body.email,
                  otp: otpCode,
                };
                const queryStr = `INSERT INTO tb_otp_activation SET ?`;
                db.query(queryStr, OTPsend, (err, data) => {
                  if (!err) {
                    let transporter = nodemailer.createTransport({
                      service: "gmail",
                      host: "smtp.gmail.com",
                      port: 578,
                      secure: false,
                      auth: {
                        user: process.env.USER_EMAIL,
                        pass: process.env.PASS_EMAIL,
                      },
                    });
                    let mailOptions = {
                      from: "ZWallet Team <zwalleta@mail.com>",
                      to: body.email,
                      subject: "OTP Code Activation Account",
                      html: ` 
                                                <h1> OTP CODE from ZWallet Team </h1>
                                                <p> Hello, this is you OTP code</p> 
                                                <br></br>
                                                <h3>${otpCode}<h3> 
                                                <p> Use it to Activate Account </p>
                                                `,
                    };
                    transporter.sendMail(mailOptions, (err, data) => {
                      if (err) {
                        console.log("Its Error: ", err);
                      } else {
                        console.log(`Sent to ${body.email} Success!!!!`);
                        resolve({
                          status: 200,
                          message: `Kode OTP telah dikirim ke email anda`,
                        });
                      }
                    });
                  } else {
                    reject({
                      status: 500,
                      message: `Internal server error`,
                      details: err,
                    });
                  }
                });
              } else {
                reject({
                  msg: `ERROR!`,
                  details: err,
                });
              }
            });
          } else {
            reject({
              status: 500,
              message: `Internal server error`,
              details: err,
            });
          }
        });
      });
    });
  },
  activate: (email, otp) => {
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT * FROM tb_otp_activation WHERE email = ? AND otp = ?`;
      db.query(queryStr, [email, otp], (err, data) => {
        if (!err) {
          if (data[0]) {
            const qs = `DELETE FROM tb_otp_activation WHERE email = ? and otp = ?`;
            db.query(qs, [email, otp], (err, data) => {
              if (!err) {
                const activateAcc = `UPDATE users SET isActive = 1 WHERE email = ?`;
                db.query(activateAcc, email, (err, data) => {
                  if (!err) {
                    resolve({
                      status: 200,
                      message: `Selamat akun anda berhasil diaktivasi`,
                      email: email,
                    });
                  } else {
                    reject({
                      status: 500,
                      message: `INTERNAL SERVER ERROR`,
                      details: err,
                    });
                  }
                });
              } else {
                reject({
                  status: 500,
                  message: `INTERNAL SERVER ERROR`,
                  details: err,
                });
              }
            });
          } else {
            reject({
              status: 404,
              message: `Kode OTP tidak sesuai atau email belum terdaftar atau akun sudah pernah di aktivasi`,
            });
          }
        } else {
          reject({
            status: 500,
            message: `INTERNAL SERVER ERROR`,
            details: err,
          });
        }
      });
    });
  },
  resend: (email) => {
    return new Promise((resolve, reject) => {
      const getUser = `SELECT email, isActive FROM users WHERE email = ?`;
      console.log(getUser);
      db.query(getUser, email, (err, data) => {
        if (!err) {
          if (data[0]) {
            if (data[0].isActive != 0) {
              resolve({
                status: 200,
                message: `Akun anda sudah pernah di aktivasi`,
              });
            } else {
              const delOtp = `DELETE FROM tb_otp_activation WHERE email = ?`;
              db.query(delOtp, email, (err, data) => {
                if (!err) {
                  const otpCode = otp.generate(6, {
                    alphabets: true,
                    upperCase: true,
                    specialChars: false,
                  });
                  const dataResend = {
                    email: email,
                    otp: otpCode,
                  };
                  const queryStr = `INSERT INTO tb_otp_activation SET ?`;
                  db.query(queryStr, dataResend, (err, data) => {
                    if (!err) {
                      let transporter = nodemailer.createTransport({
                        service: "gmail",
                        host: "smtp.gmail.com",
                        port: 578,
                        secure: false,
                        auth: {
                          user: process.env.USER_EMAIL,
                          pass: process.env.PASS_EMAIL,
                        },
                      });
                      console.log(
                        process.env.USER_EMAIL,
                        process.env.PASS_EMAIL
                      );

                      let mailOptions = {
                        from: "BlanjaApp Team <blanja@mail.com>",
                        to: email,
                        subject: "OTP Code Activation Account",
                        html: ` 
                                                    <h1> OTP CODE from ZWallet Team </h1>
                                                    <p> Hello, this is you OTP code</p> 
                                                    <br></br>
                                                    <h3>${otpCode}<h3> 
                                                    <p> Use it to Activate Account </p>
                                                `,
                      };
                      transporter.sendMail(mailOptions, (err, data) => {
                        if (err) {
                          console.log("Its Error: ", err);
                        } else {
                          console.log("Sent Success!!!!");
                          resolve({
                            status: 200,
                            message: `Kode OTP telah dikirim ulang ke email anda`,
                          });
                        }
                      });
                    } else {
                      reject({
                        status: 500,
                        message: `Internal server error`,
                        details: err,
                      });
                    }
                  });
                } else {
                  reject({
                    status: 500,
                    message: `Internal server error`,
                    details: err,
                  });
                }
              });
            }
          } else {
            reject({
              status: 404,
              message: `Email tidak ditemukan`,
            });
          }
        } else {
          reject({
            status: 500,
            message: `Internal server error`,
            details: err,
          });
        }
      });
    });
  },
  postLogin: (body) => {
    return new Promise((resolve, reject) => {
      const { email, password } = body;
      const queryStr = `SELECT u.id, CONCAT(u.firstName,' ', u.lastName) as fullname, u.email, u.password, u.pin, u.photo, u.phone, b.balance, u.isActive FROM users u JOIN balance b ON b.id_user = u.id WHERE u.email = ?`;
      db.query(queryStr, email, (err, data) => {
        if (err) {
          reject({
            status: 500,
            msg: `Error ditemukan pada query`,
          });
        } else {
          //no result data
          if (!data[0]) {
            reject({
              status: 404,
              msg: `Username atau password salah!`,
            });
          } else if (data[0].isActive == 0) {
            reject({
              status: 401,
              msg: `Please activate your account first!`,
            });
          } else {
            //comparing pw
            bcrypt.compare(password, data[0].password, (error, result) => {
              //what is this ?
              if (err) {
                reject({
                  status: 500,
                  msg: `Proses Hash Error!`,
                });
              }
              //result error ?
              if (!result) {
                reject({
                  status: 404,
                  msg: `Username atau Password salah!`,
                });
              } else {
                //sign result to payload jwt
                const payload = {
                  id: data[0].id,
                  email,
                  fullname: data[0].fullname,
                  balance: data[0].balance,
                  phone: data[0].phone,
                  photo: data[0].photo,
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY, {
                  expiresIn: "24h",
                });
                if (data[0].pin == " ") {
                  resolve({
                    status: 206,
                    msg: "Harap atur pin anda",
                    data: { token },
                  });
                } else {
                  resolve({
                    status: 200,
                    message: "Login Berhasil",
                    data: { ...payload, token },
                  });
                }
              }
            });
          }
        }
      });
    });
  },
  postForgot: (email) => {
    return new Promise((resolve, reject) => {
      const getUser = `SELECT email FROM users WHERE email = ?`;
      db.query(getUser, email, (err, data) => {
        if (!err) {
          if (data[0]) {
            const delOtp = `DELETE FROM tb_otp WHERE email = ?`;
            db.query(delOtp, email, (err, data) => {
              if (!err) {
                const otpCode = otp.generate(6, {
                  alphabets: true,
                  upperCase: true,
                  specialChars: false,
                });
                const dataResend = {
                  email: email,
                  otp: otpCode,
                };
                const queryStr = `INSERT INTO tb_otp SET ?`;
                db.query(queryStr, dataResend, (err, data) => {
                  if (!err) {
                    let transporter = nodemailer.createTransport({
                      service: "gmail",
                      host: "smtp.gmail.com",
                      port: 578,
                      secure: false,
                      auth: {
                        user: process.env.USER_EMAIL,
                        pass: process.env.PASS_EMAIL,
                      },
                    });
                    console.log(process.env.USER_EMAIL, process.env.PASS_EMAIL);

                    let mailOptions = {
                      from: "ZWallet Team <zwallet@mail.com>",
                      to: email,
                      subject: "OTP Code Reset Password",
                      html: ` 
                                                <h1> OTP CODE from ZWallet Team </h1>
                                                <p> Hello, this is you OTP code</p> 
                                                <br></br>
                                                <h3>${otpCode}<h3> 
                                                <p> Use it to Activate Account </p>
                                                `,
                    };
                    transporter.sendMail(mailOptions, (err, data) => {
                      if (err) {
                        console.log("Its Error: ", err);
                      } else {
                        console.log("Sent Success!!!!");
                        resolve({
                          status: 200,
                          message: `Kode OTP telah dikirim ulang ke email anda`,
                        });
                      }
                    });
                  } else {
                    reject({
                      status: 500,
                      message: `Internal server error`,
                      details: err,
                    });
                  }
                });
              } else {
                reject({
                  status: 500,
                  message: `Internal server error`,
                  details: err,
                });
              }
            });
          } else {
            reject({
              status: 404,
              message: `Email tidak ditemukan`,
            });
          }
        } else {
          reject({
            status: 500,
            message: `Internal server error`,
            details: err,
          });
        }
      });
    });
  },
  getOtp: (email, otp) => {
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT * FROM tb_otp WHERE email = ? AND otp = ?`;
      db.query(queryStr, [email, otp], (err, data) => {
        if (!err) {
          if (data[0]) {
            const qs = `DELETE FROM tb_otp WHERE email = ? and otp = ?`;
            db.query(qs, [email, otp], (err, data) => {
              if (!err) {
                resolve({
                  status: 200,
                  message: `Silahkan set ulang password anda`,
                  email: email,
                });
              } else {
                reject({
                  status: 500,
                  message: `INTERNAL SERVER ERROR`,
                  details: err,
                });
              }
            });
          } else {
            reject({
              status: 404,
              message: `Kode OTP tidak sesuai`,
            });
          }
        } else {
          reject({
            status: 500,
            message: `INTERNAL SERVER ERROR`,
            details: err,
          });
        }
      });
    });
  },
  resetPassword: (email, newPassword) => {
    return new Promise((resolve, reject) => {
      const saltRounds = Math.floor(Math.random() * 10) + 1;
      bcrypt.hash(newPassword, saltRounds, (err, hashedPassword) => {
        if (!err) {
          newPassword = hashedPassword;
          const queryStr = `UPDATE users SET password = ? WHERE email = ?`;
          db.query(queryStr, [newPassword, email], (err, data) => {
            console.log(err, data);
            if (!err) {
              console.log("sukses");
              resolve({
                status: 200,
                message: `Password berhasil di ubah`,
              });
            } else {
              reject({
                status: 500,
                message: `INTERNAL SERVER ERROR`,
                details: err,
              });
            }
          });
        } else {
          reject({
            status: 500,
            message: `INTERNAL SERVER ERROR`,
            details: err,
          });
        }
      });
    });
  },
  userChangePassword: (body) => {
    return new Promise((resolve, reject) => {
      const { email, old_password, new_password } = body;
      const queryStr = `SELECT password FROM users WHERE email = ?`;
      db.query(queryStr, email, (err, data) => {
        if (!err) {
          if (data.length > 0) {
            bcrypt.compare(old_password, data[0].password, (error, result) => {
              if (error) {
                reject({
                  status: 500,
                  message: error,
                });
              }
              if (!result) {
                reject({
                  status: 401,
                  message: "Password salah",
                });
              } else {
                const saltRounds = Math.floor(Math.random() * 10) + 1;
                bcrypt.hash(
                  new_password,
                  saltRounds,
                  (errorHash, hashedPassword) => {
                    if (errorHash) {
                      reject({
                        statu: 500,
                        message: errorHash,
                      });
                    } else {
                      const updatePassword = `UPDATE users SET password = ? WHERE email = ?`;
                      db.query(
                        updatePassword,
                        [hashedPassword, email],
                        (errorUpdate, dataUpdate) => {
                          if (!errorUpdate) {
                            resolve({
                              status: 200,
                              message: `Change Password , berhasil`,
                            });
                          } else {
                            reject({
                              status: 500,
                              message: errorUpdate,
                            });
                          }
                        }
                      );
                    }
                  }
                );
              }
            });
          } else {
            reject({
              status: 404,
              message: `data tidak ditemukan`,
            });
          }
        } else {
          reject({
            status: 500,
            message: err,
          });
        }
      });
    });
  },
  postLogout: (blacklisToken) => {
    return new Promise((resolve, reject) => {
      const queryStr = "INSERT INTO blocklist_token SET ?";
      db.query(queryStr, blacklisToken, (err, data) => {
        if (!err) {
          resolve({
            msg: `Logout succesful`,
          });
        } else {
          reject({
            msg: `GAGAL!`,
          });
        }
      });
    });
  },
  setPIN: (email, pin) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE users SET pin = ? WHERE email = ?`;
      db.query(queryStr, [pin, email], (err, data) => {
        if (!err) {
          resolve({
            status: 200,
            message: `SET PIN berhasil`,
          });
        } else {
          reject({
            status: 500,
            message: err,
          });
        }
      });
    });
  },
  checkPIN: (email, PIN) => {
    console.log(email, PIN);
    return new Promise((resolve, reject) => {
      const queryStr = `SELECT * FROM users WHERE email = ? AND pin = ?`;
      console.log(queryStr);
      db.query(queryStr, [email, PIN], (err, data) => {
        if (!err) {
          console.log("a");
          if (data.length > 0) {
            console.log("b");
            resolve({
              status: 200,
              message: `Otentikasi PIN berhasil`,
            });
          } else {
            console.log("c");
            reject({
              status: 404,
              message: `PIN salah`,
            });
          }
        } else {
          console.log("d");
          reject({
            status: 500,
            details: err,
          });
        }
      });
    });
  },
};
