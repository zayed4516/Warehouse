
let about_img=document.querySelector(".about_img img");
let about_container=document.querySelectorAll(".about_container img");
let bg_img=document.getElementById("service");
let previos_btn=document.getElementById("previos_btn");
let Next_btn=document.getElementById("Next_btn");

let element_container=[];

element_container[0]="imges/side-view-woman-looking-clothes_23-2149536978.jpg ";
element_container[1]="imges/young-shoemaker-is-searching-special-shoe-form-his-new-project_613910-12922.jpg";
element_container[2]="imges/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg";
element_container[3]="imges/many-shoes-shelves-are-shoe-store_88135-23582.jpg";
element_container[4]="imges/repairing-footwear_1098-14265.jpg";
let index=0;
function next_slider(){
    index++
    if(index > element_container.length -1)
    {
        index=0;
    }
    bg_img.style.backgroundImage=`url(${element_container[index]})`;
}
function previous_slider(){
    index--
    if(index < 0)
    {
     index=element_container.length -1
    }
    bg_img.style.backgroundImage=`url(${element_container[index]})`;
}
Next_btn.addEventListener('click',next_slider);
previos_btn.addEventListener('click',previous_slider);

// let main_edit=document.querySelector(".main_section");
// window.addEventListener("scroll",()=>{
//     if(window.scrollY>=0)
//     {
//         AOS.init();
//     }
// })





let nav=document.querySelector(".header");
let edit=document.querySelector(".main_section p span");


let headeroffset=edit.offsetTop;
window.addEventListener("scroll",()=>{
    let windowScroll = window.scrollY;
    if(windowScroll>=headeroffset-50 )
    {
       edit.style.opacity=0;
    }
    else{
        edit.style.opacity=.6;
    }
})

let shopping=document.querySelector("#shoping");
let main_header=shopping.offsetTop;
window.addEventListener("scroll",()=>{
    let main_scroll=window.scrollY;
    if(main_scroll>=main_header-300 )
    {
     shopping.style.background="orange";
     
     AOS.init();
    }
    else{
        shopping.style.background="none";
        AOS.init();
    }
});

about_container.forEach(item => {
    item.addEventListener("click",function(){
        let img_src=item.getAttribute("src");
        about_img.setAttribute("src",img_src);
        
    })
});

let about=document.getElementById("about");
window.addEventListener("scroll",()=>{
    if(window.scrollY>=about.offsetTop-300)
    {
        AOS.init();
    }
    else{
        AOS.init();
    }
    
})

let refer=document.querySelector(".refer");
window.addEventListener("scroll",()=>{
    if(window.scrollY>=refer.offsetTop)
    {
        AOS.init();
    }
    else{
        AOS.init();
    }
   
})


let service=document.getElementById("service");
window.addEventListener("scroll",()=>{
    if(window.scrollY>=service.offsetTop)
    {
        AOS.init();
    }
    else{
        AOS.init();
    }
    
})


let kinds=document.querySelector(".kinds");
window.addEventListener("scroll",()=>{
    if(window.scrollY>=kinds.offsetTop)
    {
        AOS.init();
    }
     else{
        AOS.init();
     }
})
window.addEventListener("scroll",()=>{
    if(window.scrollY>=refer.offsetTop)
    {
        AOS.init();
    }
    else{
        AOS.init();
    }
})

let list_bar=document.querySelector(".header .menu_bar");
let list_menu=document.querySelector(".nav_links");

list_bar.addEventListener('click',()=>{
   list_menu.classList.toggle("toggle_menu_bar");
})