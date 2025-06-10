import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">
            DataAnalyst<span className="text-[#877067]">.Portfolio</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-[#877067] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
