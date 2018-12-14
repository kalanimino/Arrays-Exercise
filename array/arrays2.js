var pingusDad = {
    onlyName : "Pingu's Dad",
    beakColor : "Red",
    canFly : false,
    chirp: "CHIRP CHIRP! Is this what penguins sound like?",
    sayHello : function() {
        return `${this.onlyName}, is you?`
    },
    fly : function() {
        return this.canFly == false ? `No flying for me!` : `I can fly!`
    }
}
console.log(`${pingusDad.onlyName}, is you?`);
console.log(pingusDad.chirp);
console.log(pingusDad.sayHello());
pingusDad.onlyName="Penguin McPenguinFace";
console.log(pingusDad.sayHello());
console.log(pingusDad.fly());
pingusDad.canFly = true;
console.log(pingusDad.fly());

var text=` `;
var i;
for (i in pingusDad) {
    text += `${i} ` 
}
console.log(text)

var text2=` `;

for (i in pingusDad) {
    text2 += `${pingusDad[i]} `
}
console.log(text2)
