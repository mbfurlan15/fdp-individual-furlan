class BTUS{
    constructor (area,pessoas,eletro){
        this.area=area;
        this.pessoas=pessoas;
        this.eletro=eletro;
    }
    calc(){
        return (this.area*600+(this.pessoas-1)*600+this.eletro*600).toLocaleString('de-DE')
    }}

function calcular(){
    let btu = new BTUS (
        parseFloat(document.getElementById("num1").value),
        parseFloat(document.getElementById("num2").value),
        parseFloat(document.getElementById("num3").value))
    window.alert(btu.calc()+ " BTU")
}