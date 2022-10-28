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
const sugar = document.querySelector("#sugar") as HTMLInputElement;
const hossz = document.querySelector("#hossz") as HTMLInputElement;

szamitGomb.addEventListener("click", ()=>{
    let sugarNum:number = Number(sugar.value);
    let hosszNum:number = Number(hossz.value);
    let felszin = szamolFelszin(sugarNum, hosszNum);
    eredmeny.textContent = "Felszín: " + String(felszin);
    sugar.value = " ";
    hossz.value = " ";
});

function szamolFelszin(sugar:number, hossz:number):number{
    let felszin = 2*Math.PI*sugar*(sugar + hossz);
    return felszin;
}