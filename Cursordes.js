const cursorOutline=document.querySelector("[data-cursor-outline]");
const cursorDot=document.querySelector("[data-cursor-dot");

window.addEventListener("mousemove", function(e){
    const posX=e.clientX;
    const posY=e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
}, {duration: 700, fill: "forwards"})
});

// Cursor ended

// for the top scroll auto btn 

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=> {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active")
    }
})