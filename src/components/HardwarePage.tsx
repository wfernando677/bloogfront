import React from 'react';

const HardwarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-12 px-4 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700">HARDWARE</h1>
        <p className="text-xl text-gray-700 mt-4">
          Explora la estructura y los componentes físicos que permiten a las computadoras funcionar.
        </p>
      </header>

      {/* Contenedor centrado con un ancho máximo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
        
        {/* Unidad Central de Procesamiento */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://cdn.goconqr.com/uploads/media/image/11709552/desktop_0407d16d-6272-4321-b36b-4268df72e517.png"
            alt="Unidad Central de Procesamiento"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Unidad Central de Procesamiento (CPU)</h3>
            <p className="text-gray-600 mt-4">
              La CPU es el "cerebro" del ordenador, ejecutando instrucciones y realizando cálculos. Coordina el flujo de datos entre componentes.
            </p>
          </div>
        </div>

        {/* Memoria RAM */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://exitocol.vtexassets.com/arquivos/ids/5552915/memoria-ram-corsair-vengeance-rgb-pro-16gb-2x8-3000mhz.jpg?v=637463287850870000"
            alt="Memoria RAM"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Memoria RAM</h3>
            <p className="text-gray-600 mt-4">
              La RAM permite acceso rápido a datos e instrucciones para el CPU, mejorando el rendimiento al ejecutar múltiples aplicaciones.
            </p>
          </div>
        </div>

        {/* Disco Duro */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2024/07/partes-internas-ordenador.png"
            alt="Disco Duro"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Disco Duro</h3>
            <p className="text-gray-600 mt-4">
              Almacena datos de forma permanente. Los discos duros giratorios han sido reemplazados en muchos casos por unidades SSD, más rápidas y fiables.
            </p>
          </div>
        </div>

        {/* Placa Base */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://img.datacentermarket.es/wp-content/uploads/2023/09/01111216/AdobeStock_178835953.jpeg"
            alt="Placa Base"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Placa Base</h3>
            <p className="text-gray-600 mt-4">
              La placa base conecta y permite la comunicación entre todos los componentes, actuando como el "esqueleto" del sistema.
            </p>
          </div>
        </div>

        {/* Tarjeta Gráfica */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://www.coolmod.com/blog/wp-content/uploads/2023/08/comparativa-procesadores-M2-AMD-INTEL.jpg"
            alt="Tarjeta Gráfica"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Tarjeta Gráfica</h3>
            <p className="text-gray-600 mt-4">
              Procesa y renderiza gráficos, necesaria para aplicaciones gráficas intensivas, juegos y tareas de aprendizaje profundo.
            </p>
          </div>
        </div>

        {/* Periféricos */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://pasionelectronica.com/wp-content/uploads/2019/06/fotooparit.jpg"
            alt="Periféricos"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Periféricos</h3>
            <p className="text-gray-600 mt-4">
              Incluyen dispositivos externos como teclados, ratones, impresoras y monitores, esenciales para la interacción con el sistema.
            </p>
          </div>
        </div>
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-500 italic text-lg">
          "El hardware es el cuerpo de una computadora; cada componente cumple un rol esencial en el funcionamiento armonioso del sistema."
        </p>
      </footer>
    </div>
  );
};

export default HardwarePage;
