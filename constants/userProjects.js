var userProjects = [
    {
        "title" : "Unravel",
        "shortDescription" : "Unravel Mobile® is a Cognitive Behavioral Therapy Tool for Patients and Therapists.  Unravel Mobile® is a React Native app that offers an alternative to the traditional method of recording de-stressing events.",
        "longDescription" : " Unravel Mobile® is a Cognitive Behavioral Therapy Tool for Patients and Therapists. <br><br> • Traditional Method: Based on the Automatic Thought Record: A pen & paper therapeutic tool (weekly homework). <br> • Challenge: Therapists have challenges with patients completing the ATR. <br> • Approach: Leverage mobile to engage patients to completing the ATR <br><br> Unravel Mobile® offers an alternative to the traditional method of recording distressing events, which a lot of times by the time the oportunity of putting pen to paper finally arrives the emotions are not the same; Unravel Mobile® offers the user the opportunity to log how they are feeling at the touch of a couple of buttons.",
        "liveLink" : "https://exp.host/@sl8305/UnravelApp",
        "repoLink" : "https://github.com/Unravel-Mobile/Unravel",
        "src" : "./images/unravelSmall.jpg"
        
    },
    {
        "title" : "mResilience",
        "shortDescription" : "mResilience is a product website aimed to give First Responders a quick overview of the mobile app. The wireframe for this group project was provided by a client. The key feature of the website is being mobile responsive for easier accessibility . ",
        "longDescription" : "mResilience is a product website aimed to give First Responders a quick overview of the program and mobile app. The page is mobile responsive for easy access and visability. An email validator API was used to vaildate a return address when using our contact form for more information. The New York Times API was used to provide the user access to new articles related to topics coverd in the mResilience app.    <br><br> This was the first time working with a wireframe provdied by a client and it provided an opportunity to hone our HTML, CSS and JavaScript skills. This project introduced us to reviewing others code and the importance of merging code in order. One important lessons I took away from this project was the use of classes to unify CSS styles across the page instead of hardcoding each element and for the entire team to be aware of this to avoid repeating lines of code.",
        "liveLink" : "https://sl8305.github.io/mResilience",
        "repoLink" : "https://github.com/sl8305/mResilience",
        "src" : "./images/groupProjSmall.png"
    },
    {
        "title" : "Train Scheduler",
        "shortDescription" : "First time using moments.js and using a page layout with rows and columns. Train schedules can be input and the list updates with relative times of other trains and the current time.",
        "longDescription" : "First time using moments.js and using a page layout with rows and columns. Train schedules can be input and the list updates with relative times of other trains and the current time.",
        "liveLink" : "https://sl8305.github.io/train-scheduler",
        "repoLink" : "https://github.com/sl8305/train-scheduler",
        "src" : "./images/trainUpdate.PNG"
    },
    {
        "title" : "GifTastic",
        "shortDescription" : "This is a fun web page that displays gifs by calling the GIPHY API with jQuery and JavaScript. Preset buttons are dynamically created to the page to render popular gif choices. Animals were used as the default theme but the user is able to freely add in queries with the javascript input. This project introduced was my introduction to API's and how to dynamically create html components with jQuery and JavaScript.",
        "longDescription" : "This is a fun web page that displays gifs by calling the GIPHY API with jQuery and JavaScript. Preset buttons are dynamically created to the page to render popular gif choices. Animals were used as the default theme but the user is able to freely add in queries with the javascript input. <br><br> This project introduced was my introduction to API's and how to dynamically create html components with jQuery and JavaScript.",
        "liveLink" : "https://sl8305.github.io/GifTastic/",
        "repoLink" : "https://github.com/sl8305/GifTastic",
        "src" : "./images/giftastic.PNG"
    },
    {
        "title" : "Reciept Tracker",
        "shortDescription" : "Working on it",
        "longDescription" : "I created a web app called receipt-tracker. I learned how to set up user authentication and the process of enabling a user to log in and or create a new user login. <br><br> There is still much I would like to add/fix to complete my vision of this but this is what I have for the time being. I am planning on adding a log out button, a setting page and fully show the receipts in an elegant diagram on the last page. (I need to study sorting algorithms first)",
        "liveLink" : "https://receipt-tracker102019.herokuapp.com/",
        "repoLink" : "",
        "src" : "./images/receipt.JPG"
    },
    {
        "title" : "Crystal Numbers Game",
        "shortDescription" : "This game exemplifies the usage of random number generators, clickable images and simple game logic. Each crystal has a hidden random value and the player must guess to add up the values to a randomly generated target value. Wins and loses are recorded and a reset mechanism is used to allow for continual fun.",
        "longDescription" : "This is an early project that functions as a simple number guessing game. Each of the four crystals have a hidden value which the user must determine to help reach the target value. Each success increments the wins and each time the player goes over the target the losses increment. The values of each gem and the target score are randomly generated upon starting the game and with each reset. <br><br> Here I learned how to create a random number generator and how to manipulate the DOM with Jquery to produce the desired visual effects. This was also the start of learning how to create game logic and translate a simple game into computer logic and code.",
        "liveLink" : "https://sl8305.github.io/gem-game",
        "repoLink" : "https://github.com/sl8305/gem-game",
        "src" : "./images/crystal.PNG"
    }


];

function getuserProjects(){
    return userProjects;
}