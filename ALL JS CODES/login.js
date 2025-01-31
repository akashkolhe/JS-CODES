function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=='admin' && password=='123'){
        let url="https://cdn.dribbble.com/users/13543/screenshots/1523277/media/24eab2dae4a4799471febe7518e1fae4.gif"
        window.location.assign(url);
        alert("Login Succesfull");
    }
    else{
        let url="http://www.quickmeme.com/img/4b/4bb2c6353e8745406789dc00c23a7c5693d0a057c76dddb60a0edf5477ead632.jpg"
        window.location.assign(url);
        alert("Login Fail");
        
        
    }
}