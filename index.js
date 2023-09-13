const Item1 = document.getElementById("id1");
const Item2 = document.getElementById("id2");
const Item3 = document.getElementById("id3");
const Item4 = document.getElementById("id4");

const Item5 = document.getElementById("id5");

const Item6 = document.getElementById("id6");

const Item7 = document.getElementById("id7");



const Content1 = document.getElementById("content1");
const Content2 = document.getElementById("content2");
const Content3 = document.getElementById("content3");
const Content4 = document.getElementById("content4");

const Content5 = document.getElementById("content5");

const Content6 = document.getElementById("content6");
const Content7 = document.getElementById("content7");


Item1.addEventListener("click", () => {
    Content1.style.display = "block";
    Content2.style.display = "none";
    Content3.style.display = "none";
    Content4.style.display = "none";

    Content5.style.display = "none";
    Content6.style.display = "none";
    Content7.style.display = "none";

});

Item2.addEventListener("click", () => {
    Content1.style.display = "none";
    Content2.style.display = "block";
    Content3.style.display = "none";
    Content4.style.display = "none";

    Content5.style.display = "none";

    Content6.style.display = "none";
    Content7.style.display = "none";

});

Item3.addEventListener("click", () => {
    Content1.style.display = "none";
    Content2.style.display = "none";
    Content3.style.display = "block";
    Content4.style.display = "none";

    Content5.style.display = "none";

    Content6.style.display = "none";
    Content7.style.display = "none";

});

Item4.addEventListener("click", () => {
    Content1.style.display = "none";
    Content2.style.display = "none";
    Content3.style.display = "none";
    Content4.style.display = "block";

    Content5.style.display = "none";

    Content6.style.display = "none";
    Content7.style.display = "none";

});
Item5.addEventListener("click", () => {
    Content1.style.display = "none";
    Content2.style.display = "none";
    Content3.style.display = "none";
    Content4.style.display = "none";

    Content5.style.display = "block";

    Content6.style.display = "none";
    Content7.style.display = "none";

});
Item6.addEventListener("click", () => {
    Content1.style.display = "none";
    Content2.style.display = "none";
    Content3.style.display = "none";
    Content4.style.display = "none";

    Content5.style.display = "none";

    Content6.style.display = "block";
    Content7.style.display = "none";

});
Item7.addEventListener("click", () => {
    Content1.style.display = "none";
    Content2.style.display = "none";
    Content3.style.display = "none";
    Content4.style.display = "none";

    Content5.style.display = "none";

    Content6.style.display = "none";
    Content7.style.display = "block";

});