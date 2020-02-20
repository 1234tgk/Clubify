function login(){
    var username = document.getElementById("username").value;
    var level = check(username);
    if(level == 0)
        alert("Please enter a valid username")
    else if(level == 1)
        window.open("../club_list(Stu)/student.html","_self");
    else if(level == 2)
        window.open("../club_list(admin)/admin.html","_self");
}

function check(username){
if(username == "student")
    return 1;
else if(username == "admin")
    return 2;
else
    return 0;
}
