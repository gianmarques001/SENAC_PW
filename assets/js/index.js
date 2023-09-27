const nome = document.querySelector("#nome");
const outputNome = document.querySelector("#outNome");

const livroPercyJackson = document.querySelector("#percyjackson");
const livroHarryPotter = document.querySelector("#harrypotter");
const livroHobbit = document.querySelector("#hobbit");

const outputLivro = document.querySelector("#outLivro");


nome.addEventListener("input", function(){
    outputNome.innerHTML = `Nome: ${nome.value}`
})


livroPercyJackson.addEventListener("change", function(){
    outputLivro.innerHTML = `Livro Selecionado: Percy Jackson e o Ladrão de Raios`
});

livroHarryPotter.addEventListener("change", function(){
    outputLivro.innerHTML = `Livro Selecionado: Harry Potter e a Pedra Filosofal`
});

livroHobbit.addEventListener("change", function(){
    outputLivro.innerHTML = `Livro Selecionado: O Hobbit`
});
