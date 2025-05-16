import logo from "../assets/analogo.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-12" src={logo} alt="logo" />
      </div>
      <div className="m-9 flex items-center justify-center gap-2 text-xl"> {/* Reduced gap and text size */}
        <button
          onClick={() => changeLanguage("pt-BR")}
          className="relative cursor-pointer py-2 px-6 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
        >
          <span className="relative z-20">{t("app.portuguese")}</span>

          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>

        <button
          onClick={() => changeLanguage("en-US")}
          className="relative cursor-pointer py-2 px-6 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
        >
          <span className="relative z-20">{t("app.english")}</span>

          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
