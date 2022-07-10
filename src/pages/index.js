import { Fragment } from "react";
import Hero from "../components/organisms/Hero/hero";
import Header from "../components/atoms/Header/header";
import SVGMap from "../components/organisms/SVGMap/svgMap";
import ControlPanel from "../components/organisms/ControlPanel/controlPanel";
import Footer from "../components/atoms/Footer/footer";

const HomePage = () => {
  return (
    <Fragment>
      <div className="hero row">
        <Hero />
      </div>
      {/* <div className="europe h-100">
        <header className="App-header">
          <Header />
        </header>
        <div className="container">
          <div className="row">
            <SVGMap />
            <ControlPanel />
          </div>
        </div>
        <Footer />
      </div> */}
    </Fragment>
  );
};

// Reserved Name, Next.JS recognized this and will call this before calling the component function (HomePage)
// Prepares props for this page, could contain the data this page needs
// is allowed to be asyncronous (async promise), so Next.JS will wait for the promise to resolve
// waits for data to be loaded and THEN it loads the component function (HomePage) (good for SEO -> source file is populated)

// PROBLEMS with getStaticProps => data could be outdated (not a problem for pages that change rarely)
// // if data changes frequently there's a property "revalidate" that handles the above issue
// // REVALIDADE => number of seconds until it re-generates the page for an incoming request

// // getStaticProps ensure that your pre-rendered page contains data that you might need to wait for
// // with revalidate you can ensure that this page is updated regularly after deployment

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};

export default HomePage;
