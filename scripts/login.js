function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function goSignUp(){
      window.location.href="signup.html";
      
  }
  var regdUsers=JSON.parse(localStorage.getItem("loginDetails")) || [];
  document.getElementById("formlogin").addEventListener("submit",function(event){
  event.preventDefault();
  var form=document.querySelector("#formlogin");
  var email=form.email.value;
  var pass=form.pass.value;
  var flag=false;
  for(var i=0;i<regdUsers.length;i++){
      if(regdUsers[i].email==email && regdUsers[i].pass==pass){
          flag=true;
      }
  }
  if(flag){
      alert("Login Successful")
      window.location.href="index.html";
  }
});