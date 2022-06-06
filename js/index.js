//Log out a message to show you've got JavaScript running

console.log("Script running!")

//Define a variable `myName` and log it out

let myName = "Noah"
console.log(myName)

//Define a function `getVowelCount()`

function getVowelCount(aString) {
    aString.toLowerCase()
    var lowerCaseString = (aString.toLowerCase())

    lowerCaseString.replaceAll('a', '')
    var modifiedString = (lowerCaseString.replaceAll('a', ''))

    modifiedString.replaceAll('e', '')
    var modifiedString = (modifiedString.replaceAll('e', ''))

    modifiedString.replaceAll('i', '')
    var modifiedString = (modifiedString.replaceAll('i', ''))

    modifiedString.replaceAll('o', '')
    var modifiedString = (modifiedString.replaceAll('o', ''))

    modifiedString.replaceAll('u', '')
    var modifiedString = (modifiedString.replaceAll('u', ''))

    modifiedString.replaceAll('y', '')
    var modifiedString = (modifiedString.replaceAll('y', ''))

    return lowerCaseString.length - modifiedString.length
}

//Define a variable `numVowelsInName` and log it out

let numVowelsInName = (getVowelCount(myName)) 

console.log(numVowelsInName)

//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
//Then change the text of that element

let h1Element = $("h1").text("Interactive Pet Viewer")

//Create a variable `footerElement` that refers to the `<footer>`, then
//change the HTML content of that element

let footerElement = $("footer").html("<small>All images from <a href=\"https://unsplash.com/\">unsplash.com</a></small>")

//Change the CSS `display` property of the `#cats` element
//Add the `active` class to the `#btnShowDogs` element

let cats = document.querySelector("#cats")
cats.style.display = "none"

let dogsButton = document.querySelector("#btnShowDogs")
dogsButton.classList.add("active")

//Add an event listener to the buttons to respond to click events.
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class

$(".btn-group").click(function(){
    $('on').toggle();
    cats.style.display = "block"
    let dogs = document.querySelector("#dogs")
    dogs.style.display = "none"
    let catsButton = document.querySelector("#btnShowCats")
    catsButton.classList.add("active")
    let dogsButton = document.querySelector("#btnShowDogs")
    dogsButton.classList.remove("active")
})
    //cats.style.display = "none"
    //dogs.style.display = "block"
    //catsButton.classList.remove("active")
    //dogsButton.classList.add("active")

//Change the `cursor` CSS property of the images

let images = document.querySelector("#images")
images.style.cursor = "pointer"

//Add the `data-bs-toggle` and `data-bs-target` attributes to the images

$("#images").attr("data-bs-toggle=\"modal\"","#id")
$("#images").attr("data-bs-target","#id")

//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.

$(".modal").event(show.bs.modal)

let imageClicked = $(event.relatedTarget)

let imgsrc = $(imageClicked).attr(src)

let imgatl = $(imageClicked).attr(alt)

$(".modal").attr(imgsrc)
$(".modal").attr(imgalt)

// I am extremely confused.
