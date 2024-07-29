export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I am Rina</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full stack</span>
            <br />
            Developper
          </h1>
          <p className="hero--section--description">
            Young Developpeur
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/rina-photo1.jpg" alt="" />
      </div>
    </section>
  );
}
