// ******************************Q1*************************************

for(var i = 1; i <= 10; i++){
    console.log(i);
}

// ******************************Q2*************************************

for(var i = 1; i <=12; i++){
    console.log("Cake",i);
}

// ******************************Q3*************************************

for(var i = 0; i <= 4; i++){
    console.log();
}

// ******************************Q4*************************************

for(var a = 1; a <= 100; a++){
    document.write(a,",")
}

// ******************************Q5*************************************

document.write("<br>")

for(var i = 100; i >= 1; i--){
    document.write(i,",")
}

// ******************************Q6*************************************

var arr = [12,45,68,312,85]

document.write("<br>",arr)

// ******************************Q7*************************************

var flag = (false,true)

document.write("<br>",flag)

// ******************************Q8*************************************

var animal = ["dog","Elephant","Tiger","Lion"]

for(var i = 0; i <animal.length;i++){
    document.write("<br>",i,animal[i])
}

// ******************************Q9*************************************

for(var i = 1; i <= 10; i++){
    console.log(i);
}

for(var a = 0; a <= 2; a++){
    alert("Q9 is very difficult")
}

// ******************************Q10*************************************

// var firstName = prompt("Enter your first name")

// var lastName = prompt("Enter your Last name")

// var arr1 = firstName + lastName

// var username = prompt("Enter user name")

// if (arr1 === username) {
//     alert("Enter")
// }
// else{
//     alert("Please write correct user name")
// }

// ******************************Q11*************************************

var list = ["Karachi","Lahore","Quetta"]

var userInput = prompt("Enter your live")

for(var i = 0; i <list.length; i++){
    if (userInput === list[i]) {
        alert("Match Found");
        matchFound = true; break;
    }else{
        alert("Match Not Found")
        matchnotfound = true;  break;
    }
}

// ******************************Q12*************************************

document.write("<br>")

var firstArr = ["a","b","c","d","e","f"]

var secondArr = [1,2,3,4,5,6]

for(var i = 0; i < firstArr.length;i++){
    for(var a = 0; a < secondArr.length;a++)
    document.write("<br>",firstArr[i],secondArr[a])
}