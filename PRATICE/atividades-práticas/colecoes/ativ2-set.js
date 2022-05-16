const novoArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valorUnico(arr){
    const newSet = new Set(arr);

    return [...newSet];
}
console.log(valorUnico(novoArray));