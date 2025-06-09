import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Data Analyst & <span className="text-blue-600">Insights Specialist</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Transforming complex data into actionable insights. Specializing in data visualization,
              statistical analysis, and business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px]">
            <Image
              src="/vercel.svg"  // You should replace this with your own image
              alt="Data Analysis Visualization"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Data Analysis",
              skills: ["Python", "R", "SQL", "Excel", "Statistical Analysis"],
            },
            {
              title: "Visualization",
              skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
            },
            {
              title: "Tools & Technologies",
              skills: ["Jupyter Notebook", "Git", "AWS", "Machine Learning"],
            },
          ].map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
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
    </div>
  );
}
