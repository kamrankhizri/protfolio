import SectionWrapper from "../components/sectionwrapeer";

const Home = () => {
  return (
    <SectionWrapper
      id="home"
      bg="bg-gradient-to-b from-black to-gray-900"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        
        {/* Intro Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-3">
            Hi, I'm Kamran 👋
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
            I’m <span className="font-semibold text-white">16 years old</span>, 
            a passionate student who loves building creative web projects and learning new technologies.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://drive.google.com/file/d/1LaIaE8w2yX_gXNvKr-gWU-pGHzBMvBDC/view?usp=sharing" // replace with your CV path
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full shadow-lg transition"
            >
              View CV
            </a>
            <a
              href="#projects"
              className="px-5 py-2 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-full shadow-lg transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Profile Picture Floating */}
        <div className="relative flex justify-center md:justify-end w-full md:w-auto">
      <div className="w-72 h-96 sm:w-56 sm:h-56 md:w-72 md:h-72 overflow-hidden border-4 border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.8)] rounded-3xl animate-float">
  <img
    src="/kamran ch.jpg"
    alt="My Profile"
    className="w-full h-96 object-cover"
  />
</div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
