let lett = document.getElementById("lettera");
let bandite = document.getElementById("bandite");
let parola = document.querySelector("#table > div.pl");
let inserite = [];

let parole = [
    "albero",
    "vento",
    "casa",
    "giorno",
    "notte",
    "amore",
    "fuoco",
    "libro",
    "stella",
    "acqua",
    "riso",
    "amico",
    "felice",
    "gatto",
    "maremma",
    "miele",
    "quadro",
    "spiaggia",
    "tigre",
    "uomo"
];

let p = parole[Math.floor(Math.random() * 20)];

for (let i = 0; i < p.length; i++)
    parola.innerHTML += "<div class='card'>_</div>";

console.log("parola => " + p);

document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();

    let l = lett.value.toLowerCase();

    if (l != "") {
        if (!inserite.includes(l)) {
            /* nuova lettera */
            inserite.push(l);
            console.log(inserite);

            if (p.includes(l)) {
                /* c'è nella parola */
                for (let i = 0; i < p.length; i++)
                    if (p[i] == l)
                        parola.children[i].textContent = l;
                
            } else {
                /* non c'è nella parola */
                bandite.innerHTML += "<div class='card'>" + l + "</div>";
            }

        } else alert("Lettera già inserita!");
    } else alert("Inserisci una lettera!");
});