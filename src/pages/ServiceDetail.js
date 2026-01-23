import servicesBg from "../assets/images/bg1.png";
import PageHero from "../components/PageHero";
import Services from "../components/Services";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
const ServiceDetail = () => {
  return (
    <>
      <PageHero
        title="24/7 MONITORING SERVICES"
        breadcrumb={["Home", "24/7 Monitoring Services"]}
        backgroundImage={servicesBg}
      />
      <ServicesOverview/>
    </>
  );
};

export default ServiceDetail;
