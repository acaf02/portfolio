import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ORGANIZATION } from "../constants";
import { motion } from "framer-motion";
import SA1 from "../assets/organization/1.jpg";
import SA2 from "../assets/organization/2.jpg";
import SA3 from "../assets/organization/3.jpg";
import SA4 from "../assets/organization/4.jpg";
import SA5 from "../assets/organization/5.jpg";
import SA6 from "../assets/organization/6.jpg";
import SA7 from "../assets/organization/7.jpg";
import SA8 from "../assets/organization/8.jpg";
import SA9 from "../assets/organization/9.jpg";
import SA10 from "../assets/organization/10.jpg";
import Divulgacao1 from "../assets/organization/Divulgacao1.jpg";
import Divulgacao2 from "../assets/organization/Divulgacao2.jpg";
import Divulgacao3 from "../assets/organization/Divulgacao3.jpg";
import Divulgacao4 from "../assets/organization/Divulgacao4.jpg";
import Divulgacao5 from "../assets/organization/Divulgacao5.jpg";
import Divulgacao6 from "../assets/organization/Divulgacao6.jpg";

const Organizations = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Organizações
      </motion.h1>

      <div>
        {ORGANIZATION.map((organization, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full text-justify"
            >
              <h6 className="mb-2 font-semibold text-center">
                {organization.role} -{" "}
                <span className="text-sm text-purple-100">
                  {organization.title} -{" "}
                  <span className="mb-2 text-sm text-neutral-400">
                    {organization.period}
                  </span>
                </span>
              </h6>
              <div className="mb-4 text-neutral-400">
                {organization.description.split("\n").map((line, index) => {
                  if (line.startsWith("-")) {
                    return (
                      <ul key={index}>
                        <li>{line.replace("-", "-").trim()}</li>
                      </ul>
                    );
                  }
                  return <p key={index}>{line}</p>;
                })}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center space-x-8"
      >
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={500}
          >
            {[SA1, SA2, SA3, SA4, SA5, SA6, SA7, SA8, SA9, SA10].map(
              (image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                  <p className="legend">XIII Semana Acadêmica da ADS</p>
                </div>
              )
            )}
          </Carousel>
        </div>

        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={500}
          >
            {[
              Divulgacao1,
              Divulgacao2,
              Divulgacao3,
              Divulgacao4,
              Divulgacao5,
              Divulgacao6,
            ].map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
                <p className="legend">
                  Divulgação do curso na 43° Feira do Livro de Alegrete
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default Organizations;
