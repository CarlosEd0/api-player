// Função para carregar os posts do servidor
function carregarJogos() {

    // Faça uma solicitação AJAX para obter os dados dos posts usando jQuery
    $.ajax({
        url: 'http://localhost:3000/jogo/all',
        method: 'GET',
        dataType: 'json',
        success: function (jogo) {
            // Agora você tem os dados dos posts no formato JSON
            // Aqui você pode percorrer os posts e exibi-los na página
            const jogosContainer = document.getElementById('lista-jogos');

            posts.forEach(jogo => {
                const postHTML = `



                <div class="col-lg-4 col-md-6">
                <div class="recent-game-item">
                    <div class="rgi-thumb set-bg" data-setbg="img/recent-game/${jogo.imagensJogo}">
                        <div class="cata new">new</div>
                    </div>
                    <div class="rgi-content">
                        <h5>${jogo.titulo} </h5>
                        <p>${jogo.descricao} </p>
                        <a href="#" class="comment">3 Comments</a>
                        <div class="rgi-extra">
                            <div class="rgi-star"><img src="img/icons/star.png" alt=""></div>
                            <div class="rgi-heart"><img src="img/icons/heart.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
            `;
                jogosContainer.innerHTML += postHTML;
            });
        },
        error: function (error) {
            console.error('Erro ao carregar os jogos:', error);
        }
    });
}

// Chame a função para carregar os posts quando a página for carregada
$(document).ready(function () {
    carregarJogos();
});