import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import { ORGANIZATION } from "../constants/index.PT-BR";
import { motion } from "framer-motion";
import * as pt from "../constants/index.PT-BR";
import * as en from "../constants/index.EN-US";

// Imagens para os carrosséis
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

const ImageCarousel = ({ images, legend }) => (
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
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
          <p className="legend">{legend}</p>
        </div>
      ))}
    </Carousel>
  </div>
);

const Organizations = () => {
  const { i18n } = useTranslation();

  // Seleciona conteúdo de acordo com o idioma atual
  const content = i18n.language === "en-US" ? en : pt;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {i18n.language === "en-US" ? "Organizations" : "Organizações"}
      </motion.h1>

      <div>
        {content.ORGANIZATION.map((organization, index) => (
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

      {/* Carrossel para as imagens da Semana Acadêmica */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center space-x-8"
      >
        <ImageCarousel
          images={[SA1, SA2, SA3, SA4, SA5, SA6, SA7, SA8, SA9, SA10]}
          legend="XIII Semana Acadêmica da ADS"
        />

        {/* Carrossel para as imagens da Divulgação do Curso */}
        <ImageCarousel
          images={[
            Divulgacao1,
            Divulgacao2,
            Divulgacao3,
            Divulgacao4,
            Divulgacao5,
            Divulgacao6,
          ]}
          legend="Divulgação do curso na 43° Feira do Livro de Alegrete"
        />
      </motion.div>
    </div>
  );
};

export default Organizations;
