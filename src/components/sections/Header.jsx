import React, { useRef } from "react";
import iconClose from "@assets/icon-close.png";

const Header = () => {
  const headerRef = useRef(null);
  return (
    <header
      className="bg-[#ca0201] text-white flex justify-between items-center px-4 py-2 gap-2"
      ref={headerRef}
    >
      <span className="fl-small">
        معرفناش نوصل. كنا حابين نحلها سلمي من غير ما نبوظ فرحة الناس. تخريب
        الحفلة كان قرار صعب و لكن اضطراري
      </span>
      <button
        className="shrink-0"
        type="button"
        onClick={() => headerRef.current.remove()}
      >
        <img src={iconClose} alt="close" />
      </button>
    </header>
  );
};

export default Header;
