import { LightningElement } from 'lwc';

export default class TableWithIcons extends LightningElement {
    columns = [
        {label: 'Id', fieldName: 'id', type: 'text', sortable:true},
        {label: 'Icons', fieldName: 'icons', type: 'text', sortable:true},
        {label: 'Icons', fieldName: 'icons', type: 'customIcons', sortable:false, 
            typeAttributes: {
                onclick: function() {
                    console.log('clicked');
                },
                thisContext: this
            }
        },
        {label: 'First Name', fieldName: 'first_name', type: 'text', sortable:true},
        {label: 'Last Name', fieldName: 'last_name', type: 'text', sortable:true},
        {label: 'Email', fieldName: 'email', type: 'email'},
    ];

    tableData = [
        {
            "id": 1,
            "icons": "10101",
            "first_name": "Lexy",
            "last_name": "Surman",
            "email": "lsurman0@wunderground.com"
        }, 
        {
            "id": 2,
            "icons": "11010",
            "first_name": "Sansone",
            "last_name": "Chinnery",
            "email": "schinnery1@vkontakte.ru"
        }, 
        {
            "id": 3,
            "icons": "10011",
            "first_name": "Junia",
            "last_name": "Edens",
            "email": "jedens2@mapquest.com"
        }, 
        {
            "id": 4,
            "icons": "01010",
            "first_name": "Ashleigh",
            "last_name": "Scoggan",
            "email": "ascoggan3@tuttocitta.it"
        }, 
        {
            "id": 5,
            "icons": "00010",
            "first_name": "Christye",
            "last_name": "Hull",
            "email": "chull4@yahoo.com"
        }, 
        {
            "id": 6,
            "icons": "11010",
            "first_name": "Kath",
            "last_name": "Malsher",
            "email": "kmalsher5@jiathis.com"
        }, 
        {
            "id": 7,
            "icons": "10111",
            "first_name": "Dion",
            "last_name": "Coraini",
            "email": "dcoraini6@networksolutions.com"
        }, 
        {
            "id": 8,
            "icons": "11111",
            "first_name": "Noel",
            "last_name": "O' Gara",
            "email": "nogara7@mozilla.org"
        }, 
        {
            "id": 9,
            "icons": "11110",
            "first_name": "Kiri",
            "last_name": "Dowling",
            "email": "kdowling8@theglobeandmail.com"
        }, 
        {
            "id": 10,
            "icons": "11010",
            "first_name": "Vally",
            "last_name": "McKeaney",
            "email": "vmckeaney9@over-blog.com"
        }
    ];
}