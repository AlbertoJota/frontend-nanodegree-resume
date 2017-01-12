var skills = ["awesomeness", "programming", "gamming"];
//$("#main").append(skills[0]);

var bio = {
    "name" : "Alberto JOTA",
    "role" : "Front End Web Developer",
    "contacts" : {
        "contactGeneric": "+55 61 38794449",
        "mobile": "+55 61 994063232",
        "email": "albertojota@hotmail.com",
        "twitter" : "@BetoJota",
        "gitHub" : "AlbertoJota",
        "location" : "Brasília - DF - Brazil"
},
    "bioPic" : "images/fry.jpg",
    "welcomeMsg" : "Welcome to the web development world!",
    "skills" : skills
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contacts.contactGeneric);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
$("#topContacts").prepend(formattedBioPic);

var work = {};
work.position = "Administrative Assistant";
work.employer = "Ministry of Finance";
work.years = 3;

var education = {};
    education["name"] = "Centro Educacional La Salle";
    education["years"] = "1997-1999";
    education["city"] =  "Brasília, DF, BR";


var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.position);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkYears = HTMLworkDates.replace("%data%", work.years);


$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkPosition);
$("#workExperience").prepend(HTMLworkStart);