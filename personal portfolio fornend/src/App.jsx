import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
  <div className="animate__animated animate__fadeInUp animate__delay-3s">
    <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-full" loading="lazy"/>
      <q>Beautiful code, born from perseverance. 😁</q>
    </div>
    <h1 className="text-5xl/tight font-bold mb-6">Hi, I am Ravi Krishna.</h1>
    <p className="text-base/loose mb-6 opacity-50">
      I have an interest in Programming and Design, especially in creating Websites and designing materials such as Posters, Flyers, and Banners. My interest in this field has lasted for more than 2 years across all areas.
    </p>
    <div className="flex items-center sm:gap-4 gap-2">
      <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i> </a>
      <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">View Project <i className="ri-arrow-down-line ri-lg"></i> </a>
    </div>
  </div>
  <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto rounded-full animate__animated animate__fadeInUp animate__delay-3s" loading="lazy"/>
</div>


    {/* tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-4/5 lg:w-5/6 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-violet-500 tracking-wide"> 
          My Journey
        </h2>
        <p className="text-base/loose mb-10">
          Hi, I’m Ravi Krishna, a Full Stack Web Developer with a keen eye for design. My journey into tech started with creativity and curiosity, exploring how visuals and technology can work together. At KL University, I actively participated in the VYUHA club, where I learned leadership, teamwork, and honed my skills in digital editing and design.
        </p>
        <p className="text-base/loose mb-10">
          Inspired to bring ideas to life, I dove into full-stack development, gaining experience in both frontend and backend technologies. With hands-on knowledge in React, Spring Boot, and MySQL, I create applications that are functional, visually appealing, and user-friendly. Combining my editing and development skills, I focus on crafting digital products that deliver both performance and a great user experience.
        </p>
      <div className="flex items-center justify-between">
       <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
       <div className="flex items-center gap-6">
        <div>
          <h1 className="text-4xl mb-1">
            5<span className="text-violet-500">+</span>
          </h1>
          <p>Projects Completed</p>
        </div>
        <div>
          <h1 className="text-4xl mb-1">
            2<span className="text-violet-500">+</span>
          </h1>
          <p>Years of Experience</p>
        </div>
       </div>
      </div>
    </div>

    
      <div className="tools mt-32">
        <h1
          className="text-4xl font-bold text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          My Skills
        </h1>
          <p 
            className="max-w-5xl mx-auto text-base/loose text-center opacity-70 break-words"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay="300" 
            data-aos-once="true"
            >
            These are the skills I have been developing to create websites and digital designs that are both functional and visually appealing. I focus on combining design, coding, and problem-solving to build engaging digital experiences.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
  <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
    <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />

          <div>
            <h4 className="font-bold">{tool.name}</h4>
            <p className="opacity-50">{tool.ket}</p>
          </div>
          </div>
          ))}
          </div>
      </div>
    </div>
    {/* tentang */}


    {/* Proyek */}

    <div className="proyek mt-32 py-10" id="proyek">
  <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects</h1>
  <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
    Here are some of the projects I have created.
  </p>
  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {listProyek.map((proyek) => (
      <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
        <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
        <div>
          <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
          <p className="text-base/loose mb-4">{proyek.desk}</p>
          <div className="flex flex-wrap gap-2">
            {proyek.tools.map((tool, index) => (
            <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600" >View Website</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    {/* Proyek */}

    {/* Kontak */}

    {/* Contact Section */}
<div className="kontak mt-40 px-6 sm:px-12" id="kontak">
  <h1
    className="text-4xl mb-4 font-bold text-center"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    Contact
  </h1>
  <p
    className="text-base text-center mb-14 opacity-50"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
    data-aos-once="true"
  >
    Get in touch with me.
  </p>

  {/* Wrapper with 2 columns */}
  <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
    
    {/* Left - Contact Information */}
    <div
      className="bg-zinc-800 p-10 rounded-md flex flex-col gap-8"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <h2 className="text-2xl font-bold text-violet-400">Contact Information</h2>
      
      <div className="flex items-center gap-4">
        <span className="text-violet-400 text-2xl">📧</span>
        <div>
          <p className="font-semibold">Email</p>
          <p className="opacity-70">ravikrishna99221@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-violet-400 text-2xl">📞</span>
        <div>
          <p className="font-semibold">Phone</p>
          <p className="opacity-70">+91 939261220</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-violet-400 text-2xl">📍</span>
        <div>
          <p className="font-semibold">Location</p>
          <p className="opacity-70">Materu, Andhra Pradesh, India</p>
        </div>
      </div>
    </div>

    {/* Right - Send Message Form */}
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        
        // Try Spring Boot backend first
        try {
          const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
          };

          const response = await fetch("http://localhost:8081/api/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            alert("Message sent successfully to database!");
            e.target.reset(); // Clear the form
            return; // Stop here if Spring Boot worked
          }
        } catch (error) {
          console.log("Spring Boot backend not available, falling back to formsubmit.co");
          // Continue to default form submission (formsubmit.co)
        }
        
        // If Spring Boot fails, let the form submit normally to formsubmit.co
        e.target.submit();
      }}
      action="https://formsubmit.co/ravikrishna99221@gmail.com"
      method="POST"
      className="bg-zinc-800 p-10 rounded-md"
      autoComplete="off"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
      data-aos-once="true"
    >
      <h2 className="text-2xl font-bold text-violet-400 mb-6">Send Message</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          className="border border-zinc-500 p-3 rounded-md w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          className="border border-zinc-500 p-3 rounded-md w-full"
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        className="border border-zinc-500 p-3 rounded-md w-full mb-6"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message *"
        rows="6"
        className="border border-zinc-500 p-3 rounded-md w-full mb-6"
        required
      ></textarea>

      {/* Add hidden inputs for formsubmit.co */}
      <input type="hidden" name="_next" value="http://localhost:5173/#kontak" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <button
        type="submit"
        className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</div>
{/* Contact Section End */}

    {/* Kontak */}
    </>
  );
}

export default App;