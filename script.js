
var projects_JavaScript = ['E-commerce-vanillaJS.png', 'Kasper.png', 'todoList.png', 'registration.png'];
var altImg_JavaScript = ['Ecommerce-NativeJS', 'Kasper', 'TodoList', 'Registration'];
var links_JavaScript = ['Ecommerce-NativeJS/', 'Kasper/', 'Todolist/', 'Registration' ];
var titles_JavaScript = ['Ecommerce-NativeJS', 'Kasper', 'TodoList', 'Registration'];

var JavaScript__grid = document.getElementById("JavaScript__grid");
JavaScript__grid.innerHTML = '';
var i = 0;
projects_JavaScript.forEach(project => {
    JavaScript__grid.innerHTML += `
    <div>    
    <a href="https://amirahassandev.github.io/${links_JavaScript[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_JavaScript[i]}</p>
                </div>
                <img src="assets/native_js/${project}" alt="${altImg_JavaScript[i]}">
            </div>
        </a>
        <a class="repo" href="https://github.com/amirahassandev/${links_JavaScript[i]}">
            Repo
        </a>
    </div>`;
    i++
    }

);



var projects_React = ['todoList.png'];
var altImg_React = ['todoList'];
var links_github_React = ['Todolist_React/']
var links_React = ['https://poetic-melomakarona-6b80e8.netlify.app/'];
var titles_React = ['Todolist_React'];

var React__grid = document.getElementById("React__grid");
React__grid.innerHTML = '';
var i = 0;
projects_React.forEach(project => {
    React__grid.innerHTML += `
    <div>    
    <a href="${links_React[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_React[i]}</p>
                </div>
                <img src="assets/React/${project}" alt="${altImg_React[i]}">
            </div>
        </a>
        <a class="repo" href="https://github.com/amirahassandev/${links_github_React[i]}">
            Repo
        </a>
    </div>`;
    i++
    }

);



var projects_django = ['Doctors_hup.png', 'todoList_django.png'];
var altImg_django = ['Doctors_hup', 'todoList_django'];
var links_django = ['DoctorsHubApplication', 'todoList_django'];
var titles_django = ['Doctors_hup', 'TodoList_django'];

var django__grid = document.getElementById("django__grid");
django__grid.innerHTML = '';
var i = 0;
projects_django.forEach(project => {
    django__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_django[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_django[i]}</p>
                </div>
                <img src="assets/django/${project}" alt="${altImg_JavaScript[i]}">
            </div>
        </a>`;
        i++;
});


var projects_cSharp = ['TextDataAnalyzer.png', 'LibraryManagementSystem.png'];
var altImg_cSharp = ['TextDataAnalyzer', 'LibraryManagementSystem'];
var links_cSharp = ['TextDataAnalyzer', 'LibraryManagementSystem'];
var titles_cSharp = ['TextDataAnalyzer', 'LibraryManagementSystem'];

var cSharp__grid = document.getElementById("cSharp__grid");
cSharp__grid.innerHTML = '';
var i = 0;
projects_cSharp.forEach(project => {
    cSharp__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_cSharp[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_cSharp[i]}</p>
                </div>
                <img src="assets/CSharp/${project}" alt="${altImg_cSharp[i]}">
            </div>
        </a>`;
        i++;
});


var projects_net = ['newspaper.png', 'company.png', 'E-Commerce-APIs.png', 'Hospital_Database.jpg'];
var altImg_net = ['newspaper', 'company', 'E-Commerce', 'Hospital_Management_System'];
var links_net = ['Newspaper', 'Company', 'E-Commerce_APIs', 'Hospital_Management_System'];
var titles_net = ['Newspaper', 'Company', 'E-Commerce_APIs', 'Hospital_Management_System'];
var net__grid = document.getElementById("net__grid");
net__grid.innerHTML = '';
var i = 0;
projects_net.forEach(project => {
    net__grid.innerHTML += `
        <a href="https://github.com/amirahassandev/${links_net[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_net[i]}</p>
                </div>
                <img src="assets/dotnet/${project}" alt="${altImg_net[i]}">
            </div>
        </a>`
        ;
        i++;
});


var projects_springboot = ['E-commerce.png', 'TryAndBuy.png'];
var altImg_springboot = ['E-commerce', 'Try&Buy'];
var links_springboot = ['AmiraHassan2003/Project_Software_two', 'amirahassandev/TryAndBuy_GradProject'];
var titles_springboot = ['E-commerce', 'Try&Buy (Graduation Project)'];

