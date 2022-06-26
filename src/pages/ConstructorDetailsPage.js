import ConstructorDetails from "../components/constructors/ConstructorDetails";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import Wrapper from "../components/ui/Wrapper";

const ConstructorDetailsPage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <ConstructorDetails />
      </Wrapper>
      <Footer />
    </>
  );
};

export default ConstructorDetailsPage;
