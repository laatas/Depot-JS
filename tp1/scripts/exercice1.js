'use strict';

// des listes pour des tests
const numbers = [2, 3, 5, 4, 10, 6];
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }, {name : 'sam', age : 26 }];

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);

// exemple de manière de répondre aux questions d'un exercice

// Q1
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;

//Q2
// tests d'exécution de la fonction example
console.log(`Q2 - example(10) : ${example(10)}`);
console.log(`Q2 - example(21) : ${example(21)}`);

// Q3
/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );

// Q4
// tests d'exécution de la fonction example2
console.log(`Q4 - example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/



/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);

const res = persons.map(elt =>elt.name);
console.log(...res);

console.log("question2:");
const res2 = persons.map(elt =>elt.name[0].toUpperCase());
console.log(...res2);


console.log("question3:");
var res3 =persons.map((person,idx)=>person.name[idx]);
console.log(res3);


console.log("question4:");
const capitalize = function(str){return str.charAt(0).toUpperCase() + str.slice(1)};
console.log(capitalize('timoleon'));

const res4 = persons.map(elt => capitalize(elt.name));
console.log(res4);



console.log("question5:");
const myMap = function(liste,func){
    const arr = [];
    for (let element of liste){
        arr.push(func(element));
    }
    return arr;
}
console.log(myMap(persons,elt => capitalize(elt.name)));
/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);

console.log("Question2:");
const shiftCodePoint = function(car){
    return car.codePointAt(0)+9301;
}
console.log(shiftCodePoint('c'));

console.log('question 3:');
const shiftCodePointList = function(chaine){
    const arr = [];
    for (let c of chaine){
        arr.push(shiftCodePoint(c));
    }
    return arr;
}
console.log(shiftCodePointList('timoleon'));


console.log("Question 4:");
const out4 = persons.map(elt => String.fromCodePoint(...shiftCodePointList(elt.name)));
console.log(out4);

/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);
console.log("Question 1:");
const out1 = numbers.map(elt => elt*10);
console.log(out1)

console.log("Question 2:")
const multiples = function(n,l){return l.map(elem => elem*n)}
console.log(multiples(10,numbers));

/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);
console.log('Question 1:');

numbers.forEach(num => console.log(num));

console.log('Question 2:');

persons.forEach((person) => {
    console.log(`${person.name} a ${person.age} ans`);
});

/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);
console.log('Question 1:');

numbers.filter(elem => console.log(elem) && elem <5);

console.log('Question 2:');
const createAcronym = function(phrase){
    const mots = phrase.split(" ");
    const mots_Filter = mots.filter((elem) => elem.length >3);
    const map = mots_Filter.map((elem) => elem[0].toUpperCase());
    console.log(map.join(""));
}
createAcronym('formations en informatique de lille');             
createAcronym('société nationale des chemins de fer français');   

/******<***************************************/


/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

console.log('Question 1:');

const nbLetters = function(phrase){
    const tab = phrase.split(" ");
    return tab.reduce((previous , element) => previous+element.length ,0 );
}
const FIL = "Formations en Informatique de Lille";
console.log(nbLetters(FIL));

console.log('Question 2:');

const maximum = function(num1,num2){
    return num1>num2 ? num1 : num2;
}

const maxNumber = function(numberList){
    if (numberList.length ==0){
        return 0;
    }
    let max = numberList[0];
    return numberList.reduce((prev,elem) => maximum(prev,elem),0);
}
console.log(maxNumber([]));
console.log(maxNumber(numbers));

console.log("Question 3:");

const maxNumber2 = function(liste){
    return Math.max(...liste);
}
console.log(maxNumber2(numbers));

console.log('Question 4:');
const sum = function(...num){
    return num.reduce((actual , elem) => actual + elem ,0);
}
console.log(sum(...numbers));
/*********************************************/


/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);

console.log('Question 1:');
const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin'];
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];
const participants = function(listeInvites,listeReponses){
    const list = listeReponses.filter(person => person.present =='non');
    const map = list.map(elem => elem.nom); //liste des noms de personnes qui on dit non
    const listeParticipants = listeInvites.filter(elem => !map.includes(elem)); //liste des invité qui n'ont pas dit "non"
    return listeParticipants;
}
console.log(participants(lesInvites,lesReponses));


participants(lesInvites, lesReponses);
/*********************************************/

/********** EXERCICE 9 ***********************/
console.log(` *** EXERCICE 9 *** `);



/*********************************************/

/********** EXERCICE 10 ***********************/
console.log(` *** EXERCICE 10 *** `);



/*********************************************/
