let app_show=document.querySelector(".app1_show");
console.log(app_show);
let previos_btn=document.getElementById("previos_btn");
let Next_btn=document.getElementById("Next_btn");

let element_container=[];

element_container[0]="imges/img20.jpg";
element_container[1]="imges/img21.jpg";
element_container[2]="imges/img22.jpg";
element_container[3]="imges/img23.jpg";
element_container[4]="imges/img24.jpg";




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



let action=document.querySelector(".app1_show");
let offsetaction=action.offsetTop;
window.addEventListener("scroll",()=>{
    let actionscroll=window.scrollY;
    if(actionscroll>=offsetaction - 100)
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