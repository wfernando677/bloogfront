import React from 'react';
import logicaImage from './../assets/img1.webp';
import vidaCotidianaImage from './../assets/img2.webp';
import problemasImage from './../assets/img3 .webp';
import abstractoImage from './../assets/img4.webp';
import cienciaTecnologiaImage from './../assets/img5 .webp';
import razonamientoImage from './../assets/img6 .webp';

const MatematicaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 py-12 px-4 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700">La Matemática como Instrumento para el Desarrollo de la Lógica</h1>
        <p className="text-xl text-gray-700 mt-4">
          Descubre cómo las matemáticas fomentan el pensamiento crítico y la capacidad de resolver problemas de manera estructurada.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
        
        {/* Importancia de la Lógica Matemática */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={logicaImage}
            alt="Importancia de la Lógica Matemática"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600">Importancia de la Lógica Matemática</h3>
            <p className="text-gray-600 mt-4">
              La lógica matemática permite estructurar pensamientos y desarrollar habilidades de razonamiento que son fundamentales para resolver problemas de forma sistemática.
            </p>
          </div>
        </div>

        {/* Matemática en la Vida Cotidiana */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={vidaCotidianaImage}
            alt="Matemática en la Vida Cotidiana"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600">Matemática en la Vida Cotidiana</h3>
            <p className="text-gray-600 mt-4">
              Desde calcular distancias hasta gestionar presupuestos, la matemática es un pilar en las actividades diarias y ayuda a tomar decisiones informadas.
            </p>
          </div>
        </div>

        {/* Resolución de Problemas */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={problemasImage}
            alt="Resolución de Problemas"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600">Resolución de Problemas</h3>
            <p className="text-gray-600 mt-4">
              Las matemáticas ofrecen un enfoque metodológico para analizar y resolver problemas complejos, lo cual es esencial en múltiples disciplinas.
            </p>
          </div>
        </div>

        {/* Pensamiento Abstracto */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={abstractoImage}
            alt="Pensamiento Abstracto"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600">Pensamiento Abstracto</h3>
            <p className="text-gray-600 mt-4">
              La matemática fomenta el pensamiento abstracto, permitiendo a las personas comprender conceptos y relaciones sin necesidad de representaciones físicas.
            </p>
          </div>
        </div>

        {/* Aplicación en la Ciencia y Tecnología */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={cienciaTecnologiaImage}
            alt="Aplicación en Ciencia y Tecnología"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600">Aplicación en la Ciencia y Tecnología</h3>
            <p className="text-gray-600 mt-4">
              En campos como la inteligencia artificial y la ingeniería, la matemática es una herramienta clave para el desarrollo y la innovación tecnológica.
            </p>
          </div>
        </div>

        {/* Habilidades de Razonamiento */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src={razonamientoImage}
            alt="Habilidades de Razonamiento"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-green-600">Habilidades de Razonamiento</h3>
            <p className="text-gray-600 mt-4">
              La matemática desarrolla habilidades de razonamiento lógico, que son esenciales para resolver problemas y para la toma de decisiones fundamentadas.
            </p>
          </div>
        </div>
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-500 italic text-lg">
          "La matemática es más que números; es una herramienta que estructura nuestro pensamiento y nos permite ver el mundo de una manera lógica y ordenada."
        </p>
      </footer>
    </div>
  );
};

export default MatematicaPage;
