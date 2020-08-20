(function () {
    const slider = {
        currentSlide: 1,
        slidesLength: function () {
            return document.querySelectorAll('.slider__element').length;
        },
        nextSlide: function () {
            if (this.currentSlide + 1 > this.slidesLength()) {
                this.currentSlide = 1;
            } else {
                this.currentSlide++;
            }
        },
        previousSlide: function () {
            if (this.currentSlide - 1 < 1) {
                this.currentSlide = this.slidesLength();
            } else {
                this.currentSlide--;
            }
        },
        setSlide: function (number) {
            this.currentSlide = number;
        }
    }

    function imageSlider() {
        setDefaultSlide();
        const nextSlideButton = document.querySelector('.slider__rightArrow');
        nextSlideButton.addEventListener('click', () => {
            let tempSlideNumber = slider.currentSlide;
            slider.nextSlide();
            setActive(slider.currentSlide);
            setDeactive(tempSlideNumber);
            selectPaginationButton();
        });
        const prevSlideButton = document.querySelector('.slider__leftArrow');
        prevSlideButton.addEventListener('click', () => {
            let tempSlideNumber = slider.currentSlide;
            slider.previousSlide();
            setActive(slider.currentSlide);
            setDeactive(tempSlideNumber);
            selectPaginationButton();
        });

        setInterval(()=>{
            nextSlideButton.click();
        },10000)
    }

    function setActive(slideNumber) {
        let active = document.querySelector(`.slider__element__${slideNumber}`);
        active.style.opacity = '1';
    }

    function setDeactive(tempSlideNumber) {
        let deactive = document.querySelector(`.slider__element__${tempSlideNumber}`);
        deactive.style.opacity = '0';
    }

    function createSliderPagination() {
        const paginationContainer = document.querySelector('.slider__pagination');
        for (let i = 0; i < slider.slidesLength(); i++) {
            let paginationChild = document.createElement('a');
            paginationChild.setAttribute('href', `#slider__element__${i + 1}`);
            paginationContainer.appendChild(paginationChild);
        }
        selectSlide();
        selectPaginationButton();
    }

    function selectSlide() {
        const slidesPagination = document.querySelectorAll('.slider__pagination a');
        slidesPagination.forEach((slide) => {
            slide.addEventListener('click', (event) => {
                event.preventDefault();
                let tempSlideNumber = slider.currentSlide;
                let clickedSlide = slide.href.split('__');
                let clickedSlideNumber = parseInt(clickedSlide[clickedSlide.length - 1], 10);

                if (tempSlideNumber !== clickedSlideNumber) {
                    setActive(clickedSlideNumber);
                    setDeactive(tempSlideNumber);
                    slider.setSlide(clickedSlideNumber)
                    selectPaginationButton();
                }
            })
        })
    }

    function selectPaginationButton() {
        let activeButton = document.querySelector('.slider__pagination .active');
        let clickedButton = document.querySelector(`[href='#slider__element__${slider.currentSlide}']`);

        if (activeButton !== null) {
            activeButton.classList.remove('active');
            clickedButton.classList.add('active');

        } else {
            clickedButton.classList.add('active');
        }
    }

    function setDefaultSlide(){
        setActive(slider.currentSlide);
    }

    imageSlider();
    createSliderPagination();

})();

