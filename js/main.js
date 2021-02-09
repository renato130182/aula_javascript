var nome = "Renato Ferreira Soares";
var n1 = 10;
var n2 = 10;
var frase = "Aprendendo JavaScript com Rafael Galleani";
alert("Criando um aleta");
console.log("Utilizando o console, isso ajuda a debugar");
console.log(n1 + n2);
console.log(n1 * n2);

var lista = ["maca", "pera", "laranja"];
console.log(lista[1]);
lista.push("uva"); // Adiciona
lista.pop("pera"); // remove
lista.length; // tamanho da lista
lista.reverse(); // Mostra a lista invertida
console.log(lista);
lista.join("-"); // adiciona a string na separação da lista
var fruta = { nome: "Maça", cor: "Vermelha" };// dicionário de dados ou JSON

if (n1 > 11) {
    Alert("Maior que 11");
} else {
    alert("Menor ou igual a 11");
}
var idade = prompt("Qual a sua idade");
alert("Idade digitada: " + idade);

var repete = 0;
while (repete <= 10) {
    console.log(repete);
    repete++;
}

for (contador = 0; contador < 10; contador++) {
    console.log(contador);
}

var d = new Date();
console.log(d.getTime());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());

function somar(n1, n2) {
    console.log("Chamou somar")
    return n1 + n2;
}

alert(somar(n1, n2));

function clicar() {
    console.log("Entrou em clicar");
    alert("Obrigado por clicar");
    document.getElementById("agrad").innerHTML = "<b>Obrigado por clicar</b>";
}

function mudarPagina() {
    window.open("https://web.digitalinnovation.one/home"); // nova aba
    //outra forma
    window.location.href = "https://web.digitalinnovation.one/home"; // mesma aba
}

function mouseAction(elemento) {
    console.log("mouse action");
    // document.getElementById("mouse").innerHTML = "Passou o Mouse";
    elemento.innerHTML = "Passou o Mouse";
}

function voltar(elemento) {
    //document.getElementById("mouse").innerHTML = "Passe o Mouse...";
    elemento.innerHTML = "Passe o Mouse...";
}

function load() {
    alert("Carregando...");
}

function optSelect(elemento) {
    console.log(elemento.value);
}