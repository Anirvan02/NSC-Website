import React from "react";
import { useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="images/logo.png" alt="Logo" />
        <span className="logo-text">NSC</span>
      </a>
      <nav className="navbar">
        <div id="close" className="fas fa-times"></div>
        <a href="#" className="nav_item">
          Home
        </a>
        <a href="#About" className="nav_item">
          About
        </a>
        <a href="#Materials" className="nav_item">
          Materials
        </a>
        <a href="#Contact" className="nav_item">
          Contact
        </a>
      </nav>
      <div id="menu" className="fas fa-bars"></div>
    </header>
  );
}

function Home() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="images/home3.jpg" class="d-block w-100" alt="Slide 1" />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/home2.jpg" class="d-block w-100" alt="Slide 2" />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/home1.jpg" class="d-block w-100" alt="Slide 3" />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="home">
        <div class="content">
          <h1 class="title">National Sales Corporation</h1>
          <p class="description">
            National Sales Corporation is a trusted supplier of industrial and
            commercial products, including hardware, electrical, machinery,
            safety goods, and other industrial items.
          </p>
          <a href="#About" class="btn">
            Know more
          </a>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="about" id="About">
        <h1 class="abt-heading">&mdash; ABOUT US &mdash;</h1>
        <div class="abt-content">
          <h3>Why National Sales Corporation?</h3>
          <p>
            {" "}
            At National Sales Corporation, we are a trusted supplier of
            industrial hardware, electrical components, machinery, welding
            equipment, bricks, safety gear, and a wide range of construction
            materials. With a commitment to quality and reliability, we cater to
            the diverse needs of businesses across India and Bhutan.
          </p>
          <p>
            {" "}
            We take pride in our strong partnerships with leading companies,
            including L&T Pvt Ltd, IRB, AFCON, GR Infra, HCC, Patel Engineering,
            ITTDPCL, APPCO, Power Grid, and Punj Lloyd across India. Our reach
            extends to Bhutan, where we work with BFAL, BCCL, DGPC, Druk Wang,
            BBPL, DFAL, Gyalsung Infra, and SKW to support major infrastructure
            and development projects.
          </p>
          <p>
            With years of experience and a reputation for excellence, we continue 
            to be the go-to supplier for industries seeking high-quality products 
            and dependable service.
          </p>
          <a href="#Materials" class="abt-btn">
            Explore materials
          </a>
        </div>
      </div>
      <div class="logos">
        <h3>&mdash;We Deal With&mdash;</h3>
        <div class="logos-slide">
          <img src="images/logo1.png" />
          <img src="images/logo2.png" />
          <img src="images/logo3.png" />
          <img src="images/logo4.png" />
          <img src="images/logo5.png" />
          <img src="images/logo6.png" />
          <img src="images/logo7.png" />
          <img src="images/logo8.png" />
          <img src="images/logo9.png" />
          <img src="images/logo10.png" />
          <img src="images/logo12.png" />
          <img src="images/logo13.png" />
          <img src="images/logo14.png" />
          <img src="images/logo15.png" />
          <img src="images/logo16.png" />
          <img src="images/logo17.png" />
          <img src="images/logo18.png" />
          <img src="images/logo19.png" />
          <img src="images/logo20.png" />
          <img src="images/logo21.png" />
          <img src="images/logo22.png" />
          <img src="images/logo23.png" />
          <img src="images/logo24.png" />
          <img src="images/logo25.png" />
          <img src="images/logo26.png" />
          <img src="images/logo27.png" />
          <img src="images/logo28.png" />
          <img src="images/logo29.png" />
        </div>

        <div class="logos-slide">
          <img src="images/logo1.png" />
          <img src="images/logo2.png" />
          <img src="images/logo3.png" />
          <img src="images/logo4.png" />
          <img src="images/logo5.png" />
          <img src="images/logo6.png" />
          <img src="images/logo7.png" />
          <img src="images/logo8.png" />
          <img src="images/logo9.png" />
          <img src="images/logo10.png" />
          <img src="images/logo12.png" />
          <img src="images/logo13.png" />
          <img src="images/logo14.png" />
          <img src="images/logo15.png" />
          <img src="images/logo16.png" />
          <img src="images/logo17.png" />
          <img src="images/logo18.png" />
          <img src="images/logo19.png" />
          <img src="images/logo20.png" />
          <img src="images/logo21.png" />
          <img src="images/logo22.png" />
          <img src="images/logo23.png" />
          <img src="images/logo24.png" />
          <img src="images/logo25.png" />
          <img src="images/logo26.png" />
          <img src="images/logo27.png" />
          <img src="images/logo28.png" />
          <img src="images/logo29.png" />
        </div>
      </div>
    </>
  );
}

