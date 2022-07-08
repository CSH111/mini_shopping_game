"use strict";
function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

loadItems() //
  .then((items) => {
    displayItems(items);
    setEventListener();
  });

function displayItems(items) {
  const ul = document.querySelector(".items");
  ul.innerHTML = createItemsHTML(items);
}

function createItemsHTML(items) {
  return items
    .map(
      (item) =>
        `<li class="item ${item.type} ${item.color}">
        <img src="${item.image}" alt="" />
        <div>${item.gender}, ${item.size}</div>
      </li>
      `
    )
    .join("");
}

function setEventListener() {
  const btns = document.querySelector(".indexBtn");
  const logo = document.querySelector(".logo");
  btns.addEventListener("click", (event) => onIndexBtnClick(event));
  logo.addEventListener("click", showAll);
}
function showAll() {
  const lis = document.querySelectorAll(".item");
  lis.forEach((li) => li.classList.remove("hidden"));
}

function onIndexBtnClick(event) {
  const value = event.target.dataset.value;
  const lis = document.querySelectorAll(".item");
  if (!value) {
    return;
  }
  showSortedItems(lis, value);
}
function showSortedItems(lis, value) {
  lis.forEach((li) => {
    const classList = li.classList;
    classList.add("hidden");
    if (classList.contains(value)) {
      classList.remove("hidden");
    }
  });
}
