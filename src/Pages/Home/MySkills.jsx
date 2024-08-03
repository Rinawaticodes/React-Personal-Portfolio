import SkillList from "../common/SkillList";
import productChain from "../../../public/img/product-chain-1.png";
import tag from "../../../public/img/tag.png";
import featherPen from "../../../public/img/feather-pen.png";
import checkMark from "../../../public/img/checkmark.png";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={productChain} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Front-end</h3>
            <SkillList src={checkMark} skill="HTML" />
            <SkillList src={checkMark} skill="CSS & SASS" />
            <SkillList src={checkMark} skill="Javascript" />
            <SkillList src={checkMark} skill="React Js" />
            <SkillList src={checkMark} skill="Figma" />
            <SkillList src={checkMark} skill="Responsive Design" />
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={tag} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Front-end</h3>
            <SkillList src={checkMark} skill="NodeJs" />
            <SkillList src={checkMark} skill="Express" />
            <SkillList src={checkMark} skill="MySQL" />
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src={featherPen} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Front-end</h3>
            <SkillList src={checkMark} skill="Git" />
            <SkillList src={checkMark} skill="Github" />
            <SkillList src={checkMark} skill="VSCode" />
          </div>
        </div>

        {/* {data?.skills?.map((items, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={items.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{items.title}</h3>
              <div className="skills--section--description">
                {items.skill?.map((subSkill) => (
                  <div
                    key={subSkill.description}
                    className="skills--section--subskill"
                  >
                    <img
                      src={subSkill.image}
                      alt={subSkill.description}
                      className="skills--section--subskill--img"
                    />
                    <p className="skills--section--subskill--description">
                      {subSkill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
}
