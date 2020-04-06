// Dynamically rendering the Learn More section. 
// Goal is to be able to automate more of the code and reduce hardcoded sections

$(document).ready(function() {
    $("#learnMoreDiv").empty();

    const contact = $('<div>').addClass('marginAuto').addClass("container").attr("id", "bioContact").appendTo("#learnMoreDiv");

    const contactTitle = $('<h2>').text("Learn More");
    const email = $('<div>').addClass("contactMe");
    // .text() was not used becuase it does not allow special characteristics such as bolding
    const emailDescription = $('<p>"If you have any edit suggetions or interesting resources you would like to share with me. Feel free to send me an email. I can be contacted via email: <strong>shad8305@outlook.com</strong> with the subject line github comment."</p>');


    contactTitle.appendTo(contact);
    email.appendTo(contact);
    emailDescription.appendTo(email);


    const linkedIn = $('<div>').addClass("contactMe");
    const linkedInIconLink = $('<a>').attr("href", "https://www.linkedin.com/in/shad-lee-724621162/");
    const linkedInImage = $('<img>').attr("src", "images/linkedIn.png").attr("id", "linkedInIcon").addClass("footerIcon");
    const linkedInDescription = $('<p>').text("The icon here, at the bottom of the page or at the top on the navigation bar will direct you to my LinkedIn page. It will provide more information about me if you are interested in reaching out.");

    linkedInImage.appendTo(linkedInIconLink);
    linkedInIconLink.appendTo(linkedIn);
    linkedInDescription.appendTo(linkedIn);
    linkedIn.appendTo(contact);

    const gitHub = $('<div>').addClass("contactMe");
    const gitHubLink = $('<a>').attr("href", "https://github.com/sl8305");
    const gitHubImage = $('<img>').attr("src", "images/githubIcon.svg").attr("id", "gitHubIcon").addClass("footerIcon");
    const gitHubDescription = $('<p>').text("The icon here, at the bottom of the page or at the top on the navigation bar will direct you to my gitHub page. Here you can see a full list of porjects I have completed or am currently working on.");

    gitHubImage.appendTo(gitHubLink);
    gitHubLink.appendTo(gitHub);
    gitHubDescription.appendTo(gitHub);
    gitHub.appendTo(contact);
});
