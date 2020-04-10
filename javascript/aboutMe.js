// Dynamically rendering the About Me section. 
// from userInfo in consts folder
var userInfo = getUserInfo();

$(document).ready(function() {
    $("#aboutMeDiv").empty();

    // Name and Title section
    const intro = $('<div class="intro">').appendTo('#aboutMeDiv');
        $('<h1>' + userInfo.name + '</h1>').appendTo(intro);
        $('<h3>' + userInfo.title + '</h3>').appendTo(intro);
        $('<img src="./images/Me.jpg" alt="my pic">').css("height", 600).appendTo(intro);


    // About 
    const about = $('<div class="centerInfo">').appendTo("#aboutMeDiv");
        $('<h2>About</h2>').appendTo(about);
        $('<p>' + userInfo.aboutDescription + '</p>').appendTo(about);


    // Skillset
    const skillSet = $('<div class="centerInfo">').appendTo("#aboutMeDiv");
        $('<h2>Skillset</h2>').appendTo(skillSet);
        $('<p>' + userInfo.skillSetDescription + '</p>').css("font-weight", "bold").appendTo(skillSet);

});
