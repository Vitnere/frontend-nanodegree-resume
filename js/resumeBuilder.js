var formattedName  = HTMLheaderName.replace("%data%","Nemanja Kolar");
var formattedRole = HTMLheaderRole.replace("%data%","Puppy developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);