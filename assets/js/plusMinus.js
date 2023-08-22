let minus = document.querySelector(".minus-button");
let counts = document.querySelector(".counts");
let plus = document.querySelector(".plus-button");

plus.addEventListener("click", function () {
    counts.textContent++;
})
minus.addEventListener("click", function () {
    if (counts.textContent > 1) {
        counts.textContent--;
    }
})