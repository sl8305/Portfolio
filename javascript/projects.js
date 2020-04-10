// Dynamically rendering the Projects section on index page. 
// from userProjects from constants folder
var userProjects = getuserProjects();

$(document).ready(function () {
    $('#indexProjectDiv').empty();

    for(i=0; i<3; i++) {

        const cardContainer = $('<div class="col-lg-3 col-md-8 col-sm-8 card"/>').appendTo('#indexProjectDiv');
            $('<img class="card-img-top" src='+ userProjects[i].src +' alt="testImageAltName">').appendTo(cardContainer);
            const cardBody = $('<div class="card-body">').appendTo(cardContainer);
            $("<p>" + userProjects[i].shortDescription + "</p>").appendTo(cardBody);
            const btnBody = $('<div>').appendTo(cardContainer);
            $('<a href='+ userProjects[i].liveLink +' class="btn btn-primary projCardBtn">Live Page</a>').appendTo(btnBody);
            $('<a href='+ userProjects[i].repoLink +' class="btn btn-primary projCardBtn">Github Page</a>').appendTo(btnBody);
    }

});