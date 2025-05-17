import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as pt from "../constants/index.PT-BR";
import * as en from "../constants/index.EN-US";

const About = () => {
  const { i18n } = useTranslation();

  // Seleciona conteúdo de acordo com o idioma atual
  const content = i18n.language === "en-US" ? en : pt;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {i18n.language === "en-US" ? "About" : "Sobre"}
        <span className="text-neutral-500">
          {" "}
          {i18n.language === "en-US" ? "Me" : "Mim"}
        </span>
      </motion.h1>

      <div className="flex flex-wrap">
        {/* Imagem */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>

        {/* Texto Justificado */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 py-6 text-justify">{content.ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
