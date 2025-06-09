const TechnicalSkills = () => {
  const skillCategories = [
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
  ];

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
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
  );
};

export default TechnicalSkills;
