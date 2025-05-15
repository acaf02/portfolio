import { ACADEMY } from "../constants";
import { motion } from "framer-motion";

const Academy = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Formação Acadêmica
      </motion.h1>

      <div>
        {ACADEMY.map((academy, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap gap-4 lg:justify-center"
          >
            {/* Período */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{academy.period}</p>
            </motion.div>

            {/* Conteúdo */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-3xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg font-semibold text-white">
                {academy.title}{" "}
                <span className="block text-sm font-normal text-purple-200">
                  {academy.where}
                </span>
              </h6>

              <div className="mb-4 text-neutral-400">
                {/* Descrição com suporte a listas */}
                {(() => {
                  const lines = academy.description.split("\n");
                  const listItems = lines.filter((line) =>
                    line.trim().startsWith("-")
                  );
                  const paragraphs = lines.filter(
                    (line) => !line.trim().startsWith("-")
                  );

                  return (
                    <>
                      {paragraphs.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                      {listItems.length > 0 && (
                        <ul className="list-disc list-inside mt-2">
                          {listItems.map((line, idx) => (
                            <li key={idx}>{line.replace(/^-/, "").trim()}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Academy;
