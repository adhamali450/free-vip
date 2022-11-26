import React, { useRef } from "react";
import iconClose from "@assets/icon-close.png";

const Header = () => {
  const headerRef = useRef(null);
  return (
    <header
      className="bg-color-success text-white flex justify-between items-center px-4 py-2 gap-2"
      ref={headerRef}
    >
      <span className="fl-small">
        احنا وصلنا يا رجالة و احلي مسا علي ابيو و عمر جودت و كل راجل جدع ساهم
        اننا نوصل
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
