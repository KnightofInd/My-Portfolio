import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 dark:bg-gray-900/80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            DataAnalyst<span className="text-blue-600">.Portfolio</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
              Projects
            </Link>
            <Link href="/skills" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
              Skills
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
