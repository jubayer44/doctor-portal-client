import React from "react";
import bgImg from '../../assets/images/appointment.png';

const Contact = () => {
  return (
    <div>
      <section className="p-6 text-center"
      style={{background: `url(${bgImg})`}}
      >
        <form
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid"
        >
          <h2 className="text-xl text-primary">
            Contact us
          </h2>
          <p className="text-4xl text-white">Stay connected with us</p>
          <div>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 "
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 "
            />
          </div>
          <div>
            <textarea
              id="message"
              type="text"
              placeholder="Message..."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 "
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
