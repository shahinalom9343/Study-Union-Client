import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Faq from "../Components/Faq";
import Features from "../Components/Features";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Study Union | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <Faq></Faq>
      <Team></Team>
    </div>
  );
};

export default Home;
