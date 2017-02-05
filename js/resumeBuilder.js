var work = {
    "jobs": [
    {
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
    },{
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
    ]
};

var projects = {
    "projects": [
    {
        "title": "Portfolio",
        "dates": "2017",
        "description": "Development of a portfolio as part of the udacity nanodegree front end web developer training",
        "images": ["images/fry.jpg"]
    }
    ]
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
    "skills": ["Good apprentice", "Persevering", "Communicative", "Fun"]
};

var education = {
    "schools": [
        {
            "name": "Universidade Federal de Goiás",
            "location": "Goiânia, GO, BR",
            "degree": "Bacharel",
            "majors": ["Medicine Veterinary"],
            "dates": 2004,
            "url": "https://evz.ufg.br/"
        },
        {
            "name": "Centro Universitário de Brasília",
            "location": "Brasília, DF, BR",
            "degree": "Technologist",
            "majors": ["Analysis and systems development"],
            "dates": 2017,
            "url": "https://www.uniceub.br/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree Front End Web Developer",
            "school": "Udacity",
            "dates": 2017,
            "url": "https://www.udacity.com"
        }

    ]
}

$("#mapDiv").append(googleMap);