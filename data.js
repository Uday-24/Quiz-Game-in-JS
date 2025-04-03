const quizAllData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        correct: 1,
    },
    {
        question: "What is the JavaScript function used to select an HTML element by its id?",
        options: ["document.query", "getElementById", "selectElement", "findElementById"],
        correct: 1,
    },
    {
        question: "In React.js, which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Angular", "Laravel", "Django", "Spring"],
        correct: 0,
    },
    {
        question: "Which protocol is used for secure communication over the Internet?",
        options: ["HTTP", "FTP", "SSL", "HTTPS"],
        correct: 3,
    },
    {
        question: "Which HTML element is used to define important text?",
        options: ["<strong>", "<b>", "<em>", "<i>"],
        correct: 0,
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct: 0,
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "Java Serialized Object Notation", "Java Syntax Object Notation", "JavaScript Object Network"],
        correct: 0,
    },
    {
        question: "Which CSS property is used to set the background color of an element?",
        options: ["background-color", "color", "bgcolor", "background"],
        correct: 0,
    },
    {
        question: "Which JavaScript method is used to remove the last element from an array?",
        options: ["pop()", "shift()", "splice()", "remove()"],
        correct: 0,
    },
    {
        question: "Which Git command is used to check the status of changes?",
        options: ["git status", "git check", "git diff", "git log"],
        correct: 0,
    },
    {
        question: "What is the default flex-direction in CSS Flexbox?",
        options: ["row", "column", "row-reverse", "column-reverse"],
        correct: 0,
    },
    {
        question: "Which of the following is NOT a valid HTTP method?",
        options: ["GET", "FETCH", "POST", "DELETE"],
        correct: 1,
    },
    {
        question: "Which JavaScript event occurs when an element is clicked?",
        options: ["onmouseover", "onchange", "onclick", "onfocus"],
        correct: 2,
    },
    {
        question: "Which JavaScript keyword is used to define a function?",
        options: ["def", "func", "function", "define"],
        correct: 2,
    },
    {
        question: "Which programming language is primarily used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        correct: 1,
    },
    {
        question: "Which SQL clause is used to filter results?",
        options: ["WHERE", "ORDER BY", "SELECT", "GROUP BY"],
        correct: 0,
    },
    {
        question: "Which HTTP status code represents 'Not Found'?",
        options: ["200", "301", "404", "500"],
        correct: 2,
    },
    {
        question: "Which CSS property is used to control the transparency of an element?",
        options: ["visibility", "opacity", "filter", "alpha"],
        correct: 1,
    },
    {
        question: "Which JavaScript function is used to convert a string into an integer?",
        options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
        correct: 0,
    },
    {
        question: "Which of the following is used to fetch data asynchronously in JavaScript?",
        options: ["fetch()", "getData()", "httpRequest()", "load()"],
        correct: 0,
    },
    {
        question: "Which of the following is a valid JavaScript boolean value?",
        options: ["true", "false", "both", "none"],
        correct: 2,
    },
    {
        question: "Which command is used to initialize a new Git repository?",
        options: ["git init", "git start", "git create", "git new"],
        correct: 0,
    },
    {
        question: "What is the default border style of an HTML table?",
        options: ["solid", "none", "dashed", "double"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to control the space between lines of text?",
        options: ["word-spacing", "letter-spacing", "line-height", "text-spacing"],
        correct: 2,
    },
    {
        question: "Which JavaScript method is used to sort an array?",
        options: ["sort()", "order()", "arrange()", "sequence()"],
        correct: 0,
    },
    {
        question: "Which of the following is a JavaScript framework for building user interfaces?",
        options: ["React", "Laravel", "Django", "Flask"],
        correct: 0,
    },
    {
        question: "Which SQL statement is used to update existing records in a database?",
        options: ["UPDATE", "MODIFY", "CHANGE", "EDIT"],
        correct: 0,
    },
    {
        question: "Which CSS unit is relative to the font-size of the root element?",
        options: ["em", "rem", "px", "%"],
        correct: 1,
    },
    {
        question: "Which JavaScript function is used to join elements of an array into a string?",
        options: ["concat()", "join()", "merge()", "combine()"],
        correct: 1,
    },
    {
        question: "Which Git command is used to create a new branch?",
        options: ["git branch", "git checkout", "git switch", "git clone"],
        correct: 0,
    },
    {
        question: "Which of the following is a frontend JavaScript library?",
        options: ["Vue.js", "Node.js", "Express.js", "Django"],
        correct: 0,
    },
    {
        question: "Which HTTP method is used to request data from a server?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to make text bold?",
        options: ["text-style", "font-bold", "font-weight", "bold"],
        correct: 2,
    },
    {
        question: "Which programming language is mainly used for backend development?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        correct: 3,
    },
    {
        question: "Which of the following is NOT a valid JavaScript variable name?",
        options: ["_variable", "$var", "123variable", "camelCase"],
        correct: 2,
    },
    {
        question: "Which JavaScript function is used to execute a function after a delay?",
        options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        correct: 0,
    },
    {
        question: "Which HTML element is used to define a footer for a document or section?",
        options: ["<footer>", "<bottom>", "<section>", "<end>"],
        correct: 0,
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "foreground"],
        correct: 1,
    },
    {
        question: "Which JavaScript method is used to add a new element to the end of an array?",
        options: ["push()", "append()", "insert()", "add()"],
        correct: 0,
    },
    {
        question: "Which version of ECMAScript introduced let and const?",
        options: ["ES5", "ES6", "ES7", "ES8"],
        correct: 1,
    },
    {
        question: "Which tag is used to create a table in HTML?",
        options: ["<tr>", "<td>", "<th>", "<table>"],
        correct: 3,
    },
    {
        question: "Which CSS property is used to control the width of an element’s border?",
        options: ["border-width", "border-size", "border-style", "border-thickness"],
        correct: 0,
    },
    {
        question: "Which HTTP status code indicates a successful request?",
        options: ["200", "400", "500", "301"],
        correct: 0,
    },
    {
        question: "Which SQL keyword is used to retrieve unique records?",
        options: ["DISTINCT", "FILTER", "LIMIT", "UNIQUE"],
        correct: 0,
    },
    {
        question: "Which JavaScript method is used to check if an array contains a specific value?",
        options: ["includes()", "find()", "exists()", "search()"],
        correct: 0,
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: ["let", "var", "const", "static"],
        correct: 2,
    },
    {
        question: "Which CSS property is used to make text italic?",
        options: ["font-style", "text-style", "italic", "font-italic"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: ["<image>", "<img>", "<pic>", "<src>"],
        correct: 1,
    },
    {
        question: "Which method is used to convert a JavaScript object into a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "stringifyJSON()"],
        correct: 1,
    },
    {
        question: "Which database is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
        correct: 2,
    },
    {
        question: "Which JavaScript function is used to generate a random number?",
        options: ["random()", "Math.random()", "rand()", "generateRandom()"],
        correct: 1,
    },
    {
        question: "Which HTTP method is used to submit form data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to make an element float to the right?",
        options: ["float", "position", "align", "display"],
        correct: 0,
    },
    {
        question: "Which JavaScript function is used to round a number to the nearest integer?",
        options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
        correct: 2,
    },
    {
        question: "Which Git command is used to fetch and merge changes from a remote repository?",
        options: ["git fetch", "git pull", "git merge", "git clone"],
        correct: 1,
    },
    {
        question: "Which JavaScript loop is best for iterating over object properties?",
        options: ["for", "forEach", "for...in", "for...of"],
        correct: 2,
    },
    {
        question: "Which programming language is used for developing Android apps?",
        options: ["Swift", "Kotlin", "C#", "Ruby"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to create space inside an element?",
        options: ["margin", "padding", "spacing", "border"],
        correct: 1,
    },
    {
        question: "Which data structure uses the LIFO (Last In, First Out) principle?",
        options: ["Queue", "Stack", "Linked List", "Array"],
        correct: 1,
    },
    {
        question: "Which method is used to remove whitespace from both ends of a string in JavaScript?",
        options: ["trim()", "strip()", "removeSpace()", "clean()"],
        correct: 0,
    },
    {
        question: "Which JavaScript operator is used to check both value and type?",
        options: ["==", "===", "!=", "!=="],
        correct: 1,
    },
    {
        question: "Which HTTP status code represents 'Internal Server Error'?",
        options: ["200", "400", "404", "500"],
        correct: 3,
    },
    {
        question: "Which SQL command is used to remove a table from a database?",
        options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
        correct: 2,
    },
    {
        question: "Which JavaScript function is used to find the length of an array?",
        options: ["size()", "length()", "count()", "getLength()"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to set an element’s font size?",
        options: ["text-size", "font-size", "size", "font"],
        correct: 1,
    },
    {
        question: "Which JavaScript method is used to add elements to the beginning of an array?",
        options: ["push()", "unshift()", "append()", "insert()"],
        correct: 1,
    },
    {
        question: "Which programming language is primarily used for artificial intelligence and machine learning?",
        options: ["Java", "Python", "C++", "JavaScript"],
        correct: 1,
    },
    {
        question: "Which HTML tag is used to define a line break?",
        options: ["<break>", "<br>", "<lb>", "<hr>"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to align text in a container?",
        options: ["align-text", "text-align", "justify", "align"],
        correct: 1,
    },
    {
        question: "Which JavaScript function is used to convert a string to lowercase?",
        options: ["toLowerCase()", "lowerCase()", "convertLower()", "toLower()"],
        correct: 0,
    },
    {
        question: "Which of the following is a valid JavaScript data type?",
        options: ["integer", "float", "boolean", "character"],
        correct: 2,
    },
    {
        question: "Which Git command is used to commit changes with a message?",
        options: ["git commit", "git commit -m", "git save", "git push"],
        correct: 1,
    },
    {
        question: "Which HTML tag is used to display a checkbox?",
        options: ["<check>", "<checkbox>", "<input type='checkbox'>", "<box>"],
        correct: 2,
    },
    {
        question: "Which of the following is a relational database?",
        options: ["MongoDB", "Firebase", "MySQL", "Redis"],
        correct: 2,
    },
    {
        question: "Which CSS property is used to add a shadow to text?",
        options: ["text-shadow", "shadow", "font-shadow", "box-shadow"],
        correct: 0,
    },
    {
        question: "Which programming language is used for developing iOS apps?",
        options: ["Swift", "Kotlin", "C#", "Ruby"],
        correct: 0,
    },
    {
        question: "Which JavaScript function is used to remove a specific element from an array?",
        options: ["remove()", "splice()", "delete()", "cut()"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to make an element hidden?",
        options: ["display: none", "visibility: hidden", "opacity: 0", "All of the above"],
        correct: 3,
    },
    {
        question: "Which HTTP status code represents 'Forbidden'?",
        options: ["401", "403", "404", "500"],
        correct: 1,
    },
    {
        question: "Which SQL clause is used to sort results in ascending order?",
        options: ["ORDER BY ASC", "SORT ASC", "ARRANGE ASC", "GROUP BY ASC"],
        correct: 0,
    },
    {
        question: "Which JavaScript method is used to replace text in a string?",
        options: ["replace()", "changeText()", "update()", "modify()"],
        correct: 0,
    },
    {
        question: "Which of the following is NOT a frontend technology?",
        options: ["React", "Vue", "Django", "Angular"],
        correct: 2,
    },
    {
        question: "Which JavaScript method is used to get the index of an element in an array?",
        options: ["getIndex()", "indexOf()", "findIndex()", "locate()"],
        correct: 1,
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: ["<table>", "<tr>", "<td>", "<th>"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to make an element fully transparent?",
        options: ["opacity", "visibility", "display", "background-opacity"],
        correct: 0,
    },
    {
        question: "Which JavaScript function is used to pause execution for a given time?",
        options: ["wait()", "pause()", "sleep()", "setTimeout()"],
        correct: 3,
    },
    {
        question: "Which SQL keyword is used to retrieve all columns from a table?",
        options: ["GET *", "SELECT ALL", "SELECT *", "FETCH *"],
        correct: 2,
    },
    {
        question: "Which command is used to check the installed version of Node.js?",
        options: ["node -v", "npm -v", "node --version", "Both 1 and 3"],
        correct: 3,
    },
    {
        question: "Which CSS property is used to specify the width of a border?",
        options: ["border-width", "border-style", "border-size", "border-spacing"],
        correct: 0,
    },
    {
        question: "Which of the following is NOT a JavaScript loop?",
        options: ["for", "while", "foreach", "loop"],
        correct: 3,
    },
    {
        question: "Which JavaScript method is used to convert a JSON string into an object?",
        options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "convertJSON()"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create a dropdown list?",
        options: ["<select>", "<dropdown>", "<list>", "<option>"],
        correct: 0,
    },
    {
        question: "Which JavaScript method is used to remove the first element from an array?",
        options: ["pop()", "shift()", "remove()", "slice()"],
        correct: 1,
    },
    {
        question: "Which SQL statement is used to retrieve data from a database?",
        options: ["FETCH", "GET", "SELECT", "QUERY"],
        correct: 2,
    },
    {
        question: "Which HTTP status code represents 'Unauthorized'?",
        options: ["200", "301", "401", "500"],
        correct: 2,
    },
    {
        question: "Which command is used to install a package in Node.js?",
        options: ["node install", "npm install", "install package", "node get"],
        correct: 1,
    },
    {

        question: "Which JavaScript function is used to execute a function repeatedly at fixed time intervals?",
        options: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
        correct: 0,
    }
];


