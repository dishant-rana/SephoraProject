var regdUsers=JSON.parse(localStorage.getItem("loginDetalis")) || [];
document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    var form=document.querySelector("#form");
    var email=form.email.value;
    var pass=form.pass.value;
    var flag=false;
    for(var i=0;i<regdUsers.length;i++){
        if(regdUsers[i].email==email && regdUsers[i].pass==pass){
            flag=true;
        }
    }
    if(flag){
        window.location.href="#";
        alert("Login Successful")
    }
    else alert("Login Falied");
})