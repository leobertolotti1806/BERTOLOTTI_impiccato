let owner = document.querySelector("input");

let n = new URLSearchParams(window.location.search).get('n');

if (n !== null) {
    owner.classList.add("exist");
    owner.value = n;
}

owner.addEventListener("input", () => {
    if (owner.value != "")
        owner.classList.add("exist");
    else owner.classList.remove("exist");
});

function check(e) {
    if (owner.value != "")
        open(`./${e.target.id}.html?n=${owner.value}`, "_self");
    else alert("Inserisci un proprietario");
}

document.getElementById("floor1").onclick = check;
document.getElementById("floor2").onclick = check;