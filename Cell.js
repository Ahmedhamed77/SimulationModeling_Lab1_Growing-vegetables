
const empty = 0;
const planted = 1;
const green = 2;
const imMature = 3;
const mature = 4;
const overGrowState = 5;

let money = document.getElementById("money").value; //money textinput value

class Cell {


     greenTimeout;
     immatureTimeout;
     matureTimeout
     overGrowTimeout;

    state = empty; //cell state


    plant(element){

        this.state = planted;
        element.style.backgroundColor =  "#000000";
        money -=3;
        document.getElementById("money").value = money;
        this.greenTimeout = setTimeout(() => (this.green(element)),slideRange*1000);





    }

    harvest(element){

        if(this.state === imMature){
            money += 3
            document.getElementById("money").value = money;
        }
        if(this.state === mature){
            money +=5;
            document.getElementById("money").value = money;
        }
        if(this.state === overGrowState){
            money -= 1;
            document.getElementById("money").value = money;
        }

        clearTimeout(this.greenTimeout);
        clearTimeout(this.immatureTimeout);
        clearTimeout(this.matureTimeout);
        clearTimeout(this.overGrowTimeout);
        this.state = empty;
        element.style.backgroundColor =  "#FFF";

    }

    green(element){
        this.state = green;
        element.style.backgroundColor =  "#008000";
        this.immatureTimeout = setTimeout(() => (this.immature(element)),slideRange*1000);
    }

    immature(element) {
        this.state = imMature;
        element.style.backgroundColor = "#ffff00"
        this.matureTimeout = setTimeout(() => (this.mature(element)),slideRange*1000);

    }

    mature(element) {
        this.state = mature;
        element.style.backgroundColor = "#ff0000"
        this.overGrowTimeout = setTimeout(() => (this.overGrow(element)),slideRange*1000);
    }

    overGrow(element){
        this.state = overGrowState;
        element.style.backgroundColor = "#a52a2a";

    }

}
























