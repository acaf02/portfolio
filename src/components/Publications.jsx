import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as pt from "../constants/index.PT-BR";
import * as en from "../constants/index.EN-US";

const Publications = () => {
  const { i18n } = useTranslation();

  // Seleciona o conteúdo de acordo com o idioma atual
  const content = i18n.language === "en-US" ? en : pt;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {i18n.language === "en-US" ? "Publications" : "Publicações"}
      </motion.h1>
      <div>
        {content.PUBLICATION.map((publication, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full text-justify"
            >
              <h6 className="mb-2 font-semibold text-center">
                {publication.title} -{" "}
                <span className="text-sm text-center text-purple-100">
                  {publication.publication}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{publication.description}</p>
              <div className="mt-2 flex justify-center">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-neutral-900 px-3 py-2 text-sm font-medium text-purple-400 hover:underline"
                >
                  {i18n.language === "en-US"
                    ? "View article"
                    : "Ver publicação"}
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
