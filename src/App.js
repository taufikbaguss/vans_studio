import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import BestSeller from "./components/BestSeller";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/** Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/** End of Intro Section */}

      {/** Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/** End of Trending Section */}

      {/** Best Seller Section */}
      <div className="bseller">{/* <BestSeller /> */}</div>
      {/** End of Best Seller Section */}
    </div>
  );
}

export default App;
