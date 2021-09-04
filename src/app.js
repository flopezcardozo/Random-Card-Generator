/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let palos = ["♥", "♦", "♣", "♠"];

  let valor = randomValores();
  let palo = randomPalos();

  let nroAleatorio = valores[valor];
  let paloAleatorio = palos[palo];

  function randomValores() {
    return Math.floor(Math.random() * 13);
  }
  function randomPalos() {
    return Math.floor(Math.random() * 4);
  }
  let paloArriba = document.querySelector(".arriba");
  let nroCentro = document.querySelector(".centro");
  let paloAbajo = document.querySelector(".abajo");

  paloArriba.innerHTML = paloAleatorio;
  paloAbajo.innerHTML = paloAleatorio;
  nroCentro.innerHTML = nroAleatorio;

  paloArriba.innerHTML == "♥" || paloArriba.innerHTML == "♦"
    ? (paloArriba.style.color = "Red")
    : "Black";

  paloAbajo.innerHTML == "♥" || paloAbajo.innerHTML == "♦"
    ? (paloAbajo.style.color = "Red")
    : "Black";
  paloAbajo.innerHTML == "♥" || paloArriba.innerHTML == "♦"
    ? (nroCentro.style.color = "Red")
    : "Black";

  function refreshPage() {
    window.location.reload();
  }
};
