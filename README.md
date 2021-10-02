Please drop a STAR🌟 if you like my work and fork it if you want any further assistance.

![GitHub repo size](https://img.shields.io/github/repo-size/GaurangShukla/College-ERP?style=for-the-badge) ![GitHub commit merge status](https://img.shields.io/github/commit-status/GaurangShukla/College-ERP/master/0b8de4cc6105fb5d6b0cd82a89a27d46ffa92072?style=for-the-badge) [![GitHub stars](https://img.shields.io/github/stars/GaurangShukla/College-ERP?style=for-the-badge)](https://github.com/GaurangShukla/College-ERP/stargazers) [![GitHub issues](https://img.shields.io/github/issues/GaurangShukla/College-ERP?style=for-the-badge)](https://github.com/GaurangShukla/College-ERP/issues) 
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/320px-React-icon.svg.png) 
# College ERP🏫 in REACTJs 

* This is a simple college erp web app in MERN stack,it consist of all the basic CRUD operations.
* All the fields (students,teachers,class,exams) can be edited via the admin panel.
# Prerequisites 🧾
* MongoDb- Install mongodb GUI on your machine.
* Nodejs - Install nodejs.
* Yarn- If npm fails yarn works as a fail safe.
# Features 👓
* Create new students.
* Create new teacher.
* Create new exam.
* Create new user and assign permissions and roles.
* Create new course.
* Students, Teacher are in one-to-many relations in database.
* Exam, Course,admin are in mant-to-many realtions in database.

# Instructions👨‍🏫
* Open project folder in a terminal or prefered IDE .
* Perform "npm install " or "yarn install".
* Type npm "start-script build" this will make a html and manifest file in client/build folder to render on a browser.
* Once node_modules are downloaded type "npm start" or "yarn start" to start the server on prescribed port.

# Screenshot 📷
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(161).png)![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(162).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(163).png)![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(164).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(165).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(166).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(167).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(168).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(169).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(170).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(171).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(172).png)
![Screenshot](https://github.com/GaurangShukla/College-ERP/blob/master/client/public/Screenshot%20(173).png)

# SCHEMA
* USER 

| ID      | Primary Key | Required |Unique     |   
| :---        |    :----:   |          ---: | ---: |
| Mail      | String       |    |
| name   | String        |       |
| password   | String   |✔  | ✔ | 
| roles   | String        |       |
| surname   | String        |      |
| username   | String        |✔      |  ✔  |


* COURSE

| ID      | Primary Key | Required |Unique     |   
| :---        |    :----:   |          ---: | ---: |
| Name   | String        |✔      |  

* EXAM 

| ID      | Primary Key | Required |Unique     |   
| :---        |    :----:   |          ---: | ---: |
| Place   | String        |      |  |
| Score  | Number        |      |  |
| Valid  | Boolean        |      |  |

* Relations

| _course     | _student | _teacher     | 
| :---        |    :----:   |          ---: | 
| course   | student        |  teacher    |
| one-to-many   | one-to-many        |  one-to-many    |

* STUDENT
 
| ID      | Primary Key | Required |Unique     |   
| :---        |    :----:   |          ---: | ---: |
| DOB   | Date        |   ✔   |  |
| lastname  | String        |  ✔    |  |
| name  | String        |     ✔ |  |

* Relations

| _course     | 
| :---        | 
| course   |         |      |
| many-to-many   |         |      |

* TEACHERS

| ID      | Primary Key | Required |Unique     |   
| :---        |    :----:   |          ---: | ---: |
| lastname  | String        |  ✔    |  |
| name  | String        |     ✔ |  |

* Relations

| _course     | 
| :---        | 
| course   |         |      |
| many-to-many   |         |      |

### Please Provide valuable Feedback 😊

