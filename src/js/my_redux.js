import {createStore} from 'redux';
import {createHTMLElement, getLastElementId} from './service';
import {getCards, saveCard, updateCard} from './dbcalls';
import {htmlContent} from './view';

//console.log(createElement());
document.querySelector('body').appendChild(createElement());

// Creating element
export function createElement()
{
    const element = createHTMLElement(htmlContent);
    //console.log(element);
    
    element.querySelector('#button').addEventListener('click', function() 
    {
        var lastCardId = getLastElementId();    // No need since json-server automatically increment id
        var titleRef = document.getElementById('input');
        // console.log(titleRef);
        if(titleRef.value == "")
        {
            alert("Please provide card title");
        }
        else
        {            
            var newState = {id:Number(lastCardId)+1, title:titleRef.value, isActive:true};
            // ACTIONS
            store.dispatch({type: 'ADD_CARD', details: newState});
            // DB CALL
            saveCard(newState);
        }   
        
        titleRef.value = "";
    })

    return element;
};

// Creating card
export function createCard(id, title)
{
    const element = createHTMLElement(`
    <div class="my-card d-flex justify-content-between" id="${id}"> 
        <div>
            <input type="checkbox" class="" />
            <span class="">${title}</span>
        </div>
        <button class="btn btn-danger">Delete</button>
    </div>`);
    //console.log(element);
    
    element.querySelector('button').addEventListener('click', function(event) 
    {
        var cardId = event.target.parentNode.id;
        console.log();    
        var deleteState = {id:Number(cardId), isActive:false};
        // ACTIONS
        store.dispatch({type: 'REMOVE_CARD', details: deleteState});
        // DB CALL
        updateCard(deleteState);
    })

    return element;
};

// STATE
// var state = 
// {
//     "cards": 
//     [
//       {
//         "id": 1,
//         "title": "card1"
//       }   
//     ]
// };

var state = getCards();
// console.log(state);

// STATE ARRAY (FOR UNDO OPERATIONS)
var stateArray = [];

// REDUCER
function reducer(state, action)
{
    //console.log(stateArray);
    //console.log(state);
    //console.log(action);
    // Never override the current state, it will be required for undo operations
    switch(action.type)
    {
        case 'ADD_CARD':
            console.log("ADD_CARD");
            return addCardReducer(state, action);

        case 'REMOVE_CARD':            
            console.log("REMOVE_CARD");
            return removeCardReducer(state, action);
        default:
            return state;
    }
}

// ADD_CARD REDUCER
function addCardReducer(state, action)
{
    if(state == null)
    {
        stateArray.push(state);
        return {
            "cards": 
            [
                {
                    "id":action.details.id,
                    "title":action.details.title,
                    "isActive":action.details.isActive
                }
            ]
        };
    }
    else
    {
        stateArray.push(state);
        return {
            "cards": 
            [
                ...state.cards, 
                {
                    "id":action.details.id,
                    "title":action.details.title,
                    "isActive":action.details.isActive
                }
            ]
        };
    }
}

function removeCardReducer(state, action)
{
    Array.from(state.cards).forEach(function(element) 
    {
        if(element.id == action.details.id)
        {
            element.isActive = false;
        }
    });

    return state;
}

// STORE (Assigning reducer and state). It's not compulsory to provide "state"
var store = createStore(reducer, state);

// SUBSCRIBING to STORE
store.subscribe(render);    // Subscribing, so if state changes, it automatically renders on html
function render()
{
    console.log("In Render: "+store.getState());   
    renderCards(store.getState());
}

// CALLING RENDER TO FETCH INITIAL STATE
render(store.getState());

// *********************************************
export function renderCards(data)
{
    //console.log(data);
    if(data == null)
        return null;

    //console.log("Cards: "+ data.cards);
    var cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    Array.from(data.cards).forEach(function(element) 
    {
        //console.log(element);
        if(element.isActive == true)
        {
            var card = createCard(element.id, element.title);
            cardContainer.appendChild(card);
        }
    });
}