const abas = document.querySelectorAll(".aba");
console.log(abas);



// - passo 2 - dar um jeito de indentificar o clique no elemento da aba 
abas.forEach(aba=>{

    aba.addEventListener("click", function(){
        
        if(aba.classList.contains("selecionada")){
            return
        }
    
// -passo 3 -o usuarios clicar desmarcar a aba selecionada
     const abaSelecionada = document.querySelector(".aba.selecionada");
    //  console.log(abaSelecionada);

     abaSelecionada.classList.remove("selecionada");
     aba.classList.add("selecionada");
     
    const infromacoesSelecionada = document.querySelector(".informacoes.selecionada");
    console.log(infromacoesSelecionada)

    infromacoesSelecionada.classList.remove("selecionada");
    infromacoes.classList.add("selecionada");



    })



})