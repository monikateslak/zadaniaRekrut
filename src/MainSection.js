import React from "react";
import GetData from "./List";

function MainSection () {
    return(
        <div className="main-section-box">
            <main className="list-data">
                <span>
                    <GetData></GetData>
                </span>
            </main>
        </div>
    )
}

export default MainSection