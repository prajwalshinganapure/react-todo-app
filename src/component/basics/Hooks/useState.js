import React, { Component, useState } from "react";
import "./style.css";

const Count = () => {
    const[value, setValue] = useState(1);
    
    return(
        <>
        <div className="main">
            <p>{value}</p>
            <button onClick={() => {
                const Whole = Math.floor(Math.random() * 100) ;

                const Decimal = Math.floor(Math.random() * 100)
                .toString()
                .padStart(2, "0")

                const randomNum = `${Whole}.${Decimal}`;
                setValue(randomNum);
            }
        }
        >INCR</button>
           <button onClick={() => { setValue(value -1)    }
        }
        >DICR</button>    
        </div>
        </>
    )
}

export default Count