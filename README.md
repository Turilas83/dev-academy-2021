# dev-academy-2021 exercise - Name Application

Names application made with Node.JS Express API and React UI.
All results returned from API are in JSON format. Served data is read from the names.json file.

API endpoints:
/                                  Returns statuscode 200 and message "OK"
/names/most-popular                Returns names most popular first
/names/alphabetical-order          Returns names in alphabetical order
/names/count                       Returns count of all names
/names/search/<Name>               Returns name and amount of name given as a parameter

You can start API and UI individually if you want, or use: "npm dev run" -command to start both at the same time. API answers from port 5000 and UI from port 3000.

# Instructions

Your task is to implement a name application. The application should have an user interface. The user interface can be either a web application or an api. (It can even contain both if you have enough time and enthusiasm.) 

The user interface should provide at least the first one of the following requirements, but again, you’re allowed to implement them all.
1. List names and amounts, order by amount, most popular first
2. List names in alphabetical order
3. Return the total amount of all the names
4. Return the amount of the name given as a parameter

The data for the application is stored in a json file ([names.json](https://github.com/solita/dev-academy-2020/blob/main/names.json)). The material contains the top-10 of both male and female names in Solita. You can use the json file directly as your data source or you can store the data in a database if you wish.

Technologies which are used in the projects in Solita are, for example, Java, Kotlin, Clojure, TypeScript, C#, React, Angular, Vue.js, and Node.js. You can choose some of those or use your favorite technologies.

GitHub is a good choice for version control. You can attach the repository link to your dev academy application.

Be prepared to present your implementation of the name application in the possible interview. We would like to see how the application works and discuss together the technology choices you’ve made.
