const WEAPONS = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return WEAPONS[randomNumber];
}

function playGame(playerSelection, computerSelection){
    let pChoice = playerSelection.toUpperCase();
    let cChoice = computerSelection.toUpperCase();
    let result = gameRules(pChoice, cChoice);



    return result;


}

function gameRules(playerWeapon, computerWeapon){

    //Rock > Scissors
    //Rock = Rock
    //Rock < Paper
    //Paper < Scissors
    //Paper = Paper
    //Scissors = Scissors


    let gameResults = ['Win', 'Lose', 'Draw'];
    let weapons = WEAPONS.map(x => x.toUpperCase());

    if (playerWeapon === weapons[0] && computerWeapon === weapons[2])
        return gameResults[0]
    else if (playerWeapon === weapons[0] && computerWeapon === weapons[0])
        return gameResults[2]
    else if (playerWeapon === weapons[0] && computerWeapon === weapons[1])
        return gameResults[1]
    else if (playerWeapon === weapons[1] && computerWeapon === weapons[2])
        return gameResults[1]
    else if (playerWeapon === weapons[1] && computerWeapon === weapons[1])
        return gameResults[2]
    else if (playerWeapon === weapons[2] && computerWeapon === weapons[2])
        return gameResults[2];
}

function game(){

    let iplayer = 0, icomputer = 0;
    for (let x = 0; x < 5; ++x){
        
        let result = playGame(prompt("Rock, Paper or Scissors?"), getComputerChoice());
        if (result ===  'Win')
            ++iplayer
        else if (result === 'Lose')
            ++icomputer;

        console.log("You " + result + "!\nPlayer: " + iplayer + "\nComputer: " + icomputer);
    }

    if (iplayer > icomputer)
        console.log("You won the game!")
    else if (iplayer < icomputer)
        console.log("You lost the game!")
    else
        console.log("The game is a draw!");
}