import { CONTACT } from "../constants/index.PT-BR";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { i18n } = useTranslation(); // Using the i18n hook to manage language state

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {i18n.language === "en-US" ? "Get in Touch!" : "Entre em Contato!"}
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="mailto:anacarol.alves1@outlook.co"
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>

        {/* Centering social media icons */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center gap-5 py-5 text-4xl"
        >
          <a
            href="https://www.linkedin.com/in/ana-carolina-alves-farias-8a998b266/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/acaf02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/acaf02/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
