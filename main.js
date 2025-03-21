
const array = []

function Alunos (a,b){
    this.nome = a;
    this.nota = b;

}
const g = new Alunos ('Maria',20);
const h = new Alunos ('Macario',31);

array.push(g)
console.log(array)
array.push(h)
console.log(array)

