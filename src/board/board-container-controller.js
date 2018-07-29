import {createBoardContainerView, appendBoardContainerView} from './board-container-view';

export function boardElement(url)
{
    switch(url)
    {
        case 'board-container':
            createBoardContainer();
            break;
        case 'board-container/board':
            createBoard();
        break;
    }
}

function createBoardContainer()
{
    var element = createBoardContainerView();
    appendBoardContainerView(element);
}

function createBoard()
{
    
}

