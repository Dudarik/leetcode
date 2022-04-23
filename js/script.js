function hide() {
  let event = new CustomEvent("hide", { cancelable: true });

  if (!rabbit.dispatchEvent(event)) {
    console.log("Действие отменено");
  } else {
    rabbit.hidden = true;
  }
}

rabbit.addEventListener("hide", (ev) => {
  if (confirm("Отменить ??")) {
    ev.preventDefault();
  }
});

document.querySelector(".togglemenu").addEventListener("click", (ev) => {
  ev.target.closest("div").classList.toggle("togglemenu_active");
});

var generateParenthesis = function (n) {
  const result = [];

  const backtrack = (result, p, open, close, n) => {
    if (p.length === n * 2) {
      result.push(p);
      return;
    }

    if (open < n) {
      backtrack(result, p + "(", open + 1, close, n);
    }

    if (close < open) {
      backtrack(result, p + ")", open, close + 1, n);
    }
  };
  backtrack(result, "", 0, 0, n);
  return result;
};
