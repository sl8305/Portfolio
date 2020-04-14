// Dynamically rendering fullProjects.html
// from userProjects from constants folder
var userProjects = getuserProjects();


$(document).ready(function() {
    $('#fullProjectsDiv').empty();
    
    for (i=0; i<userProjects.length; i++) {
        
        const projectRow = $('<div class="row projectCenter">').appendTo('#fullProjectsDiv');
            const projectCol1 = $('<div class="col-lg-8" style="padding-bottom: 15px">').appendTo(projectRow);
                $('<h3>' + userProjects[i].title + '</h3>').appendTo(projectCol1);
                $('<p>' + userProjects[i].longDescription + '</p>').appendTo(projectCol1);
                $('<a href="' + userProjects[i].liveLink + '" target="_blank" class="btn btn-primary mr-3">Live Page</a>').appendTo(projectCol1);
                $('<a href="' + userProjects[i].repoLink + '" target="_blank" class="btn btn-primary mx-3">Github Repo</a>').appendTo(projectCol1);

            const projectCol2 = $('<div class="col-lg-4 m-auto">').appendTo(projectRow);
                $('<img src="' + userProjects[i].src + '" style="width:fit-content; max-width:100%; "/>').appendTo(projectCol2);   
    }

});

