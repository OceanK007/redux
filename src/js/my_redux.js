import {createStore} from 'redux';
import {createHTMLElement} from './service';

const htmlContent = 
`<div class="container text-center">
    <h1 id="counter">0</h1>
    <button class="btn btn-primary" id="add">Increment</button>
    <button class="btn btn-secondary" id="minus">Decrement</button>
    <button class="btn btn-danger" id="reset">Reset</button>
</div>`;

//console.log(createElement());
document.querySelector('body').appendChild(createElement());

// Creating element.
function createElement()
{
    const element = createHTMLElement(htmlContent);
    //console.log(element);
    
    // ACTIONS
    element.querySelector('#add').addEventListener('click', function() {
        store.dispatch({type: 'INCREMENT'});
    })

    element.querySelector('#minus').addEventListener('click', function() {
        store.dispatch({type: 'DECREMENT'});
    })

    element.querySelector('#reset').addEventListener('click', function() {
        store.dispatch({type: 'RESET'});
    })

    return element;
};

// REDUCER
function reducer(state, action)
{
    switch(action.type)
    {
        case 'INCREMENT':
            //console.log("Increment");
            // We should never change the current state
            return { count : state.count + 1};            
        case 'DECREMENT':
            return { count : state.count - 1};
        case 'RESET':
            return { count : 0 };
        default:
            return state;
    }
}

var state = { count: 0 };

// STORE (Assigning reducer and state). It's not compulsory to provide "state"
var store = createStore(reducer, state);
function render()
{
    //console.log("In Render");
    //console.log(store.getState());
    document.getElementById('counter').innerHTML = store.getState().count;
}
store.subscribe(render);    // Subscribing, so if state changes, it automatically renders on html
