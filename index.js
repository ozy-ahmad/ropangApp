// show price each ropang
let valueRopangManis = document.querySelector("#ropang-manis").value;
document.querySelector(
  "#ropangManisPrice"
).innerText = `Rp.${valueRopangManis}`;
let valueRopangAsin = document.querySelector("#ropang-asin").value;
document.querySelector("#ropangAsinPrice").innerText = `Rp.${valueRopangAsin}`;

// ropang menu
const ropangManis = document.querySelector("#ropang-manis");
ropangManis.onchange = function () {
  let checkbox = document.querySelectorAll(".asin");
  checkbox.forEach((item) => {
    item.checked = false;
    item.disabled = true;
  });

  checkbox = document.querySelectorAll(".manis");
  checkbox.forEach((item) => {
    item.disabled = false;
  });
  calculate();
};
const ropangAsin = document.querySelector("#ropang-asin");
ropangAsin.onchange = function () {
  let checkbox = document.querySelectorAll(".manis");
  checkbox.forEach((item) => {
    item.checked = false;
    item.disabled = true;
  });

  checkbox = document.querySelectorAll(".asin");
  checkbox.forEach((item) => {
    item.disabled = false;
  });
  calculate();
};

//ropang size
const ropangSizeKilo = document.querySelectorAll('[name="ropang-size"]');
ropangSizeKilo.forEach((item) => {
  item.onchange = function () {
    // alert(this.value);
    calculate();
  };
});

// ropang toping
const ropangTopingMilo = document.querySelector("#milo");
ropangTopingMilo.onchange = function () {
  // alert(this.value);
  calculate();
};
const ropangTopingMeses = document.querySelector("#meses");
ropangTopingMeses.onchange = function () {
  // alert(this.value);
  calculate();
};
const ropangTopingChocochip = document.querySelector("#chocochip");
ropangTopingChocochip.onchange = function () {
  // alert(this.value);
  calculate();
};
const ropangTopingKokoKrunch = document.querySelector("#koko-krunch");
ropangTopingKokoKrunch.onchange = function () {
  // alert(this.value);
  calculate();
};
const ropangTopingMozarela = document.querySelector("#mozarela");
ropangTopingMozarela.onchange = function () {
  // alert(this.value);
  calculate();
};
const ropangTopingCheddar = document.querySelector("#cheddar");
ropangTopingCheddar.onchange = function () {
  // alert(this.value);
  calculate();
};
const ropangTopingGreenTea = document.querySelector("#green-tea");
ropangTopingGreenTea.onchange = function () {
  //alert(this.value);
  calculate();
};
const ropangTopingboba = document.querySelector("#boba");
ropangTopingboba.onchange = function () {
  //alert(this.value);
  calculate();
};
const ropangTopingTuna = document.querySelector("#tuna");
ropangTopingTuna.onchange = function () {
  // alert(this.value);
  calculate();
};
const ropangTopingAyam = document.querySelector("#ayam");
ropangTopingAyam.onchange = function () {
  //alert(this.value);
  calculate();
};
const ropangTopingPepperoni = document.querySelector("#pepperoni");
ropangTopingPepperoni.onchange = function () {
  //alert(this.value);
  calculate();
};
const ropangTopingKornet = document.querySelector("#kornet");
ropangTopingKornet.onchange = function () {
  //alert(this.value);
  calculate();
};

const calculate = () => {
  let total = 0;
  let ropangMenuPrice = document.querySelector('[name = "ropang"]:checked')
    .value;
  total += parseInt(ropangMenuPrice);
  let ropangSizePrice = document.querySelector("[name=ropang-size]:checked")
    .value;
  total += parseInt(ropangSizePrice);
  let ropangToppingPrice = document.querySelectorAll("[name=toping]:checked");
  ropangToppingPrice.forEach((item) => {
    console.log(item);
    item.value;
    total += parseInt(item.value);
  });
  document.querySelector("#displayPrice").innerText = total;
};
