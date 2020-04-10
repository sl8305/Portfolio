// Dynamically rendering the Projects section on index page. 
// from userProjects from constants folder
var userProjects = getuserProjects();

$(document).ready(function () {
    $('#indexProjectDiv').empty();


    const cardContainer = $('<div class="col-lg-4 col-md-10 col-sm-10 card"/>').appendTo('#indexProjectDiv');
        $('<img class="card-img-top" src='+ userProjects[0].src +' alt="testImageAltName">').appendTo(cardContainer);
        const cardBody = $('<div class="card-body">').appendTo(cardContainer);
        $("<p>" + userProjects[0].shortDescription + "</p>").appendTo(cardBody);
        $('<a href='+ userProjects[0].liveLink +' class="btn btn-primary projCardBtn">Live Page</a>').appendTo(cardBody);
        $('<a href='+ userProjects[0].repoLink +' class="btn btn-primary projCardBtn">Github Page</a>').appendTo(cardBody);

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
    //         <img class="card-img-top" src="" alt="Card image cap">
    //         <div class="card-body">
    //             <h5 class="card-title">Train Scheduler</h5>
    //             <p class="card-text"> </p>
    //             <a href="/" class="btn btn-primary">Live page</a>
    //             <a href="" class="btn btn-primary">Github Repo</a>
    //         </div>
    //     </div>
    // </div>


    // EXTRA
    // <div class=' col-lg-4 col-md-10 col-sm-10'>
    //     <div class="card">
    //         <img class="card-img-top" src="" alt="Card image cap">
    //         <div class="card-body">
    //             <h5 class="card-title">Crystal Numbers Game</h5>
    //             <p class="card-text">  </p>
    //             <a href="/" class="btn btn-primary">Live page</a>
    //             <a href="" class="btn btn-primary">Github Repo</a>
    //         </div>
    //     </div>
    // </div> 

});