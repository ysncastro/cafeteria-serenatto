

function Servicos() {
    return(
        <section class="py-5">
        <h2 class="text-center fw-bold pb-1">Nossos serviços</h2>

        <div class="container d-flex justify-content-around flex-wrap">

          <div class="card m-4" style={{width: 20 + "rem"}}>
            <img src="./assets/cafe-card.png" class="card-img-top"
              alt="Balcão de padaria tradicional com alimentos diversos"/>
            <div class="card-body">
              <h5 class="card-title py-2 fw-bold">Café & Bistrô</h5>
              <p class="card-text">Nosso bistrô oferece uma ampla variedade de cafés, smoothies, deliciosos
                salgados e sobremesas. Uma excelente opção para quem busca um lugar tranquilo e
                aconchegante.</p>
              <a href="#" class="btn botao-padrao w-100 fw-bold">Quero detalhes</a>
            </div>
          </div>

          <div class="card m-4" style={{width: 20 + "rem"}}>
            <img src="./assets/buffet-card.png" class="card-img-top" alt="Mesa de buffet com alimentos diversos"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">Buffet</h5>
              <p class="card-text">Buffet e catering personalizado para eventos, produções e celebrações. Com
                um menu variado e adaptável às preferências do cliente, atendimento atencioso e
                profissional.</p>
              <a href="#" class="btn botao-padrao w-100 fw-bold mt-3">Quero detalhes</a>
            </div>
          </div>

          <div class="card m-4" style={{width: 20 + "rem"}}>
            <img src="./assets/delivery-card.png" class="card-img-top" alt="Caixa aberta armazenando comidas diversas"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">Delivery</h5>
              <p class="card-text">Para quem deseja desfrutar no conforto de casa, oferecemos delivery dos
                produtos. Com o mesmo cardápio variado de sempre, sem perder nosso sabor e padrão de
                qualidade.</p>
              <a href="#" class="btn botao-padrao w-100 fw-bold mt-3">Quero detalhes</a>
            </div>
          </div>
        </div>
      </section>

    )
}

export default Servicos;