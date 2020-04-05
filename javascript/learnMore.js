// Dynamically rendering the Learn More section. 
// Goal is to be able to automate more of the code and reduce hardcoded sections

$(document).ready(function() {
    $("#learnMoreDiv").empty();

    const contact = $('<div>').addClass('marginAuto').addClass("container").attr("id", "bioContact").appendTo("#learnMoreDiv");

    const contactTitle = $('<h2>').text("Learn More");
    const email = $('<div>').addClass("contactMe");
    const emailAddress = ("shad8305@outlook.com");
    const emailDescription = $('<p>').text("If you have any edit suggetions or interesting resources you would like to share with me. Feel free to send me an email. I can be contacted via email: " + emailAddress + " with the subject line github comment");

    contactTitle.appendTo(contact);
    email.appendTo(contact);
    emailDescription.appendTo(email);
});


        // <!-- Bio/ Contact -->
        // <div class="row"> 
        //     <div id="bioContact" class="container marginAuto">
        //         <h2>Learn More</h2>
        //             <!-- Email -->
        //             <div clas="contactMe">
        //                 <p></p>
        //             </div>
                    
        //             <!-- LinkedIn -->
        //             <div class="contactMe">
        //                 <a href='https://www.linkedin.com/in/shad-lee-724621162/'><img src='images/linkedIn.png' id='linkedInIcon' class='footerIcon'></a>
        //                 <p>The icon here, at the bottom of the page or at the top on the navigation bar will direct you to my LinkedIn page. It will provide more information about me if you are interested in reaching out.</p>
        //             </div>

        //             <!-- github -->
        //             <div class="contactMe">
        //                 <a href='https://github.com/sl8305'><img src='images/githubIcon.svg' id='gitHubIcon' class='footerIcon'></a>
        //                 <p>The icon here, at the bottom of the page or at the top on the navigation bar will direct you to my gitHub page. Here you can see a full list of porjects I have completed or am currently working on.</p>
        //             </div>

        //     </div>
        // </div>