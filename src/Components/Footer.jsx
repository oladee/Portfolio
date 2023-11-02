import { Link } from "react-router-dom";
import githubIcon from "../assets/Vector.svg";
import twitterIcon from "../assets/ant-design_twitter-circle-filled.svg";
import linkedinIcon from "../assets/entypo-social_linkedin-with-circle.svg";

const Footer = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:items-center ">
        <header>
          <h1 className="text-4xl">&#10627;Oladee&#10628;</h1>
        </header>
        <div className="md:flex items-center gap-16 py-10">
          <div className="lg:flex gap-10 items-center">
            <p>+234 701 716 8721</p>
            <p className="py-2">deemajor230600@gmail.com</p>
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
      <section>
        <div className="">
            <div><Link className="">Home</Link></div>
            <div><Link>About</Link></div>
            <div><Link>Technologies</Link></div>
            <div><Link>Projects</Link></div>
            <div><Link>Contacts</Link></div>
        </div>
        <div>
        <p className="text-sm">Designed and built by <span>Oladimeji</span>with 🧡</p>
        
        </div>
      </section>
    </>
  );
};
export default Footer;
