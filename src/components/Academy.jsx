import { ACADEMY } from "../constants";
import { motion } from "framer-motion";

const Academy = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Formação Acadêmica</motion.h1>
            <div>
                {ACADEMY.map((academy, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{academy.period}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {academy.title} -{" "}
                                <span className="text-sm text-purple-100">
                                    {academy.where}
                                </span>
                            </h6>
                            <div className="mb-4 text-neutral-400">
                                {academy.description.split("\n").map((line, index) => {
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
                            <div className="flex flex-wrap">
                                {academy.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-2 rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Academy;