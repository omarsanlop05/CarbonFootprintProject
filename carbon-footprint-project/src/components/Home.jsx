import React from "react";
import './Home.css';
import Info from "./Info";
import Meet from "./Meet";
import Data from "./Data";

function Home(){
    return(
        <>            
            {/* Info Section */}
            <Info />

            {/* Data Section*/}
            <Data/>

            {/* Meet us Section */}
            <Meet />
        </>
    );
}

export default Home;