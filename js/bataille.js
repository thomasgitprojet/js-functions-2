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

// ///////////////////////////////////////calc pv///////////////////////
// /**
//  * 
//  * @param {number} playerPv 
//  * @param {number} playerDamage 
//  * @returns 
//  */
// function calcPv(playerPv, playerDamage) {
//     return playerPv - playerDamage
// }


/**
 * calculed random score of attacker
 * @param {string} attacker name of attacker
 * @returns {number} score of attacker 
 */
function getAttackScore(attacker) {
    return getRandomValue(attacker.poweratk) + attacker.xp;
}



/**
 * calculed random score of defender
 * @param {string} defender name of defender
 * @returns {number} score of defender
 */
function getDefenceScore(defender) {
    return getRandomValue(defender.powerdef) + defender.xp;
}


/**
 * delate player if this pv = 0 
 * @param {array} array 
 * @returns {array} update array
 */
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


/**
 * declared the winner of the game
 * @param {array} array 
 */
function isWinner (array) {

    if (array.length == 1) {
        console.log(`game over le gagnant est ${array[0].playerName}`);
    }
}


/**
 * get random a defender and attacker
 * @param {array} array 
 * @returns {array} array of two players, the defender and the attacker
 */
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
/**
 * get the result of the round and calcule the pv of looser
 * @param {object} figther 
 * @param {object} defender 
 */
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
  
}


 let round = 1;
 
 while (players.length > 1) {

    console.log(`Début de la manche : ${round}`);

    let chall = getChallengers (players);


    figth(chall[0], chall[1]);
       
    players = outPlayer(players)
        console.table(players);

    round+= 1;
        
    isWinner(players)
};

