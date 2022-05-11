const toggleCategory = element => {
    let index;
    for (let i = 0; i < topCategories.length; i++) {
        if (element == topCategories[i]) {
            index = i;
            break;
        }
    }
    subCategories[index].classList.toggle("sub_category_open");
    arrowOnCategories[index].classList.toggle("dropdown_arrow_active");
}

const topCategories = document.querySelectorAll(".category");
const subCategories = document.querySelectorAll(".sub_category");
const arrowOnCategories = document.querySelectorAll(".dropdown_arrow");

subCategories.forEach(element => {
    element.style.display = "none";
});