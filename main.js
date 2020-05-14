"use strict";

const inputTodo = document.querySelector(".inputbox");
const listbox = document.querySelector(".listbox");
const list = document.querySelectorAll(".listbox li");
const listitems = listbox.children;
const listcnt = document.querySelector(".cntleft span");
function listAppend() {
  if (window.event.keyCode == 13 && inputTodo.value != "") {
    let listplus = document.createElement("li");
    listplus.innerHTML =
      '<input type="checkbox" onclick="checkClass(this)"/><div></div><button class="delbtn" onclick="remove(this)"></button>';
    listplus.childNodes[1].innerText = inputTodo.value;
    listbox.appendChild(listplus);
    listcnt.innerText = listbox.childElementCount;
    inputTodo.value = "";
  }
}

const toggleAll = document.querySelector(".toggle_all");
const toggleicon = document.querySelector(".toggle_label i");
toggleAll.addEventListener("click", function (e) {
  if (toggleAll.checked) {
    toggleicon.style.color = "black";
    for (let v of listitems) {
      v.firstElementChild.checked = true;
      v.children[1].style.textDecoration = "line-through";
      v.classList.add("completed");
    }
  } else {
    toggleicon.style.removeProperty("color");
    for (let v of listitems) {
      v.firstElementChild.checked = false;
      v.children[1].style.removeProperty("text-decoration");
      v.classList.remove("completed");
    }
  }
});

function remove(v) {
  v.parentNode.remove();
  listcnt.innerText = listbox.childElementCount;
}

function clearChecked() {
  const checkitem = document.querySelectorAll(".listbox li input");
  checkitem.forEach((v) => {
    if (v.checked) {
      v.parentElement.remove();
    }
  });
  listcnt.innerText = listbox.childElementCount;
}

function checkClass(v) {
  v.parentElement.classList.toggle("completed");
  if (v.parentElement.classList.contains("completed")) {
    v.nextElementSibling.style.textDecoration = "line-through";
  } else {
    v.nextElementSibling.style.removeProperty("text-decoration");
  }
}

function viewAll() {
  const activelist = document.querySelector(".listbox");
  const activeitem = activelist.children;
  for (let v of activeitem) {
    if ((v.style.display = "none")) {
      v.style.removeProperty("display");
    }
  }
}

function viewActive() {
  viewAll();
  const activelist = document.querySelector(".listbox");
  const activeitem = activelist.children;
  for (let v of activeitem) {
    if (v.classList.contains("completed")) {
      v.style.display = "none";
    }
  }
}

function viewCompleted() {
  viewAll();
  const activelist = document.querySelector(".listbox");
  const activeitem = activelist.children;
  for (let v of activeitem) {
    if (!v.classList.contains("completed")) {
      v.style.display = "none";
    }
  }
}
