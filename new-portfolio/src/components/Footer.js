import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#877067]/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-white mb-4 font-orbitron">About Me</h3>
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              Data Analyst passionate about transforming raw data into meaningful insights.
              Specializing in data visualization and statistical analysis.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-orbitron">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/projects" 
                  className="text-gray-400 hover:text-[#877067] transition-all duration-300 
                           hover:translate-x-2 inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/skills" 
                  className="text-gray-400 hover:text-[#877067] transition-all duration-300 
                           hover:translate-x-2 inline-block"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-[#877067] transition-all duration-300 
                           hover:translate-x-2 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-orbitron">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#877067] transition-all duration-300
                         transform hover:scale-110"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#877067] transition-all duration-300
                         transform hover:scale-110"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#877067]/20">
          <p className="text-center text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © {new Date().getFullYear()} Data Analyst Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
