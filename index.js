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
const allsqrimg = document.getElementsByClassName('sqrimg');
for (let img of allsqrimg) {
    console.log(img.alt)
}

//****** querySelector *************/

