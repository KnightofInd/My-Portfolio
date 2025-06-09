import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Data Analyst passionate about transforming raw data into meaningful insights.
              Specializing in data visualization and statistical analysis.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Data Analyst Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
