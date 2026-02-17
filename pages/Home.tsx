import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="flex-grow relative overflow-hidden flex flex-col min-h-[calc(100vh-5rem)]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none bg-network-light dark:bg-network-dark"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-primary"></div>

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col lg:flex-row items-stretch flex-grow">

        {/* Left Section (Image) */}
        <div className="lg:w-1/2 relative z-10 lg:ml-0 xl:-ml-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent dark:from-primary/40 z-10 pointer-events-none lg:hidden"></div>

          {/* Main Image Container */}
          <div className="h-96 lg:h-auto lg:min-h-[calc(100vh-5rem)] w-full lg:w-[120%] relative hero-shape bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-2xl">
            <img
              alt="Ingeniera con gafas de realidad aumentada"
              className="absolute inset-0 w-full h-full object-cover object-right transform scale-105 hover:scale-110 transition-transform duration-[2s] pl-4"
              src="/img/lateral1.webp"
            />
            {/* Mobile Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden"></div>
            <div className="absolute bottom-6 left-6 text-white lg:hidden z-20">
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-1">Facultad de Ingenierías</p>
              <h1 className="text-3xl font-bold leading-tight">Ingeniería en<br />Inteligencia Artificial</h1>
            </div>
          </div>


        </div>

        {/* Right Section (Content) */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:pl-24 lg:pr-8 relative z-10 pl-4">

          <div className="mb-8 hidden lg:block animate-fade-in-up">
            <h2 className="text-primary dark:text-teal-400 text-2xl md:text-3xl font-semibold mb-2 pl-4">
              Facultad de Ingenierías
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full pl-4"></div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 hidden lg:flex">
            <div className="bg-accent text-white px-8 py-6 rounded shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-transform cursor-default">
              <span className="text-4xl font-bold tracking-wider">2026</span>
            </div>
            <div className="hidden md:block w-1 h-20 bg-gray-300 dark:bg-gray-600 mx-2"></div>
            <h1 className="text-4xl xl:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
              INGENIERÍA EN<br />
              <span className="text-primary dark:text-teal-400">INTELIGENCIA</span><br />
              ARTIFICIAL
            </h1>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
            Fórmate como líder en la revolución tecnológica. Diseña, implementa y gestiona sistemas inteligentes que transformarán el futuro de la industria y la sociedad en la Orinoquia y el mundo.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/curriculum" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold group">
              <span>Ver Plan de Estudios</span>
              <span className="material-icons group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
            </Link>
            <Link to="/quality-conditions" className="flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded font-semibold transition-all dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-white">
              <span>Condiciones de Calidad</span>
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-gray-200 dark:border-gray-700 pt-8 pl-16">
            <div className="flex flex-col group cursor-default">
              <span className="text-accent font-bold text-xl group-hover:text-primary transition-colors">10</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold">Semestres</span>
            </div>
            <div className="flex flex-col group cursor-default">
              <span className="text-accent font-bold text-xl group-hover:text-primary transition-colors">Presencial</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold">Modalidad</span>
            </div>
            <div className="flex flex-col group cursor-default">
              <span className="text-accent font-bold text-xl group-hover:text-primary transition-colors">Yopal</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold">Sede</span>
            </div>
          </div>

          {/* Branding Logo Bottom Right */}
          <div className="mt-12 lg:mt-auto flex flex-col items-end opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-3">
              <span className="material-icons text-5xl text-primary dark:text-teal-400">forest</span>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary dark:text-teal-400 leading-none">Unitrópico</span>
                <span className="text-[0.6rem] text-gray-500 dark:text-gray-400 leading-tight mt-1 text-right">Universidad Internacional<br />del Trópico Americano</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;