//rice , beaf , oil ,mateerial
function biryani(rice : number , material : number){
    console.log(rice+ 2 + 1 + material)
}
biryani(2 , 1) 
biryani(1 , 2) 


//Egg , butter , salt
function halffry (egg = 1, butter = 1){
    let coocked = 0.5 + egg  + butter
    return coocked
}
let table1=halffry(1,1)
console.log(table1)
table1