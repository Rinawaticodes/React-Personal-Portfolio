import PropTypes from "prop-types";

export default function ProjectCard({ src, link, h3, description }) {
  return (
    <div className="portfolio--section--card">
      <div className="portfolio--section--img">
        <img className="hover" src={src} alt={`${h3} logo`} />
      </div>
      <div className="portfolio--section--card--content">
        <div>
          <h3 className="portfolio--section--title">{h3}</h3>
          <p className="text-md">{description}</p>
        </div>
        <p className="text-sm portfolio--link">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio--link--description"
          >
            View On GitHub
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
              stroke="currentColor"
              strokeWidth="2.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
