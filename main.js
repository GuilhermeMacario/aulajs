function Carro (a,b,c,d,e){
    this.cor = a;
    this.ano = b; 
    this.modelo = c;
    this.popular = d;
    this.valor = e;
    

}
const g = new Carro ('Vermelho',2001,'hb20',false,20000);
const h = new Carro ('azul',3101,'gol',true,50000);

console.log (g);
console.log (h);
