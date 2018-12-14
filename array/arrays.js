var colors = ["red","blue","green","cyan","violet",];

console.log(colors[0]);

console.log(colors[2]);

colors[4] = "ultraviolet";

var fourthColor = colors[3]

console.log(colors[4]);

colors.unshift("greenish");

console.log(colors.length);

colors.pop();

var text="";
var i;

console.log(colors.length);

for (i=0;i<colors.length;i++) {
    text+=colors[i] + " "
}

var text2 = ""

console.log(text)

for (i=0;i<colors.length;i++) {
    text2+=i + ', '+ colors[i] + '; ' 

}

console.log(text2)

var lastColor = colors[colors.length - 1]

console.log(lastColor)