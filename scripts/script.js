let x = "";

const repeatString = function (repeatTimes) {
    var stringArray = [repeatTimes];
    if (repeatTimes>0) {
        for (let i = 0; i < repeatTimes; i++) {
            stringArray[i] = "auto";
            x = stringArray.join(" ");
        }
    }
    return x;
}

const grid = document.querySelector('gridContainer')
    function gridMaker (size) {
        for (let i=0; i <size; i++){
            grid.style.cssText = "grid.template.columns: " + x;
            for ( let j = 0 ; j < size; j++){
                const square = document.createElement('div');
                grid.appendChild(square);
                square.classList.add("square")
            }
        }
        selectColor();
        diffColor();
        resizeBy();
}

const selectColor = function(){
    const square = document.querySelectorAll('.square');
    square.forEach(function(square){
        square.addEventListener("mouseover", function(e){
            square.style.cssText = "backgroundColor: " + color;
        });
    });
}

const diffColor = function(){
    const white = document.querySelector("#white");
    white.addEventListener('click', ()=>{
        color="white",
        selectColor(color);
    })
    const blue = document.querySelector("#blue");
    blue.addEventListener('click', ()=>{
        color='blue'
        selectColor(color);
    })
}

const resize = function(){
    const resize = document.querySelector("#newSize");
    resize.addEventListener('click', ()=>{
        let sizeValue = document.querySelector('#size').value;
        removeGrid();
        repeatString();
        gridMaker();
    })
}

// repeatString(16);
// gridMaker(16);