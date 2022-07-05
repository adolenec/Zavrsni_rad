import Drivers from "../components/drivers/Drivers";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import Wrapper from "../components/ui/Wrapper";

const DriversPage = () => {
    return (
        <>
            <MainNavigation/>
            <Wrapper>
                <Drivers/>
            </Wrapper>
            <Footer/>
        </>
    )
}

export default DriversPage;