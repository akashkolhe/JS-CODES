
function time() {
const date = new Date();
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();
  h=checkHour(h);
  m=checkTime(m);
  s=checkTime(s);
  let ampm=checkAmPm();
  document.getElementById("time").innerHTML =h+":"+m+":"+s+" "+ampm;
  setTimeout(time,1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}
function checkHour(i) {
  if (i > 12) {
      i = i-12;
  }
  if (i<10) {
    i="0"+i
  }
  return i;
}
function checkAmPm() {
  let date3=new Date();
  h=date3.getHours();
  if (h < 12) {
      return "AM"
  } 
  else{
    return "PM"
  }
}
function getTime() {
  const date2=new Date();
  let h=date2.getHours();
  const userName=document.getElementById("input1").value;
  const password=document.getElementById("input2").value;
  if (userName.length>0 && password.length>0) {
      if (h>12 && h<19) {
           alert("Good Afternoon Login Successfully");
      } else if(h>18 && h<24){
           alert("Good Evening Login Successfully");
      } else {
           alert("Good Morning Login Successfully");
      }
  }
  else{
   alert("Please Enter Details Properly");
  }
}
  
