var string = prompt("Enter palindrome name")

var len = string.length

var msg = "It is palindrome name"

for(var i = 0; i < len/2; i++){
    if (string[i] != string[len - 1 -i]) {
        msg = "It is not a Palindrome name"
    }
}
console.log(`${string}: ${msg}`);