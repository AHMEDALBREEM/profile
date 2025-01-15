function toggleContactInfo() {
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo.style.display === 'none') {
      contactInfo.style.display = 'block';
    } else {
      contactInfo.style.display = 'none';
    }
  }

let timeoutId; // لتعريف المؤقت
let currentIndex = 0; // المؤشر الحالي للصورة
const maxIndex = 25; // الحد الأقصى للمؤشر

function showImage(index) {
  const images = document.querySelectorAll('.certificate-img');

  // التحقق إذا كان الحد الأقصى قد تم تجاوزه
  if (index >= maxIndex) {
    closeFullscreen(); // إنهاء العرض
    return;
  }

  // إذا كان المؤشر خارج النطاق، يتم ضبطه لإعادة التدوير
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // إزالة حالة ملء الشاشة عن جميع الصور
  images.forEach(img => img.classList.remove('fullscreen'));
  clearTimeout(timeoutId);

  // إضافة حالة ملء الشاشة إلى الصورة الحالية
  const currentImage = images[currentIndex];
  currentImage.classList.add('fullscreen');

  // إعادة الصورة إلى وضعها الطبيعي بعد 5 ثوانٍ
  timeoutId = setTimeout(() => {
    closeFullscreen();
  }, 5000);
}

function closeFullscreen() {
  const images = document.querySelectorAll('.certificate-img');
  images.forEach(img => img.classList.remove('fullscreen')); // إزالة حالة ملء الشاشة
  clearTimeout(timeoutId); // إلغاء المؤقت
}

// الاستماع لأحداث لوحة المفاتيح
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    showImage(currentIndex + 1); // الانتقال إلى الصورة التالية
  } else if (event.key === 'ArrowLeft') {
    showImage(currentIndex - 1); // العودة إلى الصورة السابقة
  } else if (event.key === 'Escape') {
    closeFullscreen(); // إغلاق الصورة عند الضغط على ESC
  }
});

// الاستماع للنقر على الصور
document.querySelectorAll('.certificate-img').forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index; // تحديث المؤشر إلى الصورة التي تم النقر عليها
    showImage(currentIndex);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.id = "scrollToTopBtn";
  scrollToTopBtn.innerHTML = "↑";
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
let worknum = 0;
window.addEventListener('scroll', () => {
  worknum++;
  if (worknum === 3) {
    closeFullscreen();
    worknum = 0; // Reset the counter after closing fullscreen
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
