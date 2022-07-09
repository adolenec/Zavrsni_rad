import Footer from "../components/footer/Footer";
import MainNavigation from "../components/header/MainNavigation";
import DriverStandings from "../components/results/standings/DriverStandings";
import Wrapper from "../components/ui/Wrapper";

const StandingsPage = () => {
    return (
        <>
        <MainNavigation/>
        <Wrapper>
            <DriverStandings/>
        </Wrapper>
        <Footer></Footer>
        </>
    )
}

export default StandingsPage;