const btn=document.getElementById("btn");
const email=document.getElementById("email");
const password=document.getElementById("password");
const phonenumber=document.getElementById("phonenumber");
const address=document.getElementById("address");
const Date=document.getElementById("Date");
const pices=document.getElementById("pices");
const age=document.getElementById("age");
const size=document.getElementById("size");
const code=document.getElementById("code");
const color=document.getElementById("color");

function text_value(){
   let userdata={
     email:email.value,
     password:password.value,
     phonenumber:phonenumber.value,
     address:address.value,
     Date:Date.value,
     pices:pices.value,
     age:age.value,
     size:size.value,
     code:code.value,
     color:color.value,
   };
   localStorage.setItem("user_data",JSON.stringify(userdata));
}

function login_text(e){
 e.preventDefault();
 text_value();
 result();
 
}

btn.addEventListener("click",login_text)
   
function result(){
if(localStorage.getItem("user_data")!==null){
 window.location.assign("about.html");
}
else{
    window.location.assign("index.html");
}
}
