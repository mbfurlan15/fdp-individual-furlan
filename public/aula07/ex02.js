class Camisetas{
    constructor (p,m,g){
        this.p=p;
        this.m=m;
        this.g=g;
    }
    calc(){
        return (this.p*10+this.m*12+this.g*15)
    }}

function calcular(){
    let ped = new Camisetas (
        parseFloat(document.getElementById("num1").value),
        parseFloat(document.getElementById("num2").value),
        parseFloat(document.getElementById("num3").value))
    console.log (ped.calc())
    window.alert("O seu pedido custará "+ped.calc())
}