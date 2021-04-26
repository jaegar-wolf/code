// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:


const validateCred = (arrayOfCard) => {
    //on inverse l'emplacement des chiffres de la carte
    arrayOfCard.reverse();
    let sumNumbers = 0;
    for(let i=0; i < arrayOfCard.length; i++){
        //si i est pair
        if(i % 2 == 0) {
            //on ajoute un chiffre a la somme 
            sumNumbers += arrayOfCard[i];
        }
        //si i est impair
        else {
            //on ajoute le double du chiffre a la somme (voir fonction calcul) 
            sumNumbers += calcul(arrayOfCard[i]);
        }
    }
    //on remet a l'endroit les chiffre de la carte
    arrayOfCard.reverse();
    //si le modulo de la somme calculé est 0 on renvoi true sinon false
    if (sumNumbers % 10 === 0){
        return true;
    }
    else {
        return false;
    }
}

const calcul = (num) => {
    let result = 0;
    result = num * 2;
    //si le double est supérieur a 9 on enlève 9
    if (result > 9){
        return result - 9;
    }
    else {
        return result;
    }
}

const findInvalidCard = (array) => {
    let invalidCard = [];
    //on check quelle carte est valide 
    for(let i = 0; i < array.length; i++){
        const creditCard = array[i];
        //si la carte est invalide on l'ajoute au tableau des cartes invalide
        if(!validateCred(creditCard)){
            invalidCard.push(creditCard);
        }
    }
    //on renvoit le tableau des carte invalide
    return invalidCard;
}

const invalidCardCompany = (array) => {
    let company = [];
    //on check le premier chiffre des carte pour savoir de quelle companie elles viennent
    for(let i = 0; i < array.length; i++){
        switch(array[i][0]){
            case 3:
                if(company.indexOf('Amex') == -1){
                    company.push('Amex');
                }
            case 4:
                if(company.indexOf('Visa') == -1){
                    company.push('Visa');
                }
            case 5:
                if(company.indexOf('MasterCard') == -1){
                    company.push('MasterCard');
                }
            case 6:
                if(company.indexOf('Discover') == -1){
                    company.push('Discover');
                }
            default:
                if(company.indexOf('Company not found') == -1){
                    company.push('Company not found');
                }
        }
    }
    return company;
}
const createArrayOfCard = (string) => {
    let newCard = [];
    for(let i =0 ; i < string.length; i++){
        newCard.push(Number(string[i]));
    }
    return newCard;
}

const newCard = createArrayOfCard('371612019985236');
console.log(newCard);
console.log(validateCred(createArrayOfCard(newCard)));
console.log(invalidCardCompany(findInvalidCard(batch)));





