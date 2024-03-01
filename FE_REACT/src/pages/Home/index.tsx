import "styles/home.scss";
import toastify from "helpers/toastify";

const Home = () => {
    return (
        <div className="headingDiv">
            <h1 onClick={() => toastify("Hello coders!")} className="heading">React snippet</h1>
        </div>
    );
};
  
export default Home;