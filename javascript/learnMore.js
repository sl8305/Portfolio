// Dynamically rendering the Learn More section. 
// Goal is to be able to automate more of the code and reduce hardcoded sections

$(document).ready(function() {
    $("#learnMoreDiv").empty();

    const contact = $('<div id="bioContact" class="marginAuto container" />').appendTo("#learnMoreDiv");
        const contactTitle = $('<h2>').text("Learn More").appendTo(contact);
            const email = $('<div class="contactMe" />').appendTo(contact);
            // .text() was not used becuase it does not allow special characteristics such as bolding
            const emailDescription = $('<p>"If you have any edit suggetions or interesting resources you would like to share with me. Feel free to send me an email. I can be contacted via email: <strong>shad8305@outlook.com</strong> with the subject line github comment."</p>').appendTo(email);


        const linkedIn = $('<div class="contactMe" />').appendTo(contact);
            const linkedInIconLink = $('<a>').attr("href", "https://www.linkedin.com/in/shad-lee-724621162/").appendTo(linkedIn);
            const linkedInImage = $('<img id="linkedInIcon" class="footerIcon" />').attr("src", "images/linkedIn.png").appendTo(linkedInIconLink);
                const linkedInDescription = $('<p>')
                    .text("The icon here, at the bottom of the page or at the top on the navigation bar will direct you to my LinkedIn page. It will provide more information about me if you are interested in reaching out.")
                    .appendTo(linkedIn);


        const gitHub = $('<div class="contactMe" />').appendTo(contact);
            const gitHubLink = $('<a href="https://github.com/sl8305" />').appendTo(gitHub);
            const gitHubImage = $('<img id="gitHubIcon" class="footerIcon" />').attr("src", "images/githubIcon.svg").appendTo(gitHubLink);
            const gitHubDescription = $('<p>')
                .text("The icon here, at the bottom of the page or at the top on the navigation bar will direct you to my gitHub page. Here you can see a full list of porjects I have completed or am currently working on.")
                .appendTo(gitHub);

});
