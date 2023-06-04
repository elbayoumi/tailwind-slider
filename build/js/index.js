// Initialization for ES Users
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

let sidebar_btn = document.getElementById('sidebar_btn');
let sidebar_ico = document.getElementById('sidebar_ico');
let sidebar_ico_with_content = document.getElementById('sidebar_ico_with_content');
let burger_menu = document.getElementById('burger_menu');
let close_menu = document.getElementById('close_menu');
let click_right = document.querySelector('.click_right');
let click_left = document.querySelector('.click_left');

// sidebar_ico.style.display = 'none';
// close_menu.style.display = 'none';

// sidebar_btn.addEventListener('click', function () {
//     let classListSide = [...sidebar_ico.classList];
//     // console.log(classListSide.includes('hidden'))
//     if (classListSide.includes('hidden')) {
//         sidebar_ico.classList.remove("hidden");
//         sidebar_ico_with_content.classList.add("hidden");
//         burger_menu.classList.add("hidden");
//         close_menu.classList.remove("hidden");
//     } else {
//         sidebar_ico_with_content.classList.remove("hidden");
//         burger_menu.classList.remove("hidden");
//         close_menu.classList.add("hidden");
//         sidebar_ico.classList.add("hidden");
//     }


// });


///slider


const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});
var claseNames = [];
panels.forEach((panel) => {
    claseNames.push(panel.className);
})
let currentClasse = claseNames.indexOf('panel active');

// var currentClasse = 0
var count = 0

click_right.addEventListener('click', function () {
    if (count < panels.length - 1) {
        count = ++currentClasse;
    }else{
        count = 0;
        currentClasse = 0;
    }
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
    panels[count].classList.add('active');

    // console.log(count)
    // console.log(panels.length-1 )


})
// setInterval(function () {
//     if (count < panels.length - 1) {
//         count = ++currentClasse;
//     }else{
//         count = 0;
//         currentClasse = 0;
//     }

// },1500)
click_left.addEventListener('click', function () {
    if (count > 0) {
        count = (--currentClasse);
    }else{
        count = panels.length-1;
        currentClasse = panels.length-1;
    }
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
    panels[count].classList.add('active');
    // console.log(count)
    // console.log(panels.length-1 )


})

// console.log(claseNames)
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
