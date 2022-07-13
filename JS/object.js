const out = document.getElementById('info');

const simpson = {
  name: 'Bart',
  age: 10,
  city: 'Springfield'
}

console.log(simpson);
console.dir(simpson);


let txt = "";

for (let x in simpson) {
    txt += simpson[x] + " ";
    console.log(txt);
    console.log(x);
    // txt = txt + simpson[x] + " ";
};

out.innerHTML = txt;



const myArray = Object.values(simpson);
out.innerHTML = myArray;



function Simpson(name, age, haircolor){
  this.name = name;
  this.age = age;
  this.hairColor = haircolor;
  this.hello = function(){
    return `El personatge ${this.name} té ${this.age} anys i el cabell de color ${this.hairColor}`;
  }
}
const bart = new Simpson('Bart',10,'yellow');
const marge = new Simpson('Marge',36,'blue');

console.log(bart.hello());