function Materials() {
  // Sample images – replace with your actual URLs
  const materialsData = [
    {
      title: "Hardware",
      image: "/images/hardware.jpg",
      description: `Our hardware items include a wide range of essential tools and components 
      such as nuts, bolts, screws, hacksaw blades, fasteners, hinges, locks, GI pipe fittings and more. 
      These high-quality materials are designed for durability and precision, suitable for construction, 
      manufacturing, and maintenance projects.`,
    },
    {
      title: "Electrical",
      image: "/images/electrical.jpg",
      description: `Explore our extensive selection of electrical goods, including cables, switches, 
      sockets, circuit breakers, lighting fixtures, and wiring accessories. Our electrical 
      materials are sourced from trusted manufacturers and comply with safety and efficiency 
      regulations making it ideal for residential, and industrial applications.`,
    },
    {
      title: "Safety Goods",
      image: "images/safety.jpg",
      description: `Safety is paramount in any workplace or project site. Our safety goods include 
      personal protective equipment (PPE) such as helmets, gloves, goggles, safety harnesses, 
      fire extinguishers, and first aid kits. All items are tested to comply with relevant 
      safety standards, ensuring protection against potential hazards.`,
    },
    {
      title: "Machinery Equipments",
      image: "images/machinary.jpg",
      description: `Our range of machinery equipment covers heavy-duty industrial tools and machines 
      including compressors, generators, drills, welding machines, and more. We also specialize in 
      concrete machinery such as mixer machines (10/7), mini mixer machines, earth hammers, vibrator 
      machines with nozzles, and vibrator needles. All necessary accessories and individual spare parts 
      for these machines are readily available.`,
    },
    {
      title: "Bricks",
      image: "images/bricks.jpg",
      description: `We offer a diverse range of high-quality bricks to meet various construction needs, 
      including red clay bricks, cement bricks, and AAC (Autoclaved Aerated Concrete) blocks. 
      Each type is manufactured for strength, uniformity, and durability that are suitable for residential, 
      commercial, and industrial projects.`,
    },
    {
      title: "Plywood",
      image: "images/plywood.jpg",
      description: `Our plywood includes shuttering plywood (4000 grade), film-coated plywood 
      available in 30kg and 23kg (12mm), and high-quality commercial plywood in all standard sizes. 
      We also supply MDF boards, gypsum boards, and durable ACC sheets. All products are manufactured 
      to meet durability standards making it ideal for industrial applications.`,
    },
  ];

  return (
    <div>
      <div
        className="heading"
        id="Materials"
        style={{ backgroundColor: "#ebb41d" }}
      >
        <h3 className="m-0">&mdash; MATERIALS &mdash;</h3>
      </div>

      <div className="container-fluid px-3 px-md-5">
        {" "}
        {/* Bootstrap container for responsive padding */}
        {materialsData.map((item, index) => (
          <div
            key={index}
            className="row align-items-center mb-5 py-4 rounded shadow"
            style={{
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              backgroundColor: "#ebb41d5f",
              maxWidth: "1200px",
              margin: "0 auto",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{
                  border: "4px solid #ebb41d",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="col-12 col-md-8 p-3 flex-column justify-content-center">
              <h4
                className="fw-bold mb-3 material-title"
                style={{
                  fontSize: "2.4rem", // Adjust for mobile
                  textAlign: "center",
                }}
              >
                {item.title}
              </h4>
              <p
                className="material-description"
                style={{
                  fontSize: "1.8rem", // Adjust for mobile
                  lineHeight: "1.4",
                  textAlign: "center",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
    useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwJkTUgNBSrA6gql7P95uUFWg3alH-HFNUQSAV3iXb8I4N1HbU_m4X0TPbNQJm3mSn9/exec';
    const form = document.forms['contact-form'];

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(() => alert("Thank you! your form is submitted successfully." ))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
    })
  }, []);

  return (
    <div className="contact-container" id="Contact">
      <h1>&mdash; CONTACT US &mdash;</h1>
      <div className="main-width-contact">
        <div className="row">
          <div className="contact-left">
            <a href="#" className="logo">
              <img src="images/logo.png" alt="Logo" />
              <span className="logo-text">National Sales Corporation</span>
            </a>
            <p>
              <i className="fa-solid fa-user"></i>Mr. Tapan Kumar Pandey
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>nscindia2@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i>+91 9733148724
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>M.G.Road, Jaigaon -
              736182, <br /> Dist. Alipurduar (W.B.)
            </p>
          </div>
          <div className="contact-right">
            <form
              name="contact-form"
              method="post"
              action="https://script.google.com/macros/s/AKfycbzWW1tWYdW3KmLfLUSo3qHbwaL3KbHWhggew6A90wBrSRO3efOW2-Zd2_ClKwf4lYEW/exec"
            >
              <input type="text" name="Name" placeholder="Your Fullname" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="10"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2025 National Sales Corporation</p>
      </div>
    </div>
  );
}

function App() {
  window.onload = function () {
    let navbar = document.querySelector(".header .navbar");

    document.querySelector("#menu").onclick = () => {
      navbar.classList.add("active");
    };

    document.querySelector("#close").onclick = () => {
      navbar.classList.remove("active");
    };
  };

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Materials />
      <Contact />
    </div>
  );
}

export default App;
