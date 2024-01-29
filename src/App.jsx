import Aboutus from "./component/Aboutus";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Questions from "./component/Questions";
import Contactus from "./component/Contactus";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import Service from "./component/Service";
import Courses from "./component/Courses";
import Testimonial from "./component/Testimonial ";
import Solutions from "./component/Solutions";
import Servicetwo from "./component/Servicetwo";
import Whyus from "./component/Whyus";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Slider />
      <Aboutus />
      <Questions />
      <Courses />
      <Service />
      <Servicetwo />
      <Whyus/>
      <Solutions />
      <Testimonial />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
