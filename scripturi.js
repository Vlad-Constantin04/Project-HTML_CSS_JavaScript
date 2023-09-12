function executaMouseover1(){
document.getElementsByClassName('pozaColor')[0].src = 'ur1930.jpeg';
}

function executaMouseout1(){
document.getElementsByClassName('pozaColor')[0].src = 'https://cdn.dc5.ro/img-prod/448355-0-240.jpeg';
}

function rearrange(){

}

function verificaUser() {
    var u = document.getElementById("user").value;
    if(!localStorage.getItem(u)) {
    alert("User incorect!")
    }
    else {
    var p = document.getElementById("pass").value;
    if(CryptoJS.MD5(p) == localStorage.getItem(u))
    confirm("OK");
    else
    alert("parola incorecta");
    }
    }
    
    function inscrieUser() {
    var un = document.getElementById("user").value;
    if(localStorage.getItem(un)) {
    alert("User existent!")
    }
    else {
    var pn = document.getElementById("pass").value;
    var hash = CryptoJS.MD5(pn);
    localStorage.setItem(un, hash);
    confirm("User inscris!");
    }
    }