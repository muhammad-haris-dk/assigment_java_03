// ********************************Q1*****************************************

for(var i = 1; i <= 10; i++){
    console.log(i);
}

// ********************************Q2*****************************************

var userinput = +prompt("Enter a number to show its multiplication table")

var userinputlength = +prompt("Enter length multiplication table")

for(var i = 1; i <= userinputlength; i++){
    document.write(userinput + "X" + i + "=" + userinput*i + "<br>")
}
// ********************************Q3*****************************************

var fruits = ["apple","banana","mango","orange","strawberry"]

// document.write(fruits[0],"<br>",fruits[1],"<br>",fruits[2],"<br>",fruits[3],"<br>",fruits[4])

for(var i = 0; i <= fruits.length; i++){
    document.write("Element at index " + i +" is "+ fruits[i] +"<br>")
}

// ********************************Q4*****************************************

document.write("<b>","Counting","</b>","<br>")

for(var i = 1; i <= 10; i++){
    document.write(i ,",")
}
document.write("<br>","<b>","Reverse Counting","</b>","<br>")

for(var b = 10; b >= 1; b--){
    document.write(b + ",")
}

document.write("<br>","<b>","Even Number","</b>","<br>")

for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      document.write(i,",");
    }
}

document.write("<br>","<b>","Odd Number","</b>","<br>")

for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
      document.write(i,",")
    }
}

document.write("<br>","<b>","Series","</b>","<br>")

for (var i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
      document.write(i,"k",",");
    }
}

// ********************************Q5*****************************************

document.write("<br>","<b>","Bakery","</b>")

var userData = prompt("Welcome to ABC Bakery. What to do order sir/ma'am?")

var bakeryProduct = ["cake","apple pie","cookie","chips","patties"]

if (userData === "cake") {
    document.write("<br>","cake is","<b>"," available ","</b>","at index 0 in our bakery")
}

else if (userData === "apple pie") {
    document.write("<br>","apple pie is","<b>"," available ","</b>","at index 1 in our bakery")
}

else if (userData === "cookie") {
    document.write("<br>","cookie is","<b>"," available ","</b>","at index 2 in our bakery")
}

else if (userData === "chips") {
    document.write("<br>","cake is","<b>"," available ","</b>","at index 3 in our bakery")
}

else if (userData === "patties") {
    document.write("<br>","patties is","<b>"," available ","</b>","at index 4 in our bakery")
}

else{
    document.write("<br>","We are Sorry.",userData," is ","<b>","not available ","</b>","in our bakery")
}

// ********************************Q5*****************************************

var arr = [24,53,68,98]

document.write("<br>","Array Items:",arr)

var arr = [24,53,68,98]

document.write("<br>","The largest number is 98")

// ********************************Q5*****************************************

var arr = [24,53,68,98]

document.write("<br>","Array Items:",arr)

var arr = [24,53,68,98]

document.write("<br>","The largest number is 24" + "<br>")

// ********************************Q5*****************************************

for(var m = 1; m <= 100; m++){
    document.write(5*m + ",")
    
}