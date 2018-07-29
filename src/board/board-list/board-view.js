import {createHTMLElement} from '../js/common-service';

export const boardViewHolderId = 'boards';

export function createBoardView(id, title)
{
    const element = createHTMLElement(
    `<div class="my-card d-flex justify-content-between" id="${id}"> 
        <div>
            <input type="checkbox"/>
            <span>${title}</span>
        </div>
        <button class="btn btn-danger">Delete</button>
    </div>`);

    return element;
}

export function appendBoardView(htmlElement)
{
    document.getElementById(boardViewHolderId).appendChild(htmlElement);
}