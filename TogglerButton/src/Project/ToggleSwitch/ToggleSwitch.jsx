import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
// /le,dls

export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);

    }

    const checkIsOn = isOn ? "on" : "off";
    const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };

    return (

       <>
       <h1 className="flex" style={{color:"#000",textAlign:"center"}}>Toggle Switch Button<IoIosSwitch style={{color:"red",textAlign:"center",}}/></h1>
       <div className="toggle-switch"
            style={toggleBGColor} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}
                </span>
            </div>
        </div>
        </>
        
    );
};