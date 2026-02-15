import servicesBg from "../assets/images/Solutions.jpeg";
import AboveFooter from "../components/AboveFooter";
import PageHero from "../components/PageHero";
import Solutions from "../components/Solutions";
const SolutionPage = () => {
  return (
    <>
      <PageHero
        title="SOLUTIONS"
        breadcrumb={["Home", "Solutions"]}
        backgroundImage={servicesBg}
      />
      <Solutions/>
      {/* <WhyChooseUs/> */}
      <AboveFooter/>
    </>
  );
};

export default SolutionPage;
