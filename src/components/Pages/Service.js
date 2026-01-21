import servicesBg from "../../assets/images/bg1.png";
import PageHero from "../PageHero";
import Services from "../Services";
import WhyChooseUs from "../WhyChooseUs";
const Services = () => {
  return (
    <>
      <PageHero
        title="SERVICES"
        breadcrumb={["Home", "Services"]}
        backgroundImage={servicesBg}
      />
      <Services/>
      <WhyChooseUs/>
    </>
  );
};

export default Services;
