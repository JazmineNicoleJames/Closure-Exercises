function guessingGame() {
    let count =0;
    let target = Math.floor(Math.random() * 100);
    let solved = false;
    return function game(num) {
        count+=1;
        if(!solved){
            if(num === target){
                solved = true;
                return `You win! You found ${num} in ${count} guesses.`;
            };
            if(num > target) return `${num} is too high!`;
            if(num < target) return `${num} is too low!`;
        } else{
            return "The game is over, you already won!";
        }
    } 
}

module.exports = { guessingGame };
