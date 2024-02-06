import PropTypes from "prop-types";
import displaypic from "../assets/oladee.jpg";
import { stack } from "../stack";
import previewIcon from "../assets/akar-icons_link-chain.svg";
import gitIcon from "../assets/akar-icons_github-fill.svg";
import { data } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mb-20">
      <section className="flex justify-center flex-wrap flex-1 items-center h-[95vh]">
        <article className="lg:w-[65%]  ">
          <h2 className="text-4xl md:text-6xl text-left text-[#D9D9D9] font-bold pr-20 md:leading-[60px]">
            Hi <div className="hands inline-block"><span >👋</span></div>,<br /> My name is
            <br />{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              MOMOH OLADIMEJI
            </span>
            <br /> I build things for the web
          </h2>
        </article>
        <div className="run rounded-[50%] bg-gradient-to-b from-pink-500 to-blue-500 p-1">
          <img
            className="w-[200px] h-[200px] lg:h-[350px] lg:w-[350px] object-cover rounded-[50%] "
            src={displaypic}
            alt="displaypic"
          />
        </div>
      </section>
      <section className="mb-20" id="techStack">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl md:text-5xl font-bold pb-3">My Tech Stack</h3>
          <p className="md:text-2xl pb-16 text-sm">
            Technologies I&apos;ve been Working with recently
          </p>
        </div>
        <div className="flex ml-[10%] lg:ml-0">
          <div className="flex gap-20 flex-wrap md:grid md:place-content-center md:w-full md:grid-cols-[repeat(4,auto)]">
            {stack.map((x) => {
              return (
              <img key={x.type} src={x.type} className="lg:w-28 w-20" />
            )})}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-3xl md:text-5xl font-bold pb-3">Projects</h3>
          <p className="md:text-2xl pb-16">Things I&apos;ve built so far</p>
        </div>
        <div className=" flex flex-nowrap overflow-x-auto gap-[25px] md:grid md:place-content-center md:w-full md:grid-cols-[repeat(4,auto)]">
          {data.map((x) => (
            <Card
              key={x.title}
              image={x.image}
              title={x.title}
              description={x.description}
              codeStack={x.codeStack}
              preview={x.preview}
              viewCode={x.viewCode}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  names: PropTypes.string,
};
export default Home;

export const Card = ({ image, title, description, codeStack,preview, viewCode }) => {
  return (
    <div className="cursor-pointer hover:shadow-lg hover:scale-90 duration-300">
      <div className=" h-[390px] w-[250px] bg-[#363636] rounded-2xl">
      <div className="h-[35%]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-xl pb-2">{title}</h3>
        <p className=" line-clamp-4 ">{description}</p>
        <p className="pt-2 pb-3">
          Tech stack : <span className="text-xs">{codeStack}</span>
        </p>
        <div className="flex justify-between">
          <Link to={preview} target="blank" className="link" >
            <div className="flex items-center bg-[#363636] ">
            <img src={previewIcon} alt="" />{" "}
            <span className=" text-sm hover:text-white">Live Preview</span>{" "}
            </div>
          </Link>
          <Link to={viewCode} className="link">
            <div className="flex items-center gap-1 hover:text-black">
            <img src={gitIcon} alt="" className="w-5" />{" "}
            <span className="text-sm">View Code</span>{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  codeStack: PropTypes.string,
  preview: PropTypes.string,
  viewCode : PropTypes.string
};
