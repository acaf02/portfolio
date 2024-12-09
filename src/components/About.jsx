import aboutImg from "../assets/about.jpeg";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Sobre
                <span className="text-neutral-500"> Mim</span>
            </h1>
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
                        <p className="my-2  py-6 text-justify">{ABOUT_TEXT}</p>
                    </div>

                    <div className="mt-8">
                <div className="flex flex-wrap justify-center mt-4 gap-6">
                    <div className="w-full sm:w-80 p-4 bg-neutral-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-semibold text-black p-2">2020 - Curso de Inglês Avançado - Senac</h3>
                        <p className="text-neutral-600 text-sm text-justify p-2">
                            Iniciei minha jornada no aprendizado de idiomas, com o objetivo de expandir meus horizontes profissionais e
                            pessoais, melhorando a comunicação em inglês para atuar no mercado global.
                        </p>
                    </div>
                    
                    <div className="w-full sm:w-80 p-4 bg-neutral-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-semibold p-2 text-black">2022 - Jan/2025 - Análise e Desenvolvimento de Sistemas - Instituto Federal Farroupilha</h3>
                        <p className="text-neutral-600 text-sm text-justify p-2">
                            A partir de 2022, comecei minha graduação em Análise e Desenvolvimento de Sistemas, aprofundando meus conhecimentos
                            em programação, estruturas de dados, engenharia de software, além de adquirir uma base sólida para enfrentar desafios
                            no desenvolvimento de sistemas para diversas áreas.
                        </p>
                    </div>
                </div>
            </div>
                </motion.div>
            </div>

        </div>
    );
};

export default About;
