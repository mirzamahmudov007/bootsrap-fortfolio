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