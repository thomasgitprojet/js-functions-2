/**
 * Return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));
}

/**
 * return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));
}


/**
 * Gets a random value from an array
 * @param {array} array of datas 
 * @returns {*} - a random value
 */
function getRandomArrayValue(array) {
    return array[getRandomValue(array.length - 1)];

}

/**
 * Gets a random value from an array
 * @param {array} array of datas 
 * @returns {*} - a random value
 */
function getRandomArrayValue(array) {
    return array[getRandomValue(array.length - 1)];

}

/**
 * return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));
}

let players = [

    {
        playerName : 'Samir',
        life : true,
        pv : 50,
        xp : 5,
        poweratk : 8,
        powerdef : 5
    },

    {
        playerName : 'Paul',
        life : true,
        pv : 50,
        xp : 4,
        poweratk : 3,
        powerdef : 6
    },

    {
        playerName : 'Loanne',
        life : true,
        pv : 50,
        xp : 6,
        poweratk : 6,
        powerdef : 7
    },

    {
        playerName : 'Tom',
        life : true,
        pv : 50,
        xp : 7,
        poweratk : 4,
        powerdef : 10
    }
]

///////////////////////////////////////calc pv///////////////////////

function calcPv(playerPv, playerDamage) {
    return playerPv - playerDamage
}

//////////////////////////////////function attack//////////////////////

function getAttackScore(attacker) {
    return getRandomValue(attacker.poweratk) + attacker.xp;
}

// function attack (player) {
//     return player.xp + Math.round(player.poweratk * Math.random())
// }

////////////////////////////////function defence//////////////////////
function getDefenceScore(defender) {
    return getRandomValue(defender.powerdef) + defender.xp;
}

// function defence (player) {
//     return player.xp + Math.round(player.powerdef * Math.random())
// }

///////////////////////////////////////////out player////////////////////

function outPlayer (array) {
    let player;
    for (player of players) {
       //  console.log(player);
        if (player.pv <= 0) {
           player.life = false
        }
    }
   array = array.filter((value) => value.life === true)
   return array
}



////////////////////////////////is winner/////////////////////////////////

function isWinner (array) {

    if (array.length == 1) {
        console.log(`game over le gagnant est ${array[0].playerName}`);
    }
}


/////////////////////////////challengers/////////////////////////////

function getChallengers (array) {
    let playersBattle = [];
    let i = 0;

while (i < 2) {
    playersBattle.push(getRandomArrayValue(array));
    if (playersBattle[0] === playersBattle[1]) {
        playersBattle.pop();
    }else {
        i++;
    }
}
return playersBattle;
}


////////////////////////////function figth////////////////////////

function figth (figther, defender) {
    let attackScore = getAttackScore(figther);
    let defenceScore = getDefenceScore(defender);

    if (attackScore > defenceScore) {

        console.log(`${figther.playerName} fait une attaque de : ${attackScore}`);
        console.log(`${defender.playerName} pare le coup avec une défence de : ${defenceScore}`);
        console.log(`L'attaquant ${figther.playerName} gagne la manche`);

       defender.pv-= attackScore
    }else {
        console.log(`${figther.playerName} fait une attaque de : ${attackScore}`);
        console.log(`${defender.playerName} pare le coup avec une défence de : ${defenceScore}`);
        console.log(`le défenseur ${defender.playerName} gagne la manche`);

       figther.pv-= defenceScore
    }
    // console.log(figther, defender);
    // return
}
 //figth(players[0], players[1])
 // figth(playersBattle[0], playersBattle[1])
 // while (players.length)

 let round = 1;
 
 while (players.length > 1) {

    console.log(`Début de la manche : ${round}`);

    let chall = getChallengers (players);


        figth(chall[0], chall[1]);
       
       players = outPlayer(players)
        console.table(players);
    round+= 1;
        isWinner(players)
}





    // if (players.length > 1) {

    //     let chall = getChallengers (players);
    //     console.log(chall);

    //     figth(chall[0], chall[1]);
       
    //    players = outPlayer(players)
    //     console.table(players);
    // }
    // console.log(getChallengers(players));
    // console.log(outPlayer(players));
    // console.log(outPlayer(players));
