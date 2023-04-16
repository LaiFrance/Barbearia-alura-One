function sorteia(n) {
  return Math.round(Math.random() * n);
}

var numeroPensado = sorteia(5);
var chute = prompt("Adivinhe um número entre 0 e 5:");

if (chute == numeroPensado) {
  alert("Parabéns! Você acertou!");
} else {
  alert("Você errou. O número pensado era " + numeroPensado + " e o seu chute foi " + chute + ". O número pensado era " + (chute > numeroPensado ? "menor" : "maior") + " que o seu chute.");
}

console.log("O número pensado foi " + numeroPensado);
console.log("O seu chute foi " + chute);
clear();