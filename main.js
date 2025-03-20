const array = [2,3,4,5,6,]; //criando array
array.forEach (item=>{ // para cada item do array faça tal coisa
    if (item % 2 === 0) {
        console.log(`O numero ${item} é par`); // faça isso...
    }
    else{//se não for...
        console.log(`O numero ${item} é impar`); // faça isso...
    }


});