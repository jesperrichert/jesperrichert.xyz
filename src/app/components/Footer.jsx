import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#121212] footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src="/images/hero-image.png" width={100} height={100} />
        <p className="text-slate-600">© 2024 All rights reserved. <br></br><Link href={"/leagel"}>- Leagel Notice</Link><br></br><Link href={"/privacy"}>- Privacy Policy</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
