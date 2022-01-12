import Banner from "./Containers/Banner";
import Navbar from "./Containers/navbar";
import { apikey, baseurl } from "./Urls";

function App(props) {
  return (
    <div>
      <Navbar />
      <Banner />
      <Banner />
      <Banner />
    </div>
  );
}
export default App;
