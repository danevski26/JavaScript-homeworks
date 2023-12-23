let firsDiv = document.getElementById ('first');
let divChildren = firsDiv.children;
let firstHeader = firsDiv.firstElementChild;
let firstParagraph = firsDiv.lastElementChild;
firstHeader.innerHTML = "HELLO WORLD";
firstParagraph.innerHTML = 'Hello guys I changed this text with Javascript.'

let secondDiv = document.querySelector('.anotherDiv');
let secondParagraph = secondDiv.firstElementChild;
secondParagraph.innerHTML = 'I changed this one to.';

let thirdDiv = secondDiv.nextElementSibling;
let secondHeader = thirdDiv.firstElementChild;
let thirdHeader = thirdDiv.lastElementChild;
secondHeader.innerHTML = 'Hi!';
thirdHeader.innerHTML = "What's up?";


