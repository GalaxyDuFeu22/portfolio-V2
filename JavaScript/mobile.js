const menu = document.getElementById("menu-phone");
const openMenu = document.getElementById("nav");
const layer = document.getElementById("black-layer");

const blockSchool = document.querySelectorAll('.img-school');
const school1 = document.getElementById('school-phone-1');
const school2 = document.getElementById('school-phone-2');
const school3 = document.getElementById('school-phone-3');

menu.addEventListener("click", () => {
    openMenu.style.top="50%";
    layer.style.opacity="0.8";
    layer.style.zIndex="5";
})

layer.addEventListener("click", () => {
    openMenu.style.top="200%";
    layer.style.opacity="0";
    layer.style.zIndex="-3";

    school1.style.opacity="0";
    school1.style.zIndex="-3";
    school2.style.opacity="0";
    school2.style.zIndex="-3";
    school3.style.opacity="0";
    school3.style.zIndex="-3";
})

openMenu.addEventListener("click", () => {
    openMenu.style.top="200%";
    layer.style.opacity="0";
    layer.style.zIndex="-3";
})

blockSchool.forEach((block, index) => {
    block.addEventListener("click", () => {
        const school = block.dataset.school;

        if (school === "lycee") {
                layer.style.opacity="0.8";
                layer.style.zIndex="5";
                school1.style.opacity="1";
                school1.style.zIndex="6";
        } else if (school === "biologie") {
                layer.style.opacity="0.8";
                layer.style.zIndex="5";
                school2.style.opacity="1";
                school2.style.zIndex="6";
        } else if (school === "mmi") {
                layer.style.opacity="0.8";
                layer.style.zIndex="5";
                school3.style.opacity="1";
                school3.style.zIndex="6";
        }
    });
});