var springboot__grid = document.getElementById("springboot__grid");
springboot__grid.innerHTML = '';
var i = 0;
projects_springboot.forEach(project => {
    springboot__grid.innerHTML += `
        <a href="https://github.com/${links_springboot[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_springboot[i]}</p>
                </div>
                <img src="assets/Spring_boot/${project}" alt="${altImg_springboot[i]}">
            </div>
        </a>`;
        i++;
});



var certificate_links = 
    [
        '.Net/Full_stack%20Using%20.Net.jpg', 
        'DJango/Full_stack%20Using%20Python.jpg', 
        'DJango/Python%20Programming%20Basics.pdf',
        'TypeScript%20Foundamentals.pdf',
        'Modern%20JS.pdf',
        'Javascript.pdf',
        'HTML%20%26%20CSS.pdf',
        'Mastering_MYSQL.pdf',
        'web_development.pdf',
        '.Net/ASPDotNet_C%23Programming_JS_HTML.pdf',
        'DataStructure.pdf',
        'depi.png',
    ];

var certificate_titles = 
    [
        'Full-Stack Web Development using .Net (ITI)', 
        'Full-Stack Web Development using Python (ITI)',
        'Python Programming Basic (mahara-tech)',
        'TypeScript Fundamentals (mharatech)',
        'Modern JavaScript (mahara-tech)',
        'JavaScript (mahara-tech)',
        'HTML & CSS (mahara-tech)',
        'Mastering MYSQL (Udemy)',
        'WEB DEVELOPMENT (udacity)',
        'ASP .Net C# Programming with JS and HTML (Udemy)',
        'Data Structures (It-Sharks)',
        'Digital Egypt Pioneers Initiative (DEPI) - Python Programming & Data Management'
    ];

var certificate_desc = 
[
    'finished a full-stack development course that covered database integration with.NET technologies, back-end development, and MVC architecture. acquired hands-on expertise in developing web applications that are scalable',
    'finished a full-stack development course with an emphasis on database integration using Django, MVC architecture, and back-end programming. developed practical knowledge in building reliable and dynamic web apps.',
    'User completed a foundational Python programming course, covering variables, data types, loops, functions, and algorithms, with hands-on experience in solving problems and building applications.',
    'User completed a TypeScript course, learning types, interfaces, classes, and modules, with hands-on experience in writing type-safe code and integrating it with JavaScript.',
    'User completed a course on advanced JavaScript features, including ES6+, asynchronous programming, and best practices for writing clean, efficient, and maintainable code.',
    'User completed a course in JavaScript, covering functions, loops, DOM manipulation, and event handling, with hands-on experience in building interactive web applications and improving client-side functionality.',
    'User completed a course in HTML and CSS, gaining hands-on experience in building responsive web pages, structuring content with HTML, and styling with CSS.',
    'Gained expertise in MySQL database creation, management, and query optimization. Learned to design efficient relational databases, write complex SQL queries, and manage data effectively using MySQL.',
    'Gained practical experience in building responsive websites using HTML and advanced CSS. Learned to customize and manage websites with WordPress, culminating in a final project that brought together design, structure, and functionality.',
    'I completed a Udemy course covering HTML, JavaScript, and ASP.NET with C#. I used it to refresh my JavaScript and OOP knowledge, while also strengthening my understanding of C# syntax and full-stack web development basics.',
    'I have learned the concepts and implementation of fundamental data structures in C, including arrays, stacks, queues, linked lists, and binary search trees. This helped me understand how data is organized, stored, and accessed efficiently in memory, and improved my problem-solving and programming skills.',
    'Completed an intensive specialization in Python backend development and relational data management through the MCIT Digital Egypt Pioneers Initiative. During this program, I engineered a robust Employee Data Management System, focusing on efficient file handling (CSV), search optimization, and implementing clean CRUD logic to ensure data integrity and system scalability',
];



var certification__grid = document.getElementById("certification__grid");
certification__grid.innerHTML = '';
var i = 0;
certificate_titles.forEach(certificate => {
    certification__grid.innerHTML += `
        <div class="certification__card">
            <h4><a style="color: #FF6B35" href="https://github.com/amirahassandev/Certificates/blob/main/FullStack/${certificate_links[i]}">${certificate}</a></h4>
            <p>
            ${certificate_desc[i]}
            </p>
        </div>`
        i++;
});


