import  { type MouseEventHandler, type ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

type Props = {
    active:boolean,
    selectTab:MouseEventHandler<HTMLButtonElement>,
    children:ReactNode

}

const TabButton = ({ active, selectTab, children }:Props) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  console.log(buttonClasses)

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-400 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;