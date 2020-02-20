var joinedlist = {
    "name": ["Dragon_boat", "Robotics"]
}

function pageload() {
    studentName();
    clubList();
    joinedList();
}

function studentName() {
    var nameText = document.getElementById("name");
    nameText.innerHTML = "John";
}

function clubList() {
    var sectionSpace = document.getElementById("clublist");

    for (var i = 0; i < clublist.length; i++) {
        sectionSpace.innerHTML += '<div class="popup" onclick="myFunction(' + i + ')">' +
            '<img src="' + clublist[i].url + '" style="width:300px; height:200px; clear:both;">' +
            clublist[i].name + '<span class="popuptext" id="myPopup' + i + '"></span></div>';
    }
}


function joinedList() {
    var asideSpace = document.getElementById("joined");

    for (var i = 0; i < joinedlist.name.length; i++) {
        asideSpace.innerHTML += '<div class="popup"><img src="clubs/' + joinedlist.name[i] + '.jpg" style="width:30px; height:20px;"' +
        'onclick="OnClick(' + [i] + ')">' + joinedlist.name[i] + '</div>';
    }
}

function myFunction(i) {
    var popupSpace = document.getElementById("myPopup" + i);

    popupSpace.innerHTML = '<div>' +
        '<p id="clubName">Club Name : ' + clublist[i].name + '</p>' +
        '<p id="clubLeader">Club Leader : ' + clublist[i].leader + '</p>' +
        '<p id="clubEmail">Club Email : ' + clublist[i].email + '</p>' +
        '<p id="clubPhone">Club Phone number : ' + clublist[i].phonenumber + '</p>' +
        '<p id="clubDesc">Club Description : ' + clublist[i].description + '</p>' +
        '<p id="clubMetting" style="position:fixed; bottom:260px;">Club Meeting Date : ' + clublist[i].meeting + '</p>' +
        '</div>';

    popupSpace.classList.toggle("show");
}

/*
var clublist = {
        { "name": "Astronomy_club" },
        { "name": "Ballroom_dance" },
        { "name": "Dragon_boat" },
        { "name": "kendo" },
        { "name": "Robotics" }
    ]
}

    <div id="name1"></div>
    <div id="leader1"></div>
    <div id="email1"></div>
    <div id="phone1"></div>
    <div id="description1"></div>

*/