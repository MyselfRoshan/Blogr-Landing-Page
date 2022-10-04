# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#### `Desktop` Design Preview

![](/screenshots/Blogr-Desktop-preview.png)

### `Mobile` Design Preview

![](/screenshots/Blogr-Mobile-Preview.png)

### Links

- Solution URL: (https://blogr-landing-page-chi-five.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript

### What I learned

While creating this project I learned how toggle burger element with cross icon.

```javascript
let toggle = 0;
burgerOpen.addEventListener("click", () => {
  burgerHidden.classList.toggle("burger-active");
  toggle++;
  if (toggle === 1) {
    burgerOpen.src = "/images/icon-close.svg";
    burgerHidden.classList.remove("burger-inactive");
    burgerOpen.id = "burger-close";
  } else if (toggle === 2) {
    burgerHidden.classList.add("burger-inactive");
    burgerOpen.src = "/images/icon-hamburger.svg";
    burgerOpen.id = "burger-open";
    toggle -= 2;
  }
});
```

I learned how to toggle dropdown in nav-bar when 'clicked' on window.

```javascript
window.addEventListener("click", function (e) {
  if (e.target.closest(".containers") === null) {
    // Close the opend dropdown
    hiddenNAvLinks[i].classList.remove("hidden-active");
    hiddenNAvLinks[i].classList.add("hidden");
    arrowIcon[i].classList.remove("arrow-icon-active");
    darkArrowIcon[i].classList.remove("arrow-icon-active");
  }
});
```
