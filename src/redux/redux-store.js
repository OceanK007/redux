import {createStore} from 'redux';
import {boardReducer} from '../board/board-list/board-redux'

STATE
var STATE = 
{
    "boards": 
    [
      {
        "id": 1,
        "title": "board1"
      }   
    ]
};

// STORE (Assigning reducer and state). It's not compulsory to provide "state"
var store = createStore(boardReducer, state);

