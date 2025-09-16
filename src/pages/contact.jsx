import SectionWrapper from "../components/sectionwrapeer";

const Contact = () => {
  return (
    <SectionWrapper id="contact" bg="bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-red-500">Contact Me</h2>
        <p className="text-gray-300 text-lg">
          I’d love to hear from you! Whether you have a question, a project idea,
          or just want to say hi 👋 — feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="space-y-2">
          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:example@email.com"
              className="text-red-400 hover:underline"
            >
              kamrankhizri4749@email.com
            </a>
          </p>
          <div className="flex justify-center gap-6 text-gray-400 text-2xl">
          
          </div>
        </div>

        {/* Contact Form */}
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
