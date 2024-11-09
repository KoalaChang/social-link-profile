# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a social links profile built with HTML, CSS, and React. The website can be flexible showed as desktop, tablet and mobile version.

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/截圖%202024-11-09%20下午4.21.07.png)


<img src="./public/截圖 2024-11-09 下午4.21.49.png" width="500" height="auto" />


![](./public/截圖%202024-11-09%20下午4.26.02.png)

### Links

- Live Site URL: [https://social-link-profile-black.vercel.app/](https://social-link-profile-black.vercel.app/)

## My process

### Built with

- React
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive web design

### What I learned

#### React

This is my first time building a React project from draft, it's a little painful to make React app run locally, but I really appreciate myself for struggling to figure everything out, because now I have much more understand about how a React project runs, and how should the folder structure be.

In this project, I use the `map()` function to go through a list of my social links:

```
<div className="button-div">
        {links.map((button, index) => (
          <Button
            key={index}
            id={button.id}
            name={button.platform}
            link={button.link}
          />
        ))}
      </div>
```

and for the buttons, I use a `Button` component to return different social link buttons back to the App.jsx file.

```
function Button(props) {
  return (
    <a className="button" href={props.link}>
      {props.name}
    </a>
  );
}
```

#### CSS

This time I try to use the concept of RWD to make a user friendly website, and though I still have some hardcoded parts, the website is more responsive than before.

### Continued development

Social links profile is a really useful project, I think as my skills improve I will come back to upgrade it.


## Author

- Frontend Mentor - [@KoalaChang](https://www.frontendmentor.io/profile/KoalaChang)



## Acknowledgments

I would like to appreciate **Angela Yu** for her courses on Udemy. It really helps me from a totally beginner and now I can really build something myself.
