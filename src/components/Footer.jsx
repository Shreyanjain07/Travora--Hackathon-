import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10 text-center">
      <p>© {new Date().getFullYear()} Travora. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
