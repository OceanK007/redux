import {boardElement} from '../board/board-container-controller';

window.onload = function() 
{
    loadElement('board-container');
};

function loadElement(url)
{
    console.log(url);
    switch(url)
    {
        case 'board-container':
            boardElement(url);
            break; 
    }
}