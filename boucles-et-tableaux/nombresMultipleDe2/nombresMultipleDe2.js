"use strict"

let multiple = document.getElementById (" multiple " );

for (let index = 1; index <= 1000; index++ )
    if ( index % 2 === 0) {

        document.getElementById ( "multiple" ).innerHTML += index + "<br>";
    }