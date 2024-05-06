import { useEffect, useState } from "react";
import './LoadButton.css';

export default function LoadButton() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const resp = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await resp.json();
            console.log(data)

            if (data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false);
            };

        } catch (e) {
            console.log(e);
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableBtn(true);
        };
    }, [products])

    if (loading) {
        return <div>Loading data... Please wait!</div>
    }

    return (
        <div className="load-container">
            <div className="product-container">
                {
                    products && products.length ?
                        products.map(item => <div className="product" key={item.id * Math.floor(Math.random() * 1600)}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </div>)
                        : null
                }
            </div>
            <div className="button-container">
                <button
                    disabled={disableBtn}
                    onClick={() => setCount(count + 1)}>
                    Load More
                </button>
                {
                    disableBtn ? <p>You have reached the limit.</p> : null
                }
            </div>
        </div>
    );
};