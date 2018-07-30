import {createHTMLElement} from './service';

//console.log(createElement());

// JavaScript
document.querySelector('body').appendChild(createElement('Ocean'));

// JQuery
$("body").append(createElement('Life'));

// Creating element.
function createElement(name)
{
    const element = createHTMLElement(`<h1><span>Hello ${name}<span></h1>`);
    //console.log(element);
    
    element.querySelector('span').addEventListener('click', function() {
        console.log("Hello");
    })

    return element;
};