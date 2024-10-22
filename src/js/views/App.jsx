import React from "react";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";

function App() {
    return (
        <>
        {/* navbar */}
            <div className="bg-dark">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {/* jumbotron */}
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-12">
                        <Jumbotron />
                    </div>
                </div>
                {/* card */}
                <div className="row d-flex justify-content-center mb-4">
                    <div className="col-md-6 col-xxl-3">
                        <Card/>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <Card/>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <Card/>
                    </div>
                    <div className="col-md-6 col-xxl-3">
                        <Card/>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-white text-center py-5">Copyright @ Your Website 2019</div>
        </>
    )
}

export default App