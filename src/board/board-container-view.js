import {createHTMLElement} from '../js/common-service';

export const boardContainerHolderId = 'container';

export function createBoardContainerView()
{
    const element = createHTMLElement(
    `<div id="board-container" class="size">
        <div class="mt-2 d-flex flex-column mx-auto">
            <input id="input" type="input" placeholder="Type title" class="py-2" />
            <button id="button" class="btn btn-primary my-2">Submit</button>
        </div>
        <br>
        <hr>
        <div id="boards" class="mt-2 d-flex flex-column justify-content-center mx-auto">
            
        </div>
    </div>`);

    return element;
}

export function appendBoardContainerView(htmlElement)
{
    document.getElementById(boardContainerHolderId).appendChild(htmlElement);
}