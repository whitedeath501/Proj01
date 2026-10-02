const jogadores = document.querySelectorAll(".jogador");


jogadores.forEach(function(jogador) {

    jogador.addEventListener("click", function() {

        const nome = jogador.querySelector("h3").textContent;
        const posicao = jogador.querySelector("p").textContent;

        alert(nome + " - " + posicao);

    });

});