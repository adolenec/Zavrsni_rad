import Constructors from "../components/constructors/Constructors";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import Wrapper from "../components/ui/Wrapper";

const ConstructorsPage = () => {
  return (
    <>
      <MainNavigation />
      <Wrapper>
        <Constructors />
      </Wrapper>
      <Footer />
    </>
  );
};

export default ConstructorsPage;
