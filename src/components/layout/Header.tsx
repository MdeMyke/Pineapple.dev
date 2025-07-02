import React from 'react';
import logo from '../../assets/logo.png';
import cv from '../../assets/archivos/maicol-piña-developer-cv.pdf';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Pineapple.dev logo" className="h-12 w-18 mr-4" />
        <h1 className="text-3xl font-boxing text-primary">
          Maicol.dev
        </h1>
      </div>
      <a
        href={cv}
        download
        className="bg-primary text-white font-bold py-2 px-6 rounded-xl shadow hover:bg-secondary transition-colors duration-200"
      >
        Descargar HV
      </a>
    </header>
  );
};

export default Header; 