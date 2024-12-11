import { useState } from "react";
import FooterSvg from "./FooterSvg";

const Footer = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="middle">
      <FooterSvg className="bg-[#646669] fill-main" onClick={handleClick} />
    </div>
  );
};

export default Footer;
