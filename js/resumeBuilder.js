/*var formattedName  = HTMLheaderName.replace("%data%","Nemanja Kolar");
 var formattedRole = HTMLheaderRole.replace("%data%","Puppy developer");*/

var bio = {
    "formattedName": HTMLheaderName.replace("%data%", "Nemanja Kolar"),
    "formattedRolle": HTMLheaderRole.replace("%data%", "Puppy developer"),
    "formattedMail": HTMLemail.replace("%data%", "nemanjakolar@gmail.com"),
    "formattedMobile": HTMLmobile.replace("%data%", "065/217-621"),
    "formattedPic": HTMLbioPic.replace("%data%", "images/avatar.jpg"),
    "formattedWelcomeMessage": HTMLwelcomeMsg.replace("%data%", "Welcome to my interactive CV"),
    "formattedSkills": HTMLskills.replace("%data%", "frontend, backend, OOP, CMS, Linux, VCS, MS Office, VM Ware")
}

$("#header").prepend(bio.formattedName);
$("#header").append(bio.formattedRolle);
$("#header").append(bio.formattedMail);
$("#header").append(bio.formattedMobile);
$("#header").append(bio.formattedPic);
$("#header").append(bio.formattedWelcomeMessage);
$("#header").append(bio.formattedSkills);

var work = {
    "workStart": HTMLworkStart,
    "workEmployer": HTMLworkEmployer.replace("%data%", "SP Prijedor"),
    "workTitle": HTMLworkTitle.replace("%data%", "Informaticar"),
    "workDates": HTMLworkDates.replace("%data%", "08/2016-10/2016"),
    "workLocation": HTMLworkLocation.replace("%data%", "Prijedor")
}

$("#workExperience").prepend(work.workStart);
$("#workExperience").append(work.workEmployer);
$("#workExperience").append(work.workTitle);
$("#workExperience").append(work.workDates);
$("#workExperience").append(work.workLocation);

var projects = {
    "projectStart": HTMLprojectStart

}

$("#projects").append(projects.projectStart);

var education = {
    "schoolStart": HTMLschoolStart,
    "schoolName": HTMLschoolName.replace("%data%", "Visoka skola za ekonomiju i informatiku")
}

$("#education").append(education.schoolStart);
$("#education").append(education.schoolName);





