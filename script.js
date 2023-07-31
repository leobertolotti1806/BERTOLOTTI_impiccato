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

let lett = document.getElementById("lettera");
let bandite = document.getElementById("bandite");
let parola = document.querySelector("#table > div.pl");
let impiccato = document.querySelectorAll("#table > div:first-child > div");
let tentativiDiv = document.getElementById("tentCount");
let erroriDiv = document.getElementById("errCount");

let inserite = [];

let p = parole[Math.floor(Math.random() * 20)];
let errori = 0, tentativi = 0;

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
            tentativi++;
            console.log(inserite);

            if (p.includes(l)) {
                /* c'è nella parola */
                for (let i = 0; i < p.length; i++)
                    if (p[i] == l)
                        parola.children[i].textContent = l.toUpperCase();

            } else {
                /* non c'è nella parola */
                bandite.innerHTML += "<div class='card'>" + l + "</div>";

                impiccato[errori].style.opacity = "1";

                errori++;

                erroriDiv.className = "animation";
                erroriDiv.nextElementSibling.style.width = ((errori / 8) * 100) + "%"

                setTimeout(() => {
                    erroriDiv.textContent = errori + " Errori";
                }, 500);

                setTimeout(() => {
                    erroriDiv.className = "";
                }, 1000);

                if (errori > 8) {
                    /* HAI PERSO */
                }
            }

            tentativiDiv.className = "animation";

            setTimeout(() => {
                tentativiDiv.textContent = tentativi + " Tentativi";
            }, 500);

            setTimeout(() => {
                tentativiDiv.className = "";
            }, 1000);

        } else alert("Lettera già inserita!");
    } else alert("Inserisci una lettera!");
});