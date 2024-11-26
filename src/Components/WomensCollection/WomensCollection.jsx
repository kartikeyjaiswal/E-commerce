
import React from 'react';
import './WomensCollection.css';

const MensCollection = () => {
    const products = [
        { id: 1, name: "Product 1", price: "₹999" },
        { id: 2, name: "Product 2", price: "₹1,499" },
        { id: 3, name: "Product 3", price: "₹799" },
        { id: 4, name: "Product 4", price: "₹2,999" },
        { id: 5, name: "Product 5", price: "₹1,999" },
        { id: 6, name: "Product 6", price: "₹899" },
    ];

    return (
        <div className="mens-collection">
            <h1 className="heading">Men's Collection</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        {/* Placeholder image */}
                        <div className="product-image">
                            <img
                                src={`https://via.placeholder.com/150?text=${product.name}`}
                                alt={product.name}
                            />
                        </div>
                        <div className="product-details">
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">{product.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WomensCollection;
