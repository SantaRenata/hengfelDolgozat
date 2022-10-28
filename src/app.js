/*
* File: app.ts
* Author: Sánta Renáta Diána
* Copyright: 2022, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2022-10-28
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/
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
