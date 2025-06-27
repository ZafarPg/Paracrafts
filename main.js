
// Assuming you have a menu button element with id 'menuButton'
const navbar = document.getElementById('menuclick');

// Assuming you have a menu element with id 'menu'
const mobnav = document.getElementById('mobnav');

// Toggle function for displaying and hiding the menu
function menuclick() {
    if (mobnav.style.display === 'flex') {
        mobnav.style.display = 'none';
    } 
    
    else {
        mobnav.style.display = 'flex';
    }
}
// Adding click event listener to the menu button
mobnav.addEventListener('click',show);
// end this 


// // start next

// for prroductlist open
const prodnav = document.getElementById('prodlist');
// const prodmenu = document.getElementById('prodmenu');

function prodlist()
{
    const prodmenu = document.querySelector('.prodmenu');
    prodmenu.style.display ='flex'
};
