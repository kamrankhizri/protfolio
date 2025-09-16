import SectionWrapper from "../components/sectionwrapeer";

const About = () => {
  return (
    <SectionWrapper id="about" bg="bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-3xl mx-auto text-center md:text-left space-y-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-red-500 mb-4">About Me</h2>

        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed">
        A{" "}
          <span className="text-white font-semibold">16-year-old student</span>{" "}
          passionate about <span className="text-red-400">web development</span>{" "}
          and technology. I love creating interactive, modern websites and
          continuously learning new tools to improve my skills.
        </p>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            My Skills 🚀
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300">
            <li className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-red-500/40 transition">
              HTML & CSS
            </li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-red-500/40 transition">
              JavaScript
            </li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-red-500/40 transition">
              React.js
            </li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-red-500/40 transition">
              Tailwind CSS
            </li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-red-500/40 transition">
              Node.js
            </li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-red-500/40 transition">
              MongoDB
            </li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-red-500/40 transition">
            AI-Prompting
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
