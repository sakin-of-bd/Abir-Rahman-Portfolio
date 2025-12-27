const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg'
];

let currentIndex = 0;
const mainImage = document.getElementById('mainImage');

// Automatic slideshow
function slideShow() {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    mainImage.src = images[currentIndex];
}

setInterval(slideShow, 3000);

// Thumbnail click
function changeImage(thumbnail) {
    mainImage.src = thumbnail.src;

    // Extract filename from thumbnail src
    const filename = thumbnail.src.split('/').pop();
    
    // Update currentIndex based on clicked image
    currentIndex = images.findIndex(img => img.endsWith(filename));
}
