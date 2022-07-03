import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby taiyaki echo park ennui literally edison bulb beard PBR&B.
            Yuccie umami normcore taiyaki tattooed slow-carb keffiyeh whatever
            trust fund distillery chambray biodiesel twee. Wayfarers literally
            edison bulb flannel four loko humblebrag woke green juice small
            batch dreamcatcher. Biodiesel helvetica mustache intelligentsia
            yuccie. VHS hot chicken salvia mixtape.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
