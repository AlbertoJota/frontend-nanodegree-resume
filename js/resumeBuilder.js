var data = "%data%";
var work = {
    "jobs": [{
            "employer": "Sadia SA",
            "title": "Production supervisor",
            "location": "Brasília, DF, BR",
            "dates": "2005",
            "description": "Supervise officials in the slaughter of chickens in " +
                "the company's fridge."
        },
        {
            "employer": "Caixa Econômica Federal",
            "title": "Banking technician",
            "location": "Brasília, DF, BR",
            "dates": "2005 - 2008",
            "description": "Day-to-day work of a bank branch. I held a management " +
                "position. Later I worked in the company's headquarters, where I held the " +
                "position of analsita junior."
        }, {
            "employer": "Autonomous",
            "title": "Veterinarian",
            "location": "Alexânia, GO, BR",
            "dates": "2010 - 2011 ",
            "description": "Animal clinic in day to day breeding of dogs."
        },
        {
            "employer": "Ministry of Finances",
            "title": "Administrative Assistant",
            "location": "Brasília, DF, BR",
            "dates": "2012 - Future",
            "description": "Software development in the school of business " +
                "administration. Currently working on the payroll at the Federal " +
                "Revenue Service."
        }
    ],
    "display": function() {
        if (work.jobs.length > 0) {
            for (var i = 0; i < work.jobs.length; i++) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
                var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
                var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
                var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
                $(".work-entry:last").append(formattedEmployerTitle);
                $(".work-entry:last").append(formattedDates);
                $(".work-entry:last").append(formattedLocation);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
};
var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2017",
        "description": "Development of a portfolio as part of the udacity " +
            " nanodegree front end web developer training",
        "images": ["images/portfolio.png"]
    }],
    "display": function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
var bio = {
    "name": "Alberto Jota",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "+55 61 994063232",
        "email": "albertojota@hotmail.com",
        "github": "AlbertoJota",
        "twitter": "BetoJota",
        "location": "Brasília, DF, BR"
    },
    "welcomeMessage": "Happy of the one who transfers what he knows and " +
        "learns what he teaches - Cora Coralina",
    "skills": ["Good apprentice", "Persevering", "Communicative", "Fun"],
    "biopic": "images/me.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        if (bio.skills.length > 0) {
            var formattedSkill;
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace(data, bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};
var education = {
    "schools": [{
            "name": "Universidade Federal de Goiás",
            "location": "Goiânia, GO, BR",
            "degree": "Bacharel",
            "majors": ["Medicine Veterinary"],
            "dates": "2004",
            "url": "https://evz.ufg.br"
        },
        {
            "name": "Centro Universitário de Brasília",
            "location": "Brasília, DF, BR",
            "degree": "Technologist",
            "majors": ["Analysis and systems development"],
            "dates": "2017",
            "url": "https://www.uniceub.br"
        }
    ],
    "onlineCourses": [{
        "title": "Nanodegree Front End Web Developer",
        "school": "Udacity",
        "dates": "2016-2017",
        "url": "https://www.udacity.com"
    }],
    "display": function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);
            var formattedSchoolURL = HTMLschoolURL.replace(data, education.schools[i].url);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolURL);
        }
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
            var formattedCourseTitle = HTMLonlineTitle.replace(data, education.onlineCourses[j].title);
            var formattedCourseSchool = HTMLonlineSchool.replace(data, education.onlineCourses[j].school);
            var formattedCourseDates = HTMLonlineDates.replace(data, education.onlineCourses[j].dates);
            var formattedCourseURL = HTMLonlineURL.replace(data, education.onlineCourses[j].url);
            $(".education-entry:last").append(formattedCourseTitle + formattedCourseSchool);
            $(".education-entry:last").append(formattedCourseDates);
            $(".education-entry:last").append(formattedCourseURL);
        }
    }
};
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});