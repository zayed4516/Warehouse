let app_show=document.querySelector(".app6_show");
let previos_btn=document.getElementById("previos_btn");
let Next_btn=document.getElementById("Next_btn");

let element_container=[];

element_container[0]="imges/sports2.jpg";
element_container[1]="imges/sports3.jpg";
element_container[2]="imges/sports4.jpg";
element_container[3]="imges/sports5.jpg";
element_container[4]="imges/sports6.jpg";




let index=0;
function next_slider(){
    index++
    if(index > element_container.length -1)
    {
        index=0;
    }
    app_show.style.backgroundImage=`url(${element_container[index]})`
}
function previous_slider(){
    index--
    if(index < 0)
    {
     index=element_container.length -1
    }
    app_show.style.backgroundImage=`url(${element_container[index]})`;
}
Next_btn.addEventListener('click',next_slider);
previos_btn.addEventListener('click',previous_slider);




let action=document.querySelector(".app6_show");
console.log(action);
let offsetaction=action.offsetTop;
window.addEventListener("scroll",()=>{
    let containscroll=window.scrollY;
    if(containscroll>=offsetaction - 100)
    {
         action.style.display="block";
         action.style.display="flex";
    }
});


let contain=document.querySelector(".app_img");
let offsetcontain=contain.offsetTop;
window.addEventListener("scroll",()=>{
    let containscroll=window.scrollY;
    if(containscroll>=offsetcontain -10)
    {
         contain.style.background="black";
         AOS.init();
        
    }
    else{
        contain.style.background="white";
    }
});