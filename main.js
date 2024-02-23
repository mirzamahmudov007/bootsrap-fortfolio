// Matn harflarini ekranga chiqarish uchun kerakli HTML elementini tanlang
const targetElement = document.getElementById("hey");

// Matn
const text = "Assalomu Aleykum Welcome My Portfolio ";
let index = 0;

// Matn harflarini san'at bilan cheksiz ravishda ekranga chiqarish uchun funksiya
function animateText() {
    // Har bir harfni olish
    const char = text.charAt(index);

    // Matn harfini ekranga qo'shish
    targetElement.innerHTML += char;

    // Har bir harfni keyingisi uchun indeksni oshirish
    index++;

    // Agar matn tugagunicha barcha harflar chiqqan bo'lsa, indeksni nolga qaytarib, qayta boshlash
    if (index === text.length) {
        index = 0;
        targetElement.innerHTML = ""; // Eski matnni o'chirib tashlash
    }
}

// 1 saniyada bir `animateText` funksiyasini chaqirish
setInterval(animateText, 100);



let menu = document.querySelector(".menu");
let close = document.getElementById("close");
let aside = document.getElementById("aside");
console.log(menu);

close.addEventListener("click", () => {
    aside.style.display = "none";
})

menu.addEventListener("click", () => {
    aside.style.display = "block";
})

let aaa = document.querySelector(".aaa");

aaa.addEventListener("click", () => {
    aside.style.display = "none";
    console.log("a");

})

let aaa1 = document.querySelector(".aaa1");

aaa1.addEventListener("click", () => {
    aside.style.display = "none";
    console.log("a");

})

let aaa2 = document.querySelector(".aaa2");

aaa2.addEventListener("click", () => {
    aside.style.display = "none";
    console.log("a");

})

let aaa3 = document.querySelector(".aaa3");

aaa3.addEventListener("click", () => {
    aside.style.display = "none";
    console.log("a");

})

let aaa4 = document.querySelector(".aaa4");

aaa4.addEventListener("click", () => {
    aside.style.display = "none";
    console.log("a");

})