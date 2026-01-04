import { createContext, useContext, useMemo, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 0) setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    )
}