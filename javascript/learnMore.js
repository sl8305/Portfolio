// Dynamically rendering the Learn More section. 
// from userInfo in consts folder
var userInfo = getUserInfo();

$(document).ready(function() {
    $("#learnMoreDiv").empty();

    const contact = $('<div id="bioContact" class="marginAuto container" />').appendTo("#learnMoreDiv");
        $('<h2>').text("Learn More").appendTo(contact);
        const email = $('<div class="contactMe" />').appendTo(contact);
            $('<p>'+ userInfo.emailDescription +'</p>').appendTo(email);


        const linkedIn = $('<div class="contactMe" />').appendTo(contact);
            const linkedInIconLink = $('<a>').attr("href", userInfo.linkedInLink).appendTo(linkedIn);
            $('<img id="linkedInIcon" class="footerIcon" src="images/linkedIn.png" />').appendTo(linkedInIconLink);
            $('<p>' + userInfo.linkedInDescription + '</p>').appendTo(linkedIn);


        const gitHub = $('<div class="contactMe" />').appendTo(contact);
            const gitHubLink = $('<a>').attr("href", userInfo.gitHubLink).appendTo(gitHub);
            $('<img id="gitHubIcon" class="footerIcon" src="images/githubIcon.svg" />').appendTo(gitHubLink);
            $('<p>' + userInfo.gitHubDescription + '</p>').appendTo(gitHub);

});
