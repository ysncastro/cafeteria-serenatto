import "./Banner.css";

function Banner() {
  return (
    <main>
      <section className="banners banner-1 d-flex flex-column justify-content-center text-center">
        <div className="banners-titulo bg-body-secondary py-5">
          <h2 className="fw-bold">Sua pausa para desfrutar a vida.</h2>
          <p>
            Boas-vindas ao & Bistrô Serenatto! Um ambiente aconchegante e
            acolhedor para apreciar um bom café.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Banner;
