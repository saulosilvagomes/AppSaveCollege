class Aluno{
   constructor(nome,altura,idade,sexo,sala,matematica){
    this.nome=nome;
    this.altura=altura;
    this.idade=idade;
    this.sexo=sexo;
    this.sala=sala;
    this.matematica=matematica;
   }
   criarLista(){
        var aluno1 = new Aluno("Saulo",1.83,40,"Masculino",12,9.5);
        var aluno2 = new Aluno("Vera",1.81,72,"Feminino",14,8);
        var aluno3 = new Aluno("Tatiana",1.71,38,"Feminino",20,9.5);
        var aluno4 = new Aluno("Maria",1.60,25,"Feminino",30,7.1);
        var aluno5 = new Aluno("Joao",1.95,34,"Masculino",13,4.2);
        this.lista_de_alunos = [aluno1,aluno2,aluno3,aluno4,aluno5];
   }
   exibirLista(){
        this.criarLista();
        for(var i=0;i < this.lista_de_alunos.length;i++){
            console.log(this.lista_de_alunos[i]);
        }
   }
   mostrarDesempenho(){
    this.criarLista();
    for(var i=0;i < this.lista_de_alunos.length;i++){
        if(this.lista_de_alunos[i].matematica>6.0){
            alert(this.lista_de_alunos[i].nome+" APROVADO");
        }else{
            alert(this.lista_de_alunos[i].nome+" REPROVADO");
        }
        
    }
    
   }
   calcularMedia(){
    this.criarLista();
    var soma = 0;
    var media = 0;
    for(var i=0;i < this.lista_de_alunos.length;i++){
        soma = soma + this.lista_de_alunos[i].matematica;
    }
    media = soma / this.lista_de_alunos.length;
    alert(media);
   }
}
//Criar os objetos Aluno
var aluno = new Aluno();
//Criar lista de alunos 
var lista_de_alunos = [];