// Dynamically rendering the About Me section. 
// Goal is to be able to automate more of the code and reduce hardcoded sections


$(document).ready(function() {
    $("#aboutMeDiv").empty();

    // Name and Title section
    const intro = $('<div>').addClass("intro").appendTo('#aboutMeDiv');

    const myName = $('<h1>').text('Shad Lee');
    const title = $('<h3>').text('Full-Stack Web Developer');
    const myPicture = $('<img>').attr("src" , "./images/Me.jpg").attr("alt", "my pic").css("height", 600);

    myName.appendTo(intro);
    title.appendTo(intro);
    myPicture.appendTo(intro);


    // About 
    const about = $('<div>').addClass("centerInfo").appendTo("#aboutMeDiv");
    
    const aboutTitle = $('<h2>').text("About");
    const aboutDescription = $('<p>').text("Front-End Web Developer focused on client-side coding with the MERN Stack. Experienced in developing dynamic full-stack web pages from wireframes, using APIs, Mongo, and SQL databases. Skilled communicator and effectively works in an agile development environment. Recently built a mobile app in React Native to help therapy patients in distress.");

    aboutTitle.appendTo(about);
    aboutDescription.appendTo(about);


    // Skillset
    const skillSet = $("<div>").addClass("centerInfo").appendTo("#aboutMeDiv");

    const skillSetTitle = $('<h2>').text("Skillset");
    const skillSetDescription = $('<p>').text("Javascript, React.js, jQuery, Bootstrap, HTML, CSS, Node.js, Express.js, MySQL, MongoDB").css("font-weight", "bold");

    skillSetTitle.appendTo(skillSet);
    skillSetDescription.appendTo(skillSet);

});
