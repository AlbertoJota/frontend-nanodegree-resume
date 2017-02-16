var work = {
    "jobs": [{
            "employer": "Sadia SA",
            "title": "Production supervisor",
            "location": "Brasília, DF, BR",
            "dates": "2005",
            "description": "Supervise officials in the slaughter of chickens in the company's fridge."
        },
        {
            "employer": "Caixa Econômica Federal",
            "title": "Banking technician",
            "location": "Brasília, DF, BR",
            "dates": "2005 - 2008",
            "description": "Day-to-day work of a bank branch. I held a management position. Later I worked in the company's headquarters, where I held the position of analsita junior."
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
            "description": "Software development in the school of business administration. Currently working on the payroll at the Federal Revenue Service."
        }
    ],
    "display": function() {
        if (work.jobs.length > 0) {
            var formattedWork;
            var i = 0;
            for (job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
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
        "description": "Development of a portfolio as part of the udacity nanodegree front end web developer training",
        "images": ["images/portfolio.png"]
    }],
    "display": function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
var bio = {
    "name": "Alberto Jota",
    "role": "Front End Web Developer",
    "welcomeMsg": "Happy of the one who transfers what he knows and learns what he teaches - Cora Coralina",
    "contacts": {
        "mobile": "+55 61 994063232",
        "email": "albertojota@hotmail.com",
        "github": "AlbertoJota",
        "twitter": "BetoJota",
        "location": "Brasília, DF, BR"
    },
    "skills": ["Good apprentice", "Persevering", "Communicative", "Fun"],
    "pic": ["images/me.jpg"],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
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
        var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
        $("#header").append(formattedPic);
        $("#header").append(formattedWelcomeMsg);
        if (bio.skills.length > 0) {
            var formattedSkill;
            $("#header").append(HTMLskillsStart);
            for (var i = 0; bio.skills[i]; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
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
            "dates": 2004
        },
        {
            "name": "Centro Universitário de Brasília",
            "location": "Brasília, DF, BR",
            "degree": "Technologist",
            "majors": ["Analysis and systems development"],
            "dates": 2017
        }
    ],
    "onlineCourses": [{
            "title": "Nanodegree Front End Web Developer",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://www.udacity.com"
        }
    ],
    "display": function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
        $("#education").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
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

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
// $("#main").append(internationalizeButton);
if (document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('topContacts').style.display = 'none';
}
if (document.getElementsByTagName('h1').length === 0) {
    document.getElementById('header').style.display = 'none';
}
if (document.getElementsByClassName('work-entry').length === 0) {
    document.getElementById('workExperience').style.display = 'none';
}
if (document.getElementsByClassName('project-entry').length === 0) {
    document.getElementById('projects').style.display = 'none';
}
if (document.getElementsByClassName('education-entry').length === 0) {
    document.getElementById('education').style.display = 'none';
}
if (document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('lets-connect').style.display = 'none';
}
if (document.getElementById('map') === null) {
    document.getElementById('mapDiv').style.display = 'none';
}