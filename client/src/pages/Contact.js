import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div
        className="row contactus"
        style={{
          backgroundImage: `url('/images/cc.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="col-md-4 offset-md-6">
          <h1 className="bg-dark p-2 text-white text-center ms-20px">CONTACT US</h1>
          <p className="text-justify mt-3 ms-5">
            Any query and info about the product, feel free to call anytime. We
            are available 24X7.
          </p>
          <p className="mt-3 ms-5">
            <BiMailSend /> : www.help@amulparlour.com
          </p>
          <p className="mt-3 ms-5">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3 ms-5">
            <BiSupport /> : 1800-0000-0000 (toll-free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
