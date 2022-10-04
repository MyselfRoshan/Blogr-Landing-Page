const navBar = document.querySelector('#nav-var');
const burgerOpen = document.querySelector('#burger-open');
const burgerHidden = document.querySelector('.burger-hidden');

/*containers=[#product-container,#company-container,connect-container] */
const containers = document.querySelectorAll('.containers-links');

/* arrowicons for indiviaual containers */
const arrowIcon = document.querySelectorAll('.arrow-icon');
const darkArrowIcon =document.querySelectorAll('.dark-arrow-icon')

/* hidden links of their respective containers*/
const hiddenNAvLinks = document.querySelectorAll('.hidden');
const hiddenDesktop = document.querySelector('.hidden-desktop');
const style = getComputedStyle(hiddenDesktop);


/* Nav-bar links dropdown */
let ids = [];
for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('click', (e) => {
            arrowIcon[i].classList.toggle('arrow-icon');
            arrowIcon[i].classList.toggle('arrow-icon-active');
            darkArrowIcon[i].classList.toggle('dark-arrow-icon');
            darkArrowIcon[i].classList.toggle('arrow-icon-active');
            hiddenNAvLinks[i].classList.toggle('hidden-active');
            hiddenNAvLinks[i].classList.toggle('hidden');
            console.log(arrowIcon[i]);

            if (!ids.includes(e.target.parentNode) && e.target.parentNode !== "") {
                ids.push(e.target.parentNode);
                if (ids.length === 2) {
                    console.log(e.target.parentNode);
                    console.log(ids);
                    let hidden = ids.shift();
                    console.log(hidden);
                    console.log(ids);
                    if (hidden.classList.contains('containers')) {
                        hidden.lastElementChild.classList.remove('hidden-active');
                        hidden.lastElementChild.classList.add('hidden');
                        hidden.firstElementChild.firstElementChild.classList.remove('arrow-icon-active');
                        hidden.firstElementChild.lastElementChild.classList.remove('arrow-icon-active');
                    } else if (hidden.classList.contains('containers-links')) {
                        hidden.nextElementSibling.classList.remove('hidden-active');
                        hidden.nextElementSibling.classList.add('hidden');
                        hidden.firstElementChild.classList.remove('arrow-icon-active');
                        hidden.lastElementChild.classList.remove('arrow-icon-active');
                    }
                }
            }

        }
        );

    // Close the menu if click happen outside menu
    window.addEventListener('click', function(e) {
        if (e.target.closest('.containers') === null) {
            // Close the opend dropdown
            hiddenNAvLinks[i].classList.remove('hidden-active');
            hiddenNAvLinks[i].classList.add('hidden');
            arrowIcon[i].classList.remove('arrow-icon-active');
            darkArrowIcon[i].classList.remove('arrow-icon-active');
        }
    });
};

    let toggle = 0;
    burgerOpen.addEventListener('click', () => {
        burgerHidden.classList.toggle('burger-active');
        toggle++;
        if (toggle === 1) {
            burgerOpen.src = '/images/icon-close.svg';
            burgerHidden.classList.remove('burger-inactive');
            burgerOpen.id = 'burger-close';
        } else if (toggle === 2) {
            burgerHidden.classList.add('burger-inactive');
            burgerOpen.src = '/images/icon-hamburger.svg';
            burgerOpen.id = 'burger-open';
            toggle -= 2;
        }
    });