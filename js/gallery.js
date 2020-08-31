const gallery = {
    currentImage: 0,
}

function showGalleryImage() {
    const galleryItems = document.querySelectorAll('.gallery__item');
    const galleryOverlay = document.querySelector('.gallery__overlay');
    const galleryOverlayImage = galleryOverlay.querySelector('img');

    galleryItems.forEach((galleryItem, index) => {
        galleryItem.addEventListener('click', (event) => {
            gallery.currentImage = index;
            galleryOverlayImage.src = event.currentTarget.querySelector('img').src;
            galleryOverlay.classList.add('open');
        })
    })
    addCloseButtonListener(galleryOverlay);
    nextGalleryImage(galleryItems,galleryOverlayImage);
    previousGalleryImage(galleryItems,galleryOverlayImage);
}

function addCloseButtonListener(galleryOverlay) {
    const closeButton = galleryOverlay.querySelector('span');
    closeButton.addEventListener('click',()=>{
        galleryOverlay.classList.remove('open');
    });
}

function nextGalleryImage(galleryItems,galleryOverlayImage){
    const nextButton = document.querySelector('.gallery__overlay__rightArrow');
    nextButton.addEventListener('click',()=>{
        if(gallery.currentImage===galleryItems.length-1){
            shake(-30,galleryOverlayImage);
        } else {
            galleryOverlayImage.src = galleryItems[gallery.currentImage+1].querySelector('img').src;
            gallery.currentImage++;
        }
    })
}

function previousGalleryImage(galleryItems,galleryOverlayImage){
    const previousButton = document.querySelector('.gallery__overlay__leftArrow');
    previousButton.addEventListener('click',()=>{
        if(gallery.currentImage===0){
            shake(30,galleryOverlayImage);
        } else {
            galleryOverlayImage.src = galleryItems[gallery.currentImage-1].querySelector('img').src;
            gallery.currentImage--;
        }
    })
}

function shake(direction, image){
    image.style.transition = 'transform ease-out 0.4s'
    image.style.transform = `translateX(${direction}px)`;
    setTimeout(()=>{
        image.style.transform = '';
    },400)
}



showGalleryImage();