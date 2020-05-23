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
   //acessar as vagas da tela
   let hosp1 = parseInt(document.getElementById("hosp1").value)
   let hosp2 = parseInt(document.getElementById("hosp2").value)

   //instancia dois hospitais e preenche as vagas
   let h1 = new Hospital(hosp1,0,"N",[])
   let h2 = new Hospital(hosp2,0,"C",[])

   console.log(h1)
   console.log(h2)
}