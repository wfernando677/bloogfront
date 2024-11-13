import './App.css';
import alex from '/src/assets/alex.jpeg';
import willian from '/src/assets/willian.jpeg';
import carolina from '/src/assets/carolina.jpeg';

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, link }) => (
  <div className="bg-white rounded-lg shadow-md p-8 max-w-xs md:max-w-sm lg:max-w-md transition-transform transform hover:scale-105 hover:shadow-lg">
    <img src={image} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover" />
    <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 max-w-xs mx-auto">{description}</p>
    <a href={link} className="text-green-500 font-semibold flex items-center hover:text-green-700 transition duration-200">
      Read more <span className="ml-2">→</span>
    </a>
  </div>
);

function App() {
  const blogPosts = [
    {
      image: alex,
      title: 'Computador que calcula',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      link: '#'
    },
    {
      image: carolina,
      title: 'Hardware',
      description: 'Hardware potente y sistemas seguros.',
      link: '#'
    },
    {
      image: willian,
      title: 'Step by step guide for conducting usability',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      link: '#'
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
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
