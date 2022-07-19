const out = document.getElementById('info');

// objecte creat directament
const simpson = {
  name: 'Bart',
  age: 10,
  city: 'Springfield'
}

console.log(simpson);
console.dir(simpson);


let txt = "";

for (let x in simpson) {
    txt += simpson[x] + " "; // és el mateis que: txt = txt + simpson[x] + " ";
    console.log(txt);
    console.log(x);
};

out.innerHTML = txt;


// es pot convertir objecte en array
const myArray = Object.values(simpson);
out.innerHTML = myArray;


// es pot crear un constructor d'objectes genèric
function Simpson(name, age, haircolor){
  // conté informació
  this.name = name;
  this.age = age;
  this.hairColor = haircolor;
  // conté un mètode que, en aquest cas retorna una frase amb tota la informació
  this.hello = function(){
    return `El personatge ${this.name} té ${this.age} anys i el cabell de color ${this.hairColor}`;
  }
}
// es poden crear tants objectes com es vulguin utilitzant el constructor.
const bart = new Simpson('Bart',10,'yellow');
const marge = new Simpson('Marge',36,'blue');

// per mostrar informació, es crida la clau
console.log( bart.name );
// per invocar el mètode, s'ha de cridar amb ()
console.log( bart.hello() );






// exemple d'una funció que demana informació, crea un objecte a través del constructor creat anteriorment
// i mostra la informació amb el mètode propi de l'objecte
function demana(){
  
  let nom = prompt('Entra el nom');
  let edat = prompt('Entra edat');
  let cabell = prompt('Entra el color de cabell');

  let newperson = new Simpson(nom,edat,cabell);

  alert( newperson.hello() );
}

demana();
