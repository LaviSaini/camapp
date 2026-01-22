import servicesBg from "../assets/images/bg1.png";
import AboutSecurity from "../components/AboutSecurity";
import AboveFooter from "../components/AboveFooter";
import PageHero from "../components/PageHero";
import WhyChooseUs from "../components/WhyChooseUs";
const AboutPage = () => {
  return (
    <>
      <PageHero
        title="ABOUT US"
        breadcrumb={["Home", "About Us"]}
        backgroundImage={servicesBg}
      />
      <AboutSecurity/>
      <WhyChooseUs/>
      <AboveFooter/>
    </>
  );
};

export default AboutPage;
