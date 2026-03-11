/* eslint-disable react/no-unescaped-entities */
import "../styles/Home.css";
// import ProfileCard from "../components/ProfileCard"; // Import the new ProfileCard component

const Home = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h1 className="text-3xl heading mb-4">ABOUT ME</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          creating robust and user-friendly web applications. With a strong
          foundation in both front-end and back-end technologies, I strive to
          deliver high-quality, scalable solutions that meet and exceed client
          expectations.
        </p>
        <h2 className="text-2xl font-bold mt-8">What I do!</h2>
        <div className="flex flex-wrap gap-4 mt-4 Grid-container">
          <div className="p-4 about-section-card w-1/2">
            <h2 className="text-xl font-semibold">
              <span className="material-icons align-middle">web</span>
              Web Development
            </h2>
            <p>
              As a developer, I find myself most captivated by the power and
              flexibility of NEXT.js. I'm always eager to dive into new projects
              that leverage NEXT.js and discover innovative ways to create fast,
              scalable, and user-friendly applications.
            </p>
          </div>
          <div className="p-4 about-section-card w-1/2">
            <h2 className="text-xl font-semibold">
              <span className="material-icons align-middle">
                mobile_friendly
              </span>
              App Development
            </h2>
            <p>
              With a focus on user-centric design and cutting-edge technologies,
              I thrive on building intuitive and efficient apps that make a
              positive impact on people's lives. Let's turn ideas into reality
              and shape the future together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
