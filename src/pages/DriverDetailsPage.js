import DriverDetails from "../components/drivers/DriverDetails";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import Wrapper from "../components/ui/Wrapper";

const DriverDetailsPage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <DriverDetails />
      </Wrapper>
      <Footer/>
    </>
  );
};

export default DriverDetailsPage;
