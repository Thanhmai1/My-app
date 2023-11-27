import React from "react";
import { useState } from "react";
export default function MyApp(){
    return (
        <div>
            <h1>Counters that uupdate separately </h1>
            <MyButton/>
            <MyButton/>
        </div>
    );
}
function MyButton(){
    const[count,setCount] = useState(0);
    function handClick(){
        setCount(count + 1);
    }
    return (
        <button onClick={handClick}>
            Clicked {count} times
        </button>
    );
}