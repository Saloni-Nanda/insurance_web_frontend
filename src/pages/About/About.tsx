import { Helmet } from "react-helmet-async"
import AboutSection from "../../components/About/AboutSection"
import AboutSection2 from "../../components/About/AboutSection2"
import AboutSection3 from "../../components/About/AboutSection3"

const About = () => {
  return (
    <div>
       <Helmet>
              <title>About RBG HR Services LLP | Exclusive Insurance Recruitment
Partner</title>
              <meta
        name="description"
        content="Founded in 2014, RBG HR Services LLP is India’s
trusted hiring partner for the insurance industry. Discover our mission,
values, and leadership.
"
      />;
            </Helmet>
      <AboutSection/>
      <AboutSection2/>
      <AboutSection3/>
    </div>
  )
}

export default About
