import {getCards} from './dbcalls';

export function createHTMLElement(htmlString) 
{
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstElementChild;
}

export function getLastElementId()
{
    var data = getCards();
    var lastCardId = data.cards[data.cards.length-1].id;
    console.log(lastCardId);
    return lastCardId;
}
