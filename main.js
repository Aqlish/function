//rice , beaf , oil ,mateerial
function biryani(rice, material) {
    console.log(rice + 2 + 1 + material);
}
biryani(2, 1);
biryani(1, 2);
//Egg , butter , salt
function halffry(egg, butter) {
    if (egg === void 0) { egg = 1; }
    if (butter === void 0) { butter = 1; }
    var coocked = 0.5 + egg + butter;
    return coocked;
}
var table1 = halffry(1, 1);
console.log(table1);
table1;
