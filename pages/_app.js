import "../styles/globals.css";

//INTERNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
// import { Discover } from '../components/NavBar';
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (

  <div>
    <NFTMarketplaceProvider>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </NFTMarketplaceProvider>
  </div>

);





export default MyApp;
