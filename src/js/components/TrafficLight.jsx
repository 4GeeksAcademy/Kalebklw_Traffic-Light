import React, {useState} from "react";
import './index.css'

const TrafficLight = () => {

const [active, setActive] = useState()
    const changeactive = () => {
        setActive()
    };

    return (
        <div className="rod ">
            <div className="base contianer-fluid justify-content-center">
                
                <div className="lights ">
                    {/* Red Light */}
                    <div 
                    onClick={() => setActive("red")} 
                    className={`redLight ${active === "red" ? "glow" : "" }`}>
                    </div>
                    
                    {/* Yellow Light */}
                    <div 
                    onClick={() => setActive("yellow")}
                    className={`yellowLight ${active === "yellow" ? "glow" : ""}`}>
                    </div>
                    
                    {/* Green Light */}
                    <div
                    onClick={() => setActive("green")}
                    className={`greenLight ${active === "green" ? "glow" : ""}`}>
                    </div>
                </div>

            </div>
        </div>
        
    );
};

export default TrafficLight;