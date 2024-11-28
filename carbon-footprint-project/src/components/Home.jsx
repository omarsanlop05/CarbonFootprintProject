import React from "react";
import './Home.css';
import Header from "./Header";
import Welcome from './Welcome';
import Info from "./Info";
import Meet from "./Meet";
import Footer from "./Footer";
import Data from "./Data";

function Home(){
    return(
        <>
            {/*Header Section*/}
            <Header />
            
            {/* Main Section */}
            <Welcome />

            {/* Info Section */}
            <Info />

            {/* Data Section*/}
            <Data/>

            {/* Meet us Section */}
            <Meet />

            {/* Footer Section */}
            <Footer />
        </>
    );
}

export default Home;