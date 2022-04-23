function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, onDirectionChange){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'

        document.addEventListener("keydown", function(e){
            if(e.repeat) return;
            if(e.key === "ArrowLeft"){
                direction = "west"
            };
            if(e.key === "ArrowRight"){
                direction = "east"
            };
            if(e.key === "ArrowUp"){
                direction = "north"
            };
            if(e.key === "ArrowDown"){
                direction = "south"
            };
            onDirectionChange(direction);
        });

        function moveCharacter(){
            if (direction === "west"){
                x = x - 1
            };
            
            if (direction === "east"){
                x = x + 1
            };
            
            if (direction === "north"){
                y = y + 1
            };
            
            if (direction === "south"){
                y = y - 1
            };
        
            character.style.left = x + "px";
            character.style.bottom = y + "px";
        };
        
        setInterval(moveCharacter, 1);
        setInterval(moveCharacter, 1);

        document.addEventListener("keyup", function(e){
            direction = null;
            onDirectionChange(direction);
        });
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}