//  ***** getElementById ***********************************
// const unicornImg = document.getElementById('unicorn')
// const mainHeading = document.getElementById('mainheading')
// console.log(unicornImg)
// console.log(mainHeading)

// // **** getElementByTagName ****
// // ** the html collection is not an array
// const allPTags = document.getElementsByTagName('p')
// console.log(allPTags)

// const allImgs = document.getElementsByTagName('img')
// console.log(allImgs)
// console.log(`Second image in document is ${allImgs[1].alt}`)
// //loop/iterate through all images and return the
// // can't use things like map in html collections
// for (let img of allImgs) {
//     console.log(img.alt)
// }

// *** getElementByClass ****
// const allsqrimg = document.getElementsByClassName('sqrimg');
// for (let img of allsqrimg) {
//     console.log(img.alt)
// }

// //****** querySelector *************/
// // ** selects the first one it finds **
// // get an anchor tag where the alt attribute is "link to Wikipedia on Unicorns"
// const getanchortag = document.querySelector('a[alt="link to Wikipedia on Unicorns"]')
// console.log(getanchortag);

// //*** querySelectorAll */
// // same idea as querySelector but return a collection of matching elements
// const getAllpTags = document.querySelectorAll('p')
// console.log(getAllpTags)
// get all anchor tags inside of paragraphs
// const allATagInP = document.querySelectorAll('p a')
// //console.log(allATagInP)

// for (let link of allATagInP) {
//     console.log(link.href);
// }

//******   Manipulation   ********/
//changes the html within the h1 span tag from Delicious to Disgusting
// document.querySelector('h1 span').innerHTML = 'Disgusting';

// // Attributes /
// const imgSunsetUnicorn = document.querySelector('#unicornsunset')
// console.log(imgSunsetUnicorn.getAttribute('alt'));
// imgSunsetUnicorn.setAttribute('alt', 'Unicorn with Sunset in background')
// console.log(imgSunsetUnicorn.alt)

// Change the first image to have a different src and alt
// const imageAttr = document.querySelector('img')
// console.log(imageAttr);
// imageAttr.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
// imageAttr.setAttribute('alt', 'chicken');

// Changing Styles *****/
//const h1 = document.querySelector('h1');
//Everything is camelcase in Javascript but in CSS it usually has dashes
//console.log(h1.style)
// only shows inline styles and not styles from a style sheet
// h1.style.color = 'red'
// h1.style.fontSize = '3em'
// h1.style.border = '2px solid pink'

// const allLinks = document.querySelectorAll('a')
// for (let link of allLinks) {
//     link.style.color = 'cyan'
//     //underline
//     link.style.textDecorationColor = 'magenta'
//     link.style.textDecorationStyle = 'wavy'
// }

// // To actually get the values for the style of an element after it has benn rendered
// //const computedH1 = window.getComputedStyle(h1).color

// console.log(window.getComputedStyle(h1).color);
// console.log(window.getComputedStyle(h1).fontSize);
// console.log(window.getComputedStyle(h1).fontFamily);
// console.log(window.getComputedStyle(h1).marginLeft);
// console.log(window.getComputedStyle(h1).margin);

const container = document.querySelector('#mainsection')
container.style.flext = '1'
container.style.textAlign = 'center'

const imgSize = document.querySelector('img')
imgSize.style.width = '150px'
imgSize.style.borderRadius = '50%'

// //const secondSection = document.querySelector('#secondsection')
allSpansInsecondSection = document.querySelectorAll('#secondsection span')
const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// console.log(allSpansInsecondSection)

// for (let i = 0; i < colorsArr.length; i++) {
//     console.log(colorsArr[i]);

// // }

allSpansInsecondSection.forEach(function (span, index) {
    console.log(span)
    console.log(index)
    console.log(colorsArr.length);

    console.log(`Mod: ${index} mod ${colorsArr.length} = ${index % colorsArr.length}`);

    span.style.color = colorsArr[index % colorsArr.length];
});


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// // Select all span elements inside the h1 element
// const allSpansInH2 = document.querySelectorAll('h2 span');

// // Iterate over the selected elements using a standard for loop
// for (let i = 0; i < allSpansInH2.length; i++) {
//     // Use the i index value to access the current span from the list
//     const currentSpan = allSpansInH2[i];

//     // Use .style.color on each span and assign it the corresponding value in the colors array
//     currentSpan.style.color = colors[i % colors.length];
// }
const contentsbox = document.querySelector('.contentsbox')
console.log(contentsbox)
console.log(contentsbox.getAttribute('class'))
console.log(contentsbox.classList)
contentsbox.classList.add('fred')
//This appends the fred after the contentsbox where now its class = "contentsbox fred"
contentsbox.classList.remove('fred')








