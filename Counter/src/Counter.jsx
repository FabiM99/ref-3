import { useRef, useState, useEffect } from "react"

export function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    const prevDirection = useRef(null);

    useEffect(() => {
        const direction = count > prevDirection.current ? "up" : "down";
        if (prevDirection.current !== null && prevDirection.current !== direction) {
            console.log(direction);
        }
        prevDirection.current = count;
    }, [count]);
    
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };



    return (
        <div className="counter-container">
            <p className="counter-display">Count: {count}</p>
            <div className="counter-buttons">
                <button className="counter-button" type="button" onClick={increment}>+</button>
                <button className="counter-button" type="button" onClick={decrement}>-</button>
            </div>
        </div>
    )
}