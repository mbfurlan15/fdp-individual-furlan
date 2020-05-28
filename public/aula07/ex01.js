class Numero{
    constructor (num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    vermaior(){
        if (this.num1>this.num2){
        return "o número " + this.num1+ " é o Maior"
        }else{if((this.num1==this.num2)){
        return "Números são iguais"
        }else{
        return "o número " + this.num2+ " é o Maior"}}}
        vermenor(){
            if (this.num1<this.num2){
            return "o número " + this.num1+ " é o Menor"
            }else{if((this.num1==this.num2)){
            return "Números são iguais"
            }else{
            return "o número " + this.num2+ " é o Menor"}}}
       
    
}


function maior(){
    var z = new Numero (parseFloat(document.getElementById("n01").value),parseFloat(document.getElementById("n02").value))
    window.alert(z.vermaior())
}
function menor(){
    var z = new Numero (parseFloat(document.getElementById("n01").value),parseFloat(document.getElementById("n02").value))
    window.alert(z.vermenor())
}