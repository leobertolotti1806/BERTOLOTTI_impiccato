let owner = new URLSearchParams(window.location.search).get('n');

function check(e) {
    open(`./${e.target.id}.html?n=${owner}`, "_self");
}

if (owner !== null) {

    document.getElementById("index").onclick = check;
    document.getElementById("floor1").onclick = check;

} else open("./index.html", "_self");