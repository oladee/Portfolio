import React from "react";
import PropTypes from "prop-types";

const Home = () => {
  return (
    <div>
      <div>
        <article>
          <h2>
            Hi <span>👋</span>, My names is <span>MOMOH OLADIMEJI</span> I build things for the web
          </h2>
        </article>
        <img src="" alt="" />
      </div>
    </div>
  );
};

Home.propTypes = {
  names: PropTypes.string,
};

export default Home;
