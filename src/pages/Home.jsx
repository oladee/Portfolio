import PropTypes from "prop-types";
import displaypic from '../assets/oladee.jpg'
import { stack } from "../stack";

const Home = () => {
  return (
    <div>
      <section className="flex justify-center flex-wrap flex-1 items-center h-screen">
        <article className="lg:w-[65%]  ">
          <h2 className="text-4xl md:text-6xl text-left text-[#D9D9D9] font-bold pr-20 md:leading-[60px]">
            Hi <span>👋</span>,<br/> My name is<br/> <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">MOMOH OLADIMEJI</span><br/> I build things for the web
          </h2>
        </article>
        <div className="border rounded-[50%] bg-gradient-to-b from-pink-500 to-blue-500 p-1">
        <img className="w-[200px] h-[200px] lg:h-[350px] lg:w-[350px] object-cover rounded-[50%]" src={displaypic} alt="displaypic" />
        </div>
      </section>
      <section className="">
        <div className="flex flex-col justify-center items-center">
        <h3 className="text-5xl font-bold">My Tech Stack</h3>
        <p className="text-2xl">Technologies I've been Working with recently</p>
        </div>
        <div className="flex justify-center">
        <div className="flex gap-20 flex-wrap">
          {stack.map(x => <img key={x.type} src={x.type} className="w-32"/>)}
        </div>
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {
  names: PropTypes.string,
};

export default Home;
