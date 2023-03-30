const items = Array.from(document.querySelectorAll(".item"));
const likes = Array.from(document.querySelectorAll(".like"));
const fill_hearts = Array.from(document.querySelectorAll(".fill"));
const prices = Array.from(document.querySelectorAll(".price"));
const unfill_hearts = Array.from(document.querySelectorAll(".unfill"));

const minus = Array.from(document.querySelectorAll(".minus"));
const qte = Array.from(document.querySelectorAll(".qte"));
const plus = Array.from(document.querySelectorAll(".plus"));

const deletee = Array.from(document.querySelectorAll(".delete"));

let Arr_qte = [];
let Arr_price = [];

prices.forEach((item, i) => {
  Arr_qte[i] = 1;
  Arr_price[i] = item.innerHTML;
});

function updateTotal() {
  let total = 0;
  for (let i in Arr_price) total = total + Arr_price[i] * Arr_qte[i];
  document.getElementById("total").textContent = total + "  ";
}
updateTotal();

// add/remove to/from favorit Items

likes.forEach((like, i) => {
  like.addEventListener("click", () => {
    if (fill_hearts[i].style.display == "none") {
      unfill_hearts[i].style.display = "none";
      fill_hearts[i].style.display = "list-item";
    } else {
      fill_hearts[i].style.display = "none";
      unfill_hearts[i].style.display = "list-item";
    }
  });
});

//delete Item

deletee.forEach((item, i) => {
  item.addEventListener("click", () => {
    items[i].style.display = "none";
    Arr_qte[i] = 0;
    updateTotal();
  });
});

minus.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (qte[i].innerHTML >= 2) {
      qte[i].innerHTML = qte[i].innerHTML - 1;
      Arr_qte[i] = Arr_qte[i] - 1;
      updateTotal();
    }
  });
});

plus.forEach((item, i) => {
  item.addEventListener("click", () => {
    qte[i].innerHTML = Arr_qte[i] + 1;
    Arr_qte[i] = Arr_qte[i] + 1;
    updateTotal();
  });
});
