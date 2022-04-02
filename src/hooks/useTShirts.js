import { useEffect, useState } from "react"

const useTShirts = () => {
    const [tshirts, settshirts] = useState([]);
    useEffect(() => {
        fetch('tshirts.json')
            .then(res => res.json())
            .then(data => settshirts(data));
    }, []);
    return [tshirts, settshirts];
}

export default useTShirts;