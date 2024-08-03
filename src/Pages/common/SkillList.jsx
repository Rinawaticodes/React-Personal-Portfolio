import PropTypes from "prop-types";

function SkillList({ src, skill }) {
  return (
    <div className="skills--section--description">
      <div className="skills--section--subskill">
        <img
          src={src}
          alt="Checkmark icon"
          className="skills--section--subskill--img"
        />
        <p className="skills--section--subskill--description">{skill}</p>
      </div>
    </div>
  );
}

export default SkillList;

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};
