function calculate(value) {
  let currency = document.getElementById("Valuta");
  if (currency.value === "KZT") {
    let kztToUsd = (value / 431).toFixed(2);
    let kztToEur = (value / 509).toFixed(2);
    document.getElementById("Dollar").innerHTML = kztToUsd.toString();
    document.getElementById("Euro").innerHTML = kztToEur.toString();
    document.getElementById("Tenge").innerHTML = "-";
  }else if(currency.value === "USD"){
    let usdToKzt = (value * 429).toFixed(2);
    let usdToEur = (value * 429 / 509).toFixed(2);
    document.getElementById("Tenge").innerHTML = usdToKzt.toString();
    document.getElementById("Euro").innerHTML = usdToEur.toString();
    document.getElementById("Dollar").innerHTML = "-";
  }else if(currency.value === "EUR"){
    let eurToKzt = (value * 507).toFixed(2);
    let eurToUsd = (value *507 / 431).toFixed(2);
    document.getElementById("Tenge").innerHTML = eurToKzt.toString();
    document.getElementById("Dollar").innerHTML = eurToUsd.toString();
    document.getElementById("Euro").innerHTML = "-";
  }
}
