import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import Schedule from "../components/schedule/Schedule";
import Wrapper from "../components/ui/Wrapper";

const SchedulePage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <Schedule/>
      </Wrapper>
      <Footer></Footer>
    </>
  );
};

export default SchedulePage;
