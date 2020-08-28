// var gotElements = document.getElementsByClassName('fade');

// for (var i = 0; i<= gotElements.length-1; i ++){
// 	console.log(gotElements[i]);
//     var colorGot = window.getComputedStyle(gotElements[i], null).getPropertyValue("background-color");
//     console.log(colorGot);
// }

// document.getElementsByClassName('myClassName')[0].id



// var gotElements = document.getElementsByClassName('fade');
// function colorChanger(){
//     for (var i = 0; i<= gotElements.length-1; i ++){
//         console.log(gotElements[i]);
//         //getting color of window
//         var colorGot = window.getComputedStyle(gotElements[i], null).getPropertyValue("background");

//         console.log(colorGot);
//         setTimeout(colorChanger, 20000);
//     }
// }

function function1() {
    
    var gotElements = document.getElementsByClassName('fade');
    for (var i = 0; i<= gotElements.length-1; i ++){
        console.log(gotElements[i]);
        //getting color of window
        var colorGot = window.getComputedStyle(gotElements[i], null).getPropertyValue("background");

        console.log(colorGot);
        document.getElementById("main-container").style.background = colorGot;
    }
}

function runner() {
    function1();
    setTimeout(runner(),20000);
}

runner();