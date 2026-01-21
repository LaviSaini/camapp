import servicesBg from "../assets/images/bg1.png";
import PageHero from "../components/PageHero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
const ServicePage = () => {
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

export default ServicePage;
