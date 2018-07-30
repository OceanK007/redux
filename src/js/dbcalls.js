import $ from 'jquery';
import {renderCards} from './my_redux';

const URL_DB_LOCAL = '../../db.json';
const URL_DB_JSON_SERVER = 'http://localhost:3000';

export function getCards()
{
    var fetchedData = null;
    $.ajax
    ({
        url: URL_DB_LOCAL,
        //dataType: 'json',
        async: false,   // To make it asynchronous
        //data: myData,
        success: function(data) 
        {
            fetchedData = data;
        }
    });
   
    //console.log(fetchedData);

    return fetchedData;
}

export function saveCard(data)
{
    $.ajax
    ({
        type: 'POST',
        url: URL_DB_JSON_SERVER+"/cards",
        data: JSON.stringify(data),
        contentType : "application/json",
        //dataType: 'json',
        async: true,   // To make it asynchronous
        //data: myData,
        success: function(data) 
        {
            console.log("Card saved to db");
            //renderCards(getCards());
        }
    });
}

export function updateCard(data)
{
    $.ajax
    ({
        type: 'PUT',
        url: URL_DB_JSON_SERVER+"/cards/"+data.id,
        data: JSON.stringify(data),
        contentType : "application/json",
        //dataType: 'json',
        async: true,   // To make it asynchronous
        //data: myData,
        success: function(data)
        {
            console.log("Card updated to db");
            //renderCards(getCards());
        }
    });
}