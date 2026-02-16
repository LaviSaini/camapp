import servicesBg from "../assets/images/bg1.png";
import AboveFooter from "../components/AboveFooter";
import PageHero from "../components/PageHero";
import Products from "../components/Products";
const ProductPage = () => {
  return (
    <>
      <PageHero
        title="PRODUCTS"
        breadcrumb={["Home", "Products"]}
        backgroundImage={servicesBg}
      />
      <Products/>
      {/* <WhyChooseUs/> */}
      <AboveFooter/>
    </>
  );
};

export default ProductPage;
