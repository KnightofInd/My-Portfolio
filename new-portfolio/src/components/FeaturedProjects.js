import Image from "next/image";
import Link from "next/link";

const FeaturedProjects = () => {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((project) => (
          <div
            key={project}
            className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src="/vercel.svg"  // Replace with actual project images
                alt={`Project ${project}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Data Analysis Project {project}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Description of the data analysis project and its impact on business decisions.
              </p>
              <Link
                href={`/projects/${project}`}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
