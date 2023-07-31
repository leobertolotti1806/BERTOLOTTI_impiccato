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
let menu = document.getElementById("menu");
let errWarning = document.querySelector("body > #circle");

let inserite = [];

let p = parole[Math.floor(Math.random() * 20)];
let errori = 0, tentativi = 0;

for (let i = 0; i < p.length; i++)
    parola.innerHTML += "<div class='card'>_</div>";

console.log("parola => " + p);

function showMenu(msg) {
    lett.disabled = true;
    lett.nextElementSibling.disabled = true;

    menu.querySelector("b").innerHTML = msg;

    menu.style.top = "8vh";

    menu.querySelector("#play").onclick = () => {
        if (confirm("Rigiocare?")) {
            lett.disabled = false;
            lett.nextElementSibling.disabled = false;

            menu.style.top = "";

            p = parole[Math.floor(Math.random() * 20)];

            bandite.innerHTML = "";
            parola.innerHTML = "";

            for (let i = 0; i < p.length; i++)
                parola.innerHTML += "<div class='card'>_</div>";

            for (const i of impiccato)
                i.style.opacity = "";

            tentativi = 0;
            errori = 0;

            inserite = [];

            tentativiDiv.className = "";
            erroriDiv.className = "";

            tentativiDiv.textContent = "0 Tentativi";
            erroriDiv.textContent = "0 Errori";

            erroriDiv.nextElementSibling.style.width = "";
        }
    };

    menu.querySelector("#close").onclick = () => {
        if (confirm("Vuoi uscire?"))
            close();
    };
}

function reset(time) {
    setTimeout(() => {
        errWarning.style.animation = "";
        lett.disabled = false;
        lett.focus();
        lett.nextElementSibling.disabled = false;
    }, time);
}

document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();

    let l = lett.value.toLowerCase();
    lett.value = "";

    if (l != "") {
        if (!inserite.includes(l)) {
            /* nuova lettera */
            inserite.push(l);
            tentativi++;

            lett.disabled = true;
            lett.nextElementSibling.disabled = true;

            if (p.includes(l)) {
                /* c'è nella parola */
                let cont = 0;
                for (let i = 0; i < p.length; i++) {
                    if (p[i] == l) {
                        parola.children[i].textContent = l.toUpperCase();
                        cont++;
                    } else if (parola.children[i].textContent != "_") {
                        cont++;
                    }
                }

                if (cont != p.length)
                    reset(700);
                else showMenu("Hai vinto con " + tentativi + " tentativi!");

            } else {
                /* non c'è nella parola */
                bandite.innerHTML += "<div class='card'>" + l + "</div>";

                errWarning.style.animation = "pass 2.5s ease";

                reset(2300);

                impiccato[errori].style.opacity = "1";

                errori++;

                erroriDiv.classList.add("animation");
                erroriDiv.nextElementSibling.style.width = ((errori / 8) * 100) + "%";

                if (errori > 5)
                    erroriDiv.classList.add("pulse");

                setTimeout(() => { erroriDiv.textContent = errori + " Errori"; }, 500);

                setTimeout(() => { erroriDiv.classList.remove("animation"); }, 1000);

                if (errori == 8)
                    showMenu("Hai perso con " + errori + " errori!<br>La parola era " + p);
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