import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div
        className="row contactus"
        style={{
          backgroundImage: `url('/images/vvvv.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
        }}
      >
        <div className="col-md-4 offset-md-6">
        </div>
      </div>
    </Layout>
  );
};

export default About;
