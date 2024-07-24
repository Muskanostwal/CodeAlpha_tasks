// Getting all the required elements through their IDs 
let full_img_box=document.getElementById("full_img_box");
let full_img=document.getElementById("full_img");
let imgs=document.querySelectorAll(".img_gallery img");
let top_heading=document.getElementById("top-heading");

//Setting the function for opening the full image box after clicking on it
function open_full_img(pic){
    full_img_box.style.display="flex";
    full_img.src=pic;
    top_heading.style.opacity=0;
}

//setting the function of close full image after clicking on the 'X' close
function close_full_img(){
    full_img_box.style.display="none";
    top_heading.style.opacity=1;
}

//Applying eventlistener on each img 
imgs.forEach(img=>{
    img.addEventListener("click",()=>{
        open_full_img(img.src);
    });
});

//adding event listener on span 'X' close
document.getElementById("close_full_img").addEventListener("click",close_full_img);