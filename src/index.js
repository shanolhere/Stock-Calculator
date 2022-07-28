const costPrice = document.querySelector(".costprice");
const sellingPrice = document.querySelector(".sellingprice");
const quantity = document.querySelector(".quantity");

const checkBtn = document.querySelector(".check");

const resultImage = document.querySelector(".result img");
const message = document.querySelector(".message");

checkBtn.addEventListener("click", () => {
  let profit = (sellingPrice.value - costPrice.value) * quantity.value;
  let loss = (costPrice.value - sellingPrice.value) * quantity.value;
  console.log(costPrice.value, sellingPrice.value, quantity.value);
  let profitPercent = (
    ((sellingPrice.value - costPrice.value) * 100) /
    costPrice.value
  ).toFixed(2);
  let lossPercent = (
    ((costPrice.value - sellingPrice.value) * 100) /
    costPrice.value
  ).toFixed(2);

  if (costPrice.value < sellingPrice.value) {
    resultImage.src = "assets/happy.gif";
    resultImage.style.display = "block";
    message.innerHTML = `WOW!! You're profit % is ${profitPercent} % and <br/> Your total profit is ₹ ${profit}/-.  BUSSINESS MINDED ;)`;
  } else if (costPrice.value > sellingPrice.value) {
    resultImage.src = "assets/sad.gif";
    resultImage.style.display = "block";
    message.innerHTML = `OHHH! You're Loss % is ${lossPercent} % and <br/> Your total loss is ₹ ${loss}/-.  WE'LL LEVEL UP BRO ;-;`;
  } else if (costPrice.value === sellingPrice.value) {
    resultImage.style.display = "block";
    message.innerHTML = `No LOSS nor GAIN ;)`;
  }
});
