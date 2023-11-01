import { Link } from "react-router-dom";
import githubIcon from "../assets/Vector.svg";
import twitterIcon from "../assets/ant-design_twitter-circle-filled.svg";
import linkedinIcon from "../assets/entypo-social_linkedin-with-circle.svg";

const Footer = () => {
  return (
    <>
      <div className="md:flex justify-between items-center mb-10">
        <header>
          <h1 className="text-4xl">&#10627;Oladee&#10628;</h1>
        </header>
        <div className="md:flex items-center gap-16">
          <div className="lg:flex gap-10">
            <p>+234 701 716 8721</p>
            <p>deemajor230600@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Link>
              <img src={githubIcon} alt="Oladimeji github link" />
            </Link>
            <Link>
              <img src={twitterIcon} alt="Oladimeji twitter link" />
            </Link>
            <Link>
              <img src={linkedinIcon} alt="Oladimeji Linkedin Link" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-2 opacity-30" />
    </>
  );
};
export default Footer;
