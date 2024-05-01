import React, { useState, useMemo } from "react";

function NumberVisit(props: { number: number }) {
    const { number } = props;

    function expensive(number: number) {
        console.log("Computing expensive function");
        return number + number;
    }

    const result = useMemo(() => expensive(number), [number]);

    const [toogle, setToogle] = useState(false);

   

    return (
        <>
            <h1>{result}</h1>
            <button onClick={() => setToogle(!toogle)}>{toogle.toString()}</button>
        </>
    );
}

export default NumberVisit;
