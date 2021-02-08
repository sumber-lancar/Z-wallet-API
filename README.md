
<h1 align="center">Zwallet Backend</h1>
<p>This is the dependency of <a href="https://github.com/sumber-lancar/Z-wallet-RN">Zwallet App</a>. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js.</p> 
<a href="https://en.wikipedia.org/wiki/Express.js">More about expressJS</a>


## Contents

  

-  [Description](#description)

-  [Requirements](#requirements)

-  [Installation](#installation)

-  [Endpoint](#endpoint)

-  [Documentation](#documentation)

-  [Related Project](#related-project)

  

## Description

  

This is RESTful api design for

[`Zwallet App frontend`](https://github.com/solehudin5699/ZWALLET-frontend.git).

Built with Node js, using ExpressJs framework and other libraries.

  

## Requirements

  

-  [`Node Js`](https://nodejs.org/en/)

-  [`npm`](https://www.npmjs.com/get-npm)

-  [`ExpressJs`](https://expressjs.com/)

-  [`Postman`](https://www.postman.com/downloads/)

-  [`Remote MYSQL`](https://remotemysql.com/phpmyadmin/index.php)

  

## Installation

  

1. Open your terminal or command prompt

2. Type `https://github.com/sumber-lancar/Z-wallet-API.git`

3. Open the folder and type `npm install` for install dependencies

4. If you haven't installed nodemon, please install it globally, type

`npm install -g nodemon`

5. Register an account at **[RemoteMysql](https://remotemysql.com/)** and create new database

6. Create file **_.env_** in root folder with the following contents :

  

```bash

MYSQL_HOST = "remotemysql.com"
MYSQL_USER = "remotemysqldb_user"
MYSQL_PASS = "remotemysqldb_pass"
MYSQL_DATABASE = "remotemysqldb"
HOSTNAME = "your_localhost"
SECRET_KEY = ""

USER_EMAIL = EMAIL
PASS_EMAIL = PASSWORD

```

  

Customize each value with the one you are using.

  

Example:

  

```bash

MYSQL_HOST = 'localhost'

MYSQL_USERNAME = 'root'

MYSQL_DATABASE = 'zwallet_db'

MYSQL_PASSWORD = ''


USER_EMAIL='yourname@gmail.com'

PASS_EMAIL='my-email-password'

SECRET_KEY='ZwAllEt'

```

  



7. Type `npm run server` or `npm start` in terminal for run this backend.

  

## Endpoint

  

### Authentication Router

  

| No. | Method | Endpoint |

| :-: | :----: | :----------------: |

| 1 | POST | /auth/registration |

| | | /auth/login |

| | | /auth/validate |

| | | /auth/reset |

| 2 | GET | /auth/user/:id |

| 3 | PATCH | /auth/update/:id |

  

### Transfer Router

  

| No. | Method | Endpoint |

| :-: | :----: | :------: |

| 1 | GET | /contact |

  

### Transaction Router

  

| No. | Method | Endpoint |

| :-: | :----: | :--------------: |



| 1 | GET | /transaction/:id |

  

## Documentation

  

Check out the documentation here for your convenience.

  

<a  href="https://documenter.getpostman.com/view/11765677/TVYNYvQ5">

<img  src="https://img.shields.io/badge/Documentation-POSTMAN-blue.svg?style=popout&logo=postman"/>

</a>

  

## Related Project

  

Frontend Zwallet App that use this RESTful API.

  

<a  href="https://github.com/sumber-lancar/Z-wallet-RN.git">

<img  src="https://img.shields.io/badge/Zwallet%20Frontend-Repository-blue.svg?style=popout&logo=github"/>

</a>
