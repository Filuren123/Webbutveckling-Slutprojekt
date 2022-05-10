const itemPrices = document.querySelectorAll(".styckpriset_sec");
const sectionPrices = document.querySelectorAll(".sec_priset_pris");
const antalButtons = document.querySelectorAll(".antal_things_thing input");

const changeTotal = () => {
    const totalShow = document.querySelector("#totalAmmount");
    let total = 0;

    for (let i = 0; i < antalButtons.length; i++) {
        total += itemPrices[i].dataset.pricethingy * antalButtons[i].value;
    }

    totalShow.textContent = total.toFixed(2) + " kr";
}

const changeMiniTotal = element => {
    let index = 0;

    for (let i = 0; i < antalButtons.length; i++) {
        if (antalButtons[i] == element) {
            index = i;
            break;
        }
    }

    let newPrice = itemPrices[index].dataset.pricethingy * antalButtons[index].value;
    newPrice = newPrice.toFixed(2);
    changeTotal();

    sectionPrices[index].textContent = newPrice + " kr"
}

antalButtons.forEach(element => {
    changeMiniTotal(element);
});