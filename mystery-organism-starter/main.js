// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//fonction qui permet de creer des objets 
const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,

    get specimenNum(){
      return this._specimenNum;
    },
    get dna(){
      return this._dna;
    },
    //methode qui renvoi un adn muté
    mutate(){
      const randomIndex = Math.floor(Math.random() * this.dna.length-1);
      const randomMut = this.dna[randomIndex];
      let mutBase = '';
      do{
        mutBase = returnRandBase();
      } 
      while(randomMut === returnRandBase());
      this.dna.splice(randomIndex, 1, mutBase);
      return this.dna;
    },
    //methode qui compare et renvoi le pourcentage de ressemblance entre deux adns
    compareDna(object){
      const Dna = object.dna;
      let countSimilar = 0;
      for(let i = 0; i < Dna.length; i++){
        if(this.dna[i] === Dna[i]){
          countSimilar++;
        }
      }
      let percentage = ((countSimilar/Dna.length) * 100).toFixed(2);
      return `specimen ${this.specimenNum} and specimen ${object.specimenNum} have ${percentage}% DNA in common.`;
    },
    //methode qui renvoi true si un adn contient plus de 60% de base C et G
    willLikelySurvive(){
      let countCGBase = 0;
      for (let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          countCGBase++;
        }
      }
      let percentage = ((countCGBase/this.dna.length) * 100).toFixed(2);
      return (percentage > 60.00 ? true : false);
    },
    //methode qui renvoi le complement d'adn
    complementStrand(){
      let complementDNA = [];
      for(let i = 0; i < this.dna.length; i++){
        switch(this.dna[i]){
          case 'A': 
            complementDNA.push('T');
            break;
          case 'T':
            complementDNA.push('A');
            break;
          case 'C':
            complementDNA.push('G');
            break;
          case 'G':
            complementDNA.push('C'); 
            break; 
        }
      }
      return complementDNA;
    }
  }
}
const surviveArray = [];
const instanceOf30survive = () =>{
  let i = 0;
  while(surviveArray.length < 30){
    let espece = pAequorFactory(i, mockUpStrand());
    if(espece.willLikelySurvive()){
      surviveArray.push(espece.dna);
      i++;
    }
  }
}

/*
instanceOf30survive();
console.log(surviveArray);
*/
const espece1 = pAequorFactory(1, mockUpStrand());
const espece2 = pAequorFactory(2, mockUpStrand());
console.log(espece1.dna);
console.log(espece1.complementStrand());
console.log(espece1.willLikelySurvive());
console.log(espece1.compareDna(espece2));
console.log(espece1.dna);
console.log(espece2.dna);





