import servicesBg from "../assets/images/bg1.png";
import ContactSection from "../components/ContactSection";
import PageHero from "../components/PageHero";

const ContactPage = () => {
  return (
    <>
      <PageHero
        title="CONTACT US"
        breadcrumb={["Home", "Contact Us"]}
        backgroundImage={servicesBg}
      />
      <ContactSection/>
    </>
  );
};

export default ContactPage;
