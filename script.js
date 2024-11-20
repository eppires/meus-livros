document.addEventListener('DOMContentLoaded', () => {
    // Alternar modo noturno
    const modoNoturnoBtn = document.getElementById('modo-noturno');
    modoNoturnoBtn.addEventListener('click', () => {
        document.body.classList.toggle('modo-noturno');
    });

    // Função para abrir e fechar a página flutuante
    const detalhesBtns = document.querySelectorAll('.detalhes-btn');
    const paginaFlutuante = document.getElementById('pagina-flutuante');
    const fecharDetalhesBtn = document.getElementById('fechar-detalhes');
    const detalhesConteudo = document.getElementById('detalhes-conteudo');

    // Exemplo de detalhes para os livros
    const detalhesLivros = [
        {
            titulo: "PACHINKO",
            autor: "Min Jin Lee",
            sinopse: "Sinopse: A história de uma família de imigrantes coreanos no Japão ao longo de várias gerações, abordando temas como identidade, amor, sacrifício e a luta para sobreviver em uma sociedade marcada pelo preconceito e pela discriminação.",
            data: "Data de publicação: 2017",
            frase: "A vida era a luta. A vida era a batalha."
        },
        {
            titulo: "A CASA DOS ESPÍRITOS", 
            autor: "Isabel Allende",
            sinopse: "Sinopse: A saga de uma família chilena, desde o início do século XX até os anos de ditadura militar. A obra mistura realismo mágico com questões políticas e sociais, explorando a força das mulheres e o peso da história.",
            data: "Data de publicação: 1982",
            frase: "Ela se sentiu bem, como se finalmente fosse possível para ela tomar as rédeas de sua vida."
        },
        {
            titulo: "AMOR DE REDENÇÃO",
            autor: "Francine Rivers",
            sinopse: "Sinopse: O romance segue a história de uma mulher chamada Angel, que após ser resgatada de uma vida de abuso, encontra a redenção através do amor de um homem e, mais importante, do amor incondicional de Deus.",
            data: "Data de publicação: 1991",
            frase: "O amor de Deus não é sobre merecimento; é sobre graça."
        },
        {
            titulo: "BATTLE ROYALE",
            autor: "Koushun Takami",
            sinopse: "Sinopse: Em um futuro distópico, um grupo de estudantes é forçado a participar de um jogo mortal onde eles devem lutar até a morte. O romance aborda questões de sobrevivência, moralidade e as relações humanas em tempos extremos.",
            data: "Data de publicação: 1999",
            frase: "Eles não lutam para sobreviver. Eles lutam para matar."
        },
        {
            titulo: "O CAÇADOR DE PIPAS",
            autor: "Khaled Hosseini",
            sinopse: "Sinopse: A história de Amir, um menino afegão que cresce em meio a amizade, traição e redenção. O livro acompanha sua jornada de volta ao Afeganistão, onde ele tenta consertar os erros do passado e encontrar a paz.",
            data: "Data de publicação: 2003",
            frase: "Por você, eu faço tudo."
        }
    ];

    // Abrir detalhes
    detalhesBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const livro = detalhesLivros[index];
            detalhesConteudo.innerHTML = `
                <h2>${livro.titulo}</h2>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><strong>${livro.sinopse}</strong></p>
                <p><strong>${livro.data}</strong></p>
                <p><em>"${livro.frase}"</em></p>
            `;
            paginaFlutuante.classList.add('visivel');
        });
    });

    // Fechar detalhes
    fecharDetalhesBtn.addEventListener('click', () => {
        paginaFlutuante.classList.remove('visivel');
    });

    // Fechar ao clicar fora do conteúdo
    paginaFlutuante.addEventListener('click', (e) => {
        if (e.target === paginaFlutuante) {
            paginaFlutuante.classList.remove('visivel');
        }
    });
});
