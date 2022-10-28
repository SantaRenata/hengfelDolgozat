const szamitGomb = document.querySelector("#szamitGomb");
const eredmeny = document.querySelector("#eredmeny");
const sugar = document.querySelector("#sugar");
const hossz = document.querySelector("#hossz");
szamitGomb.addEventListener("click", () => {
    let sugarNum = Number(sugar.value);
    let hosszNum = Number(hossz.value);
    let felszin = szamolFelszin(sugarNum, hosszNum);
    eredmeny.textContent = "Felszín: " + String(felszin);
    sugar.value = " ";
    hossz.value = " ";
});
function szamolFelszin(sugar, hossz) {
    let felszin = 2 * Math.PI * sugar * (sugar + hossz);
    return felszin;
}
