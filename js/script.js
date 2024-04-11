// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.info("1/ Implémentez une fonction qui prend en paramètre les dimensions de 2 côtés d'un triangle rectangle et retourne la dimension de l'hypoténuse.");

/**
 * calculed hypotenus
 * @param {number} nbr1 
 * @param {number} nbr2 
 * @returns {number} result of hypo
 */
function calcHypotenus (nbr1, nbr2) {
    return Math.hypot(nbr1, nbr2)
}
console.log(calcHypotenus(3, 4));
console.log(calcHypotenus(10, 14));

/* ------------------------------------------------------*/

console.info("2/ Implémentez une fonction qui retourne le nom et le prénom du plus âgé de 2 utilisateurs passés en paramètres parmi les 4 ci-dessous.");
/**
 * get last name and first name of user
 * @param {object} usera 
 * @param {object} userb 
 * @returns {string} last name and first name
 */
function getFirstAndLastName (usera, userb) {
    let userAName = `${usera.firstName} ${usera.lastName}`;
    let userBName = `${userb.firstName} ${userb.lastName}`;
    return usera.age > userb.age ? userAName : userBName
}

const user1 = {firstName: "Paul", lastName: "Rick", age: 35};
const user2 = {firstName: "Samir", lastName: "Ah", age: 22};
const user3 = {firstName: "Loanne", lastName: "Bourdin", age: 28};
const user4 = {firstName: "Abdel", lastName: "Dems", age: 44};

console.log(getFirstAndLastName(user1, user2));
console.log(getFirstAndLastName(user4, user3));

/* ------------------------------------------------------*/

console.info("3/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau de nombres, quelqu'en soit la taille.");
function maxValur (array) {
    return Math.max(...array);
}
console.log(maxValur([25, 36, 2, 78]));
console.log(maxValur([52, 19, 30, 4]));

/* ------------------------------------------------------*/

console.info("4/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot.");
function  countRepeatedOfOccurencesOfWords(txt) {
    let words = {};
    for (let word of txt.split(" ")) {
        console.log(word);
        if (words[word] === undefined || words[word] === 0) {
            words[word] = 1;
        }else {
            words[word]++
        }
    }
    return words
}
console.log(countRepeatedOfOccurencesOfWords("Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot"));

/* ------------------------------------------------------*/

console.info("5/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres.");
/**
 * get random number from two param
 * @param {number} a min
 * @param {number} b max
 * @returns {number}
 */
function getrandomNumberFromParam (a, b) {
    return Math.floor(Math.random() * (b - a + 1))
+ a}
console.log(getrandomNumberFromParam(5, 8));
console.log();

/* ------------------------------------------------------*/

console.info("6/ Implémentez une fonction qui retourne une chaîne de caractère aléatoire composée de chiffres et de lettres en majuscule et minuscule, de la taille passée en paramètre.");

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

function creatPassWord (length) {
    let arrayChar = [];
    let passWord = "";

    for (let i = 48; i <= 57; i++) {
        arrayChar.push(String.fromCharCode(i))
    }

    for (let i = 65; i <= 90; i++) {
        arrayChar.push(String.fromCharCode(i))
    }

    for (let i = 97; i <= 122; i++) {
        arrayChar.push(String.fromCharCode(i))
    }

    for (let j = 0; j < length; j++) {
      passWord += getRandomArrayValue(arrayChar);
    }

    return passWord;

}

console.log(creatPassWord(8));
console.log(creatPassWord(3));

/* ------------------------------------------------------*/

console.info("Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous.");


/* ------------------------------------------------------*/

/**
 * Calculate an age from a birthdate.
 * @param {string} birthdate birthdate in texte form ex. "1955-01-14"
 * @returns {number} the age
*/
function calculateAgeFromBirthdate(birthdate) {
    const b = new Date(birthdate);
    
    // Is the birthdate a valid date ?
    if (!(b instanceof Date) || isNaN(b)) return;
    
    // birthdate is valid
    return (new Date(Date.now() - b)).getFullYear() - 1970;
}
const newbie = {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1995-02-14",
    job: "web developer",
    city: "Detroit",
    skills: ["HTML", "CSS"],
    age : function() {
        return calculateAgeFromBirthdate(this.birthdate);       
    },
    showSkills : function () {
        return `Paul est le boss niveau ${this.skills[0]} et ${this.skills[1]}`
    },
    addSkill : function (skill) {
        this.skills.push(skill)
    }

};

// newbie.age = calculateAgeFromBirthdate(newbie.birthdate);

console.info("7/ Implémentez une méthode retournant l'âge de Paul.");

console.log(newbie.age());

/* ------------------------------------------------------*/

console.info("8/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules.");

console.log(newbie.showSkills());

/* ------------------------------------------------------*/

console.info("9/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre.");
console.info("Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat.");
newbie.addSkill("js")
console.log(newbie.skills);

/* ------------------------------------------------------*/

console.info("10/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)");
console.log();