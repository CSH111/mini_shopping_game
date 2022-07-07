"use strict";

const clothesBtns = document.querySelectorAll(".clothes");
const items = document.querySelector(".items").children;

clothesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    Array.from(items).forEach((item) => {
      item.classList.add("hidden");
    });
    if (btn.classList.contains("t-shirtsBtn")) {
      Array.from(items).forEach((item) => {
        if (item.classList.contains("t-shirts")) {
          item.classList.remove("hidden");
        }
      });
    } else if (btn.classList.contains("pantsBtn")) {
      Array.from(items).forEach((item) => {
        if (item.classList.contains("pants")) {
          item.classList.remove("hidden");
        }
      });
    } else if (btn.classList.contains("skirtsBtn")) {
      Array.from(items).forEach((item) => {
        if (item.classList.contains("skirts")) {
          item.classList.remove("hidden");
        }
      });
    }
  });
});

const colorBtns = document.querySelectorAll(".color");
colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    Array.from(items).forEach((item) => {
      item.classList.add("hidden");
    });
    if (btn.classList.contains("blueBtn")) {
      Array.from(items).forEach((item) => {
        if (item.classList.contains("blue")) {
          item.classList.remove("hidden");
        }
      });
    } else if (btn.classList.contains("yellowBtn")) {
      Array.from(items).forEach((item) => {
        if (item.classList.contains("yellow")) {
          item.classList.remove("hidden");
        }
      });
    } else if (btn.classList.contains("pinkBtn")) {
      Array.from(items).forEach((item) => {
        if (item.classList.contains("pink")) {
          item.classList.remove("hidden");
        }
      });
    }
  });
});

const homeBtn = document.querySelector("header button");
homeBtn.addEventListener("click", () => {
  Array.from(items).forEach((item) => {
    item.classList.remove("hidden");
  });
});
