class Hospital {
    constructor(vagas, ocupados, tipo, pacientes) {
        this.vagas = vagas;
        this.ocupados = ocupados;
        this.tipo = tipo;
        this.pacientes = pacientes;
    }
    adicionarPaciente(paciente){
        this.pacientes.push(paciente)
    }
    calcularPorcentagemLotacao(){
        let numVagas = this.vagas
        let numPacientes = this.pacientes.length
        return numPacientes*100/numVagas
    }
}

class Paciente {
    constructor(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
    }
}

var h1
var h2
function cadastrarHospital(){
   //acessar as vagas da tela
   let hosp1 = parseInt(document.getElementById("hosp1").value)
   let hosp2 = parseInt(document.getElementById("hosp2").value)

   //instancia dois hospitais e preenche as vagas
   h1 = new Hospital(hosp1,0,"N",[])
   h2 = new Hospital(hosp2,0,"C",[])

   console.log(h1)
   console.log(h2)
}

function adicionarPaciente(){
    let nome = document.getElementById("pac").value
    let sexo = document.querySelector("input[type=radio]:checked").value
    let p = new Paciente (nome, sexo)
    if (h1.calcularPorcentagemLotacao()<70){
        h1.adicionarPaciente(p)
    console.log("Cadastrado em h1")
    listaHosp1.innerHTML += `<div>${p.nome} | ${p.sexo}</div>`}
        else{
            h2.adicionarPaciente(p)
            console.log("Cadastrado em h2")
            listaHosp2.innerHTML += `<div>${p.nome} | ${p.sexo}</div>`
        }
    
}