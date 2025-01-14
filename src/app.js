/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["Un dragón", "Mi profesor", "Un robot", "Un ladrón"];
  let action = ["robó", "destruyó", "perdió", "quemó"];
  let what = ["mi tarea", "mi laptop", "mi celular", "mis zapatos"];
  let when = [
    "antes de llegar a clase",
    "mientras dormía",
    "cuando iba al supermercado",
    "durante mi desayuno"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  document.querySelector("#excusa").innerHTML =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];
};
