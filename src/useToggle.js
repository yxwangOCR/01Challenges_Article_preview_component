import { useState } from "react";
const useToggle = (initialState) => {
    const [show, setShow] = useState(initialState);
    const toggle = () => setShow(!show);
    return [show, toggle];
};

export default useToggle;
