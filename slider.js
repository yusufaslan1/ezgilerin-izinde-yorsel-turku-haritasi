    var slideIndex = 1;

function showImage(n) {
    'use strict';
    
    // Slayt ve nokta elemanlarını al
    var slides = document.getElementsByClassName('slides'),
        dots = document.getElementsByClassName('dots'),
        i;

    // Daha büyük bir değer gelirse, slaytın uzunluğunu aşmamak için kontrol et
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Negatif bir değer gelirse, en son slayta gitmek için kontrol et
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Tüm slaytları gizle
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Belirtilen slaytı göster
    slides[slideIndex - 1].style.display = 'block';

    // Noktalardaki "active" sınıfını kaldır
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    // Seçilen slaytın noktasına "active" sınıfını ekle
    dots[slideIndex - 1].className += ' active';
}

// İlk slaytı göster
showImage(slideIndex);

function plusIndex(n) {
    'use strict';
    
    // İleri veya geri butonuna basıldığında belirli bir miktar kadar slaytı değiştir
    showImage(slideIndex += n);
}

function currentSlide(n) {
    'use strict';
    
    // Slayt noktalarına tıklanarak belirli bir slayta git
    showImage(slideIndex = n);
}
