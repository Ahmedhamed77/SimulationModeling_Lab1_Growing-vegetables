window.onload = config;
let cells = [];

let slideRange = document.getElementById('speedRange').value; // the slide bar range value

function config() { //creating new cell
    for(let i = 0 ; i < 12 ; i++){
        let cell = new Cell();
        cells.push(cell);
    }
}



function reply_click(clicked_id) //function get the id of the div when it clicked then check each cell state
{
    let element = document.getElementById(clicked_id);
    if(cells[clicked_id-1].state === empty){
        cells[clicked_id-1].plant(element);
    }
    else {
        if((cells[clicked_id-1].state === planted)||(cells[clicked_id-1].state === green)){
            return;
        }
        cells[clicked_id-1].harvest(element);
    }
}


function updateTextInput(val){ // updating the textInput of the slide bar
    document.getElementById('speedRange').value=val;
    slideRange = val;
}
