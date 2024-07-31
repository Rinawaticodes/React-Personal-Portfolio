export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey I&apos;m Rina</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full stack</span>
            <br />
            Developer
          </h1>
        </div>
        <div className="hero--section--btn">
          <a
            href="https://drive.google.com/file/d/1oZR_387yLhzEPgVN2IERVqyLL9iQGml7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/rina-photo1.png" alt="" />
      </div>
    </section>
  );
}
