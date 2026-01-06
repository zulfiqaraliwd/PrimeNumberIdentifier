function NumberPrime() {
    var prime = Number(document.getElementById("inputNum").value);
 var a = document.getElementById("show")
 if (prime == ""){
    alert ("plz enter any number")
 }
    else if (prime <= 1) {
      a.innerHTML = "It is not prime number"
       return;
    }

    for (var i = 2; i < prime; i++) {
        if (prime % i === 0) {
              a.innerHTML = "It is not prime number"
            return;
        }
    }
   a.innerHTML = "It is prime number"
}
