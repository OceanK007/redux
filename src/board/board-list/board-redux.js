export function boardReducer(state, action)
{
    // Never override the current state, it will be required for undo operations
    console.log(action.type);

    switch(action.type)
    {
        case 'ADD_BOARD':
            return addBoardReducer(state, action);
        case 'REMOVE_BOARD':            
            return removeBoardReducer(state, action);
        default:
            return state;
    }
}

// ADD_BOARD REDUCER
function addBoardReducer(state, action)
{
    var newState = {...state}
    newState.boards.push(
    {
        "id":action.details.id,
        "title":action.details.title,
        "isActive":action.details.isActive
    });

    return newState;
}

// REMOVE_BOARD REDUCER
function removeBoardReducer(state, action)
{
    var newState = {...state}
    Array.from(newState).forEach(function(element) 
    {
        if(element.id == action.details.id)
        {
            element.isActive = false;
        }
    });

    return newState;
}