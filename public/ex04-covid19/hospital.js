class Hospital {
    constructor(vagas, ocupados, tipo, pacientes) {
        this.vagas = vagas;
        this.ocupados = ocupados;
        this.tipo = tipo;
        this.pacientes = pacientes;
    }
}

class Paciente {
    constructor(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
    }
}


function cadastrarHospital(){
   //acessar as vagas
   let hosp1 = parseInt(document.getElementById("hosp1").value)
   let hosp2 = parseInt(document.getElementById("hosp2").value)
   console.log(hosp1)
   console.log(hosp2)
}