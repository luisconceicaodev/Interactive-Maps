import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../components/atoms/Navigation/styles/navigation.styles.scss";
import "../components/organisms/Hero/styles/hero.styles.scss";
import "../components/_common/global.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// component will be the page content of our pages
// we can wrap component with our "sections" / "layouts"
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
