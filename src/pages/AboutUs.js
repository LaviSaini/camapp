import servicesBg from "../assets/images/bg1.png";
import AboutSecurity from "../components/AboutSecurity";
import AboveFooter from "../components/AboveFooter";
import CommitmentSection from "../components/CommitmentSection";
import ExpertiseSection from "../components/ExpertiseSection";
import PageHero from "../components/PageHero";
import MissionVision from "../components/Vision";
import WhyChooseUs from "../components/WhyChooseUs";
const AboutPage = () => {
  return (
    <>
      <PageHero
        title="ABOUT US"
        breadcrumb={["Home", "About Us"]}
        backgroundImage={servicesBg}
      />
      <AboutSecurity />
      <MissionVision />
      <WhyChooseUs />
      <CommitmentSection />
      <ExpertiseSection />
      <AboveFooter />
    </>
  );
};

export default AboutPage;
