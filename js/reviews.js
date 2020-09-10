(function () {
    const item = {
        currentItem: 0,
        rightItem: null,
        leftItem: null,
        itemsArray: Array.from(document.querySelectorAll('.reviews__review')),
        slidesLength: function () {
            return this.itemsArray.length;
        },
        nextItem: function () {
            if (this.currentItem + 1 > this.slidesLength() - 1) {
                this.currentItem = 0;
            } else {
                this.currentItem++;
            }
        },
        previousItem: function () {
            if (this.currentItem - 1 < 0) {
                this.currentItem = this.slidesLength() - 1;
            } else {
                this.currentItem--;
            }
        },
        setRightItem: function () {
            if (this.currentItem + 1 > this.slidesLength() - 1) {
                this.rightItem = 0;
            } else {
                this.rightItem = this.currentItem + 1;
            }
        },
        setLeftItem: function () {
            if (this.currentItem - 1 < 0) {
                this.leftItem = this.slidesLength() - 1;
            } else {
                this.leftItem = this.currentItem - 1;
            }
        },
    }

    function imageSlider() {
        setActive(item.currentItem)
        const nextButton = document.querySelector('.reviews__rightArrow');
        nextButton.addEventListener('click', () => {
            let tempItem = item.currentItem;
            item.nextItem();
            setActive(item.currentItem);
            setDeactive(tempItem);
        });

        const prevButton = document.querySelector('.reviews__leftArrow');
        prevButton.addEventListener('click', () => {
            let tempItem = item.currentItem;
            item.previousItem();
            setActive(item.currentItem);
            setDeactive(tempItem);
        });

        setInterval(() => {
            nextButton.click();
        }, 10000)
    }

    function setActive(itemIndex) {
        let active = item.itemsArray[itemIndex];
        let nextActive;
        let prevActive;
        active.classList.add('active');
        setTimeout(() => {
            active.style.transform = 'translateX(0)';
        }, 10);

        item.setRightItem();
        nextActive = item.itemsArray[item.rightItem];
        nextActive.classList.add('right');
        nextActive.classList.remove('left');

        item.setLeftItem();
        prevActive = item.itemsArray[item.leftItem];
        prevActive.classList.add('left');
        prevActive.classList.remove('right');
    }

    function setDeactive(tempItem) {
        let deactive = item.itemsArray[tempItem];
        deactive.classList.remove('active');
        deactive.style.transform = '';
    }

    imageSlider();
})();

