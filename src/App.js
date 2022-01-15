import Banner from "./Containers/Banner";
import Navbar from "./Containers/navbar";
import Context from "./Context";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Banner />
      <Banner />
    </div>
  );
}
export default () => {
  <Context>
    <App />
  </Context>;
};
