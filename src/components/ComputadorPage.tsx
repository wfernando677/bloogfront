import React from 'react';

const ComputadorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700">LA COMPUTADORA QUE CALCULA</h1>
        <p className="text-xl text-gray-700 mt-4">
          Explora cómo las computadoras realizan operaciones matemáticas complejas.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {/* Tarjeta 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://cdn.goconqr.com/uploads/media/image/11709552/desktop_0407d16d-6272-4321-b36b-4268df72e517.png"
            alt="Computadora calculando"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Computador que calcula</h3>
            <p className="text-gray-600 mt-4">
              La máquina analítica es el diseño de un computador moderno de uso general realizado por el profesor británico de matemática Charles Babbage, que representó un paso importante en la historia de la informática.
            </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2024/07/partes-internas-ordenador.png"
            alt="Circuitos internos"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Componentes</h3>
            <p className="text-gray-600 mt-4">
              Placa base, disipador y procesador, bahías y discos duros, tarjeta gráfica, memorias RAM, fuente de alimentación y sus cables, ventiladores.
            </p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://img.datacentermarket.es/wp-content/uploads/2023/09/01111216/AdobeStock_178835953.jpeg"
            alt="Cálculos en pantalla"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Unidad Central de Procesamiento</h3>
            <p className="text-gray-600 mt-4">
              La CPU es el "cerebro" de la computadora. Realiza los cálculos y ejecuta las instrucciones de los programas. Está formada por millones de transistores que permiten operaciones aritméticas, lógicas y de control.
            </p>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://exitocol.vtexassets.com/arquivos/ids/5552915/memoria-ram-corsair-vengeance-rgb-pro-16gb-2x8-3000mhz.jpg?v=637463287850870000"
            alt="Memoria RAM"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Memoria RAM</h3>
            <p className="text-gray-600 mt-4">
              La memoria de acceso aleatorio (RAM) almacena temporalmente los datos y las instrucciones que la CPU necesita para realizar los cálculos de forma rápida.
            </p>
          </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://pasionelectronica.com/wp-content/uploads/2019/06/fotooparit.jpg"
            alt="Procesador de computadora"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Operaciones aritméticas y lógicas</h3>
            <p className="text-gray-600 mt-4">
              En el contexto de un computador, las operaciones aritméticas y lógicas se realizan de manera similar a cómo se realizan en matemáticas, utilizando sistemas binarios. Las operaciones están a cargo de componentes como la CPU y las unidades aritmético-lógicas (ALU).
            </p>
          </div>
        </div>

        {/* Tarjeta 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="https://www.coolmod.com/blog/wp-content/uploads/2023/08/comparativa-procesadores-M2-AMD-INTEL.jpg"
            alt="Procesadores especializados"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Procesadores especializados</h3>
            <p className="text-gray-600 mt-4">
              Dispositivos como las GPU o coprocesadores realizan cálculos en paralelo de manera eficiente para tareas como procesamiento de imágenes, simulaciones y IA.
            </p>
          </div>
        </div>
      </div>

      <footer className="text-center mt-12">
        <p className="text-gray-500 italic text-lg">
          "La computadora no solo calcula números, sino que transforma ideas en soluciones, demostrando que el poder de la mente humana y la precisión de las máquinas pueden crear un futuro lleno de posibilidades infinitas."
        </p>
      </footer>
    </div>
  );
};

export default ComputadorPage;
