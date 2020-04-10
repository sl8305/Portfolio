// Dynamically rendering the Projects section on index page. 
// from userProjects from constants folder
var userProjects = getuserProjects();

$(document).ready(function () {
    $('#indexProjectDiv').empty();


    const cardContainer = $('<div class="col-lg-4 col-md-10 col-sm-10"/>');
    const cardImage = $('<img src='+ testFile.projects[0].src +' alt="testImageAltName">');


    cardContainer.appendTo('#indexProjectDiv');
    cardImage.appendTo(cardContainer);
    $(cardContainer).append("<p>" + testFile.projects[0].title + "</p>");


    // <div class=' col-lg-4 col-md-10 col-sm-10'>
    //     <div class="card">
    //         <img class="card-img-top" src="./images/groupProj.PNG" alt="Card image cap">
    //         <div class="card-body">
    //             <h5 class="card-title">mResilience</h5>
    //             <p class="card-text">Single page informational site for another app. The objective of this project was to create a mobile responsive site that followed the requirements provided by the client. This group project was the first experience working with a wireframe and was a great opportunity to polishing up our skills with html, css, web layout design and merging code. </p>
    //             <a href="https://sl8305.github.io/mResilience/" class="btn btn-primary">Live page</a>
    //             <a href="https://github.com/sl8305/mResilience" class="btn btn-primary">Github Repo</a>
    //         </div>
    //     </div>
    // </div>

    // <div class=' col-lg-4 col-md-10 col-sm-10'>
    //     <div class="card">
    //         <img class="card-img-top" src="./images/homeimage-sm.jpg" alt="Card image cap" 
    //         style= "width: 40%; align-self: center; " >
            
    //         <div class="card-body">
    //             <h5 class="card-title">Unravel</h5>
    //             <p class="card-text">Unravel Mobile® is a Cognitive Behavioral Therapy Tool for Patients and Therapists.  Unravel Mobile® is a React Native app that offers an alternative to the traditional method of recording de-stressing events. Unravel Mobile® offers the user the opportunity to log how they are feeling at the touch of a couple of buttons.</p>
    //             <a href="https://exp.host/@sl8305/UnravelApp" class="btn btn-primary">Live page</a>
    //             <a href="https://github.com/Unravel-Mobile/Unravel" class="btn btn-primary">Github Repo</a>
    //         </div>
    //     </div>
    // </div>

    // <div class=' col-lg-4 col-md-10 col-sm-10'>
    //     <div class="card">
    //         <img class="card-img-top" src="./images/train.png" alt="Card image cap">
    //         <div class="card-body">
    //             <h5 class="card-title">Train Scheduler</h5>
    //             <p class="card-text">First time using moments.js and using a page layout with rows and columns. Train schedules can be input and the list updates with relative times of other trains and the current time. </p>
    //             <a href="https://sl8305.github.io/train-scheduler/" class="btn btn-primary">Live page</a>
    //             <a href="https://github.com/sl8305/train-scheduler" class="btn btn-primary">Github Repo</a>
    //         </div>
    //     </div>
    // </div>


    // EXTRA
    // <div class=' col-lg-4 col-md-10 col-sm-10'>
    //     <div class="card">
    //         <img class="card-img-top" src="./images/crystal.PNG" alt="Card image cap">
    //         <div class="card-body">
    //             <h5 class="card-title">Crystal Numbers Game</h5>
    //             <p class="card-text">This game exemplifies the usage of random number generators, clickable images and simple game logic. Each crystal has a hidden random value and the player must guess to add up the values to a randomly generated target value. Wins and loses are recorded and a reset mechanism is used to allow for continual fun.  </p>
    //             <a href="https://sl8305.github.io/gem-game/" class="btn btn-primary">Live page</a>
    //             <a href="https://github.com/sl8305/gem-game" class="btn btn-primary">Github Repo</a>
    //         </div>
    //     </div>
    // </div> 

});