import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import alex from '/src/assets/alex.jpeg';
import willian from '/src/assets/willian.jpeg';
import carolina from '/src/assets/carolina.jpeg';
import ComputadorPage from './components/ComputadorPage';
import HardwarePage from './components/HardwarePage';
import MatematicaPage from './components/MatematicaPage'; // Importa el nuevo componente

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md p-8 max-w-xs md:max-w-sm lg:max-w-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <img src={image} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover" />
    <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 max-w-xs mx-auto">{description}</p>
    <span className="text-green-500 font-semibold flex items-center hover:text-green-700 transition duration-200">
      Read more <span className="ml-2">→</span>
    </span>
  </div>
);

function HomePage() {
  const navigate = useNavigate();

  const blogPosts = [
    {
      image: alex,
      title: 'Computador que calcula',
      description: 'La computadora no solo calcula números, sino que transforma ideas en soluciones.',
      onClick: () => navigate('/computador')
    },
    {
      image: carolina,
      title: 'Hardware',
      description: 'Hardware de alto rendimiento y seguridad avanzada.',
      onClick: () => navigate('/hardware')
    },
    {
      image: willian,
      title: 'La Matemática como Instrumento para el Desarrollo de la Lógica',
      description: 'Descubre cómo la matemática fomenta el pensamiento lógico y la capacidad de resolver problemas.',
      onClick: () => navigate('/matematica') // Navega a la página de Matemática
    }
  ];

  return (
    <section className="flex flex-col items-center text-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-6">Blog</h2>
      <p className="text-gray-500 mb-16">Historias y guías para crecer en el mundo digital.</p>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
            onClick={post.onClick}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/computador" element={<ComputadorPage />} />
        <Route path="/hardware" element={<HardwarePage />} />
        <Route path="/matematica" element={<MatematicaPage />} /> {/* Nueva ruta para MatematicaPage */}
      </Routes>
    </Router>
  );
}

export default App;
