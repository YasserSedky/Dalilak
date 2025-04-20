"use strict"; // فرض وضع "strict mode" لتجنب الأخطاء الشائعة في JavaScript

//navbar toggle (فتح/إغلاق القائمة الجانبية)

// تحديد العناصر من الصفحة باستخدام data attributes
const overlay = document.querySelector("[data-overlay]"); // عنصر التعتيم الخلفي
const navOpenBtn = document.querySelector("[data-nav-open-btn]"); // زر فتح القائمة
const navbar = document.querySelector("[data-navbar]"); // عنصر القائمة الجانبية
const navCloseBtn = document.querySelector("[data-nav-close-btn]"); // زر إغلاق القائمة
const navLinks = document.querySelectorAll("[data-nav-link]"); // جميع روابط القائمة

// إنشاء مصفوفة تحتوي على العناصر التي عند النقر عليها يتم تبديل حالة القائمة
const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// دالة لإضافة حدث النقر لكل عنصر في المصفوفة
const navToggleEvent = function (elem) {
    for (let i = 0; i < elem.length; i++) {
        // التكرار على جميع العناصر
        elem[i].addEventListener("click", function () {
            // إضافة حدث النقر
            navbar.classList.toggle("active"); // تبديل كلاس "active" للقائمة
            overlay.classList.toggle("active"); // تبديل كلاس "active" للـ overlay
        });
    }
};

// استدعاء الدالة لتمكين التفاعل مع القائمة الجانبية
navToggleEvent(navElemArr);
navToggleEvent(navLinks); // إغلاق القائمة عند النقر على أي رابط داخلها

//header sticky & go to top (إضافة تأثير التثبيت للهيدر والانتقال للأعلى)

const header = document.querySelector("[data-header]"); // عنصر الهيدر
const goTopBtn = document.querySelector("[data-go-top]"); // زر الانتقال للأعلى

// إضافة حدث التمرير (scroll) على النافذة
window.addEventListener("scroll", function () {
    if (window.scrollY >= 200) {
        // إذا كان التمرير أكثر من 200 بكسل
        header.classList.add("active"); // إضافة كلاس "active" للهيدر لجعله ثابتًا
        goTopBtn.classList.add("active"); // إظهار زر الانتقال للأعلى
    } else {
        header.classList.remove("active"); // إزالة كلاس "active" من الهيدر
        goTopBtn.classList.remove("active"); // إخفاء زر الانتقال للأعلى
    }
});

// زر تبديل عرض العناصر المخفية (Show More / Show Less)

document.getElementById("toggle-btn").addEventListener("click", function () {
    let hiddenCards = document.querySelectorAll(".hidden-card"); // تحديد جميع العناصر المخفية
    let isHidden =
        hiddenCards[0].style.display === "none" ||
        hiddenCards[0].style.display === ""; // التحقق مما إذا كانت مخفية

    hiddenCards.forEach((card) => {
        // التكرار على جميع العناصر المخفية
        card.style.display = isHidden ? "block" : "none"; // تغيير العرض بناءً على الحالة الحالية
    });

    this.textContent = isHidden ? "Show Less" : "Show More"; // تغيير نص الزر بناءً على الحالة
});

// زر تبديل عرض قائمة الباقات (View All Packages / Hide Packages)

document.getElementById("toggleButton").addEventListener("click", function () {
    let hiddenCards = document.querySelectorAll(".package-list .hidden"); // تحديد جميع الباقات المخفية
    hiddenCards.forEach((card) => {
        card.classList.toggle("show"); // تبديل كلاس "show" لكل بطاقة
    });

    // تغيير نص الزر بناءً على حالة العرض
    if (this.textContent === "View All Packages") {
        this.textContent = "Hide Packages";
    } else {
        this.textContent = "View All Packages";
    }
});

// تهيئة Swiper.js لعرض الشرائح

const swiper = new Swiper(".swiper", {
    slidesPerView: 3, // عدد الشرائح المرئية في وقت واحد
    spaceBetween: 20, // المسافة بين الشرائح
    loop: true, // تفعيل التكرار اللانهائي للشرائح
});

// قائمة روابط الدول
const countries = [
    { name: "egypt", url: "country/EGYPT/egypt.html" },
    { name: "italy", url: "country/ITALY/italy.html" },
    { name: "america", url: "country/AMERICA/america.html" },
    { name: "tunisia", url: "country/TUNISIA/tunisia.html" },
    { name: "philippines", url: "country/PHILIPPINES/philippines.html" },
    { name: "spain", url: "country/SPAIN/spain.html" },
    { name: "uae", url: "country/EMIRATES/emirates.html" },
    { name: "saudi arabia", url: "country/KSA/ksa.html" },
    { name: "turkey", url: "country/TURKIYE/turkiye.html" },
];

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

let inputVisible = false;

searchBtn.addEventListener("click", function () {
    if (!inputVisible) {
        // أول ضغط: أظهر الحقل
        searchInput.style.display = "inline-block";
        searchInput.focus();
        inputVisible = true;
    } else {
        const query = searchInput.value.trim().toLowerCase();
        const result = countries.find(
            (country) => country.name.toLowerCase() === query
        );

        if (result) {
            window.location.href = result.url;
        } else {
            alert("Country not found. Please check your spelling.");
        }
    }
});

// تفعيل البحث بالضغط على Enter
searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});










