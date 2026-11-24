import { useState } from 'react';
import './AddToCart.css';

function AddToCart() {

    // Input states
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    // Cart state
    const [cart, setCart] = useState([]);

    // Add product function
    function handleAddToCart(event) {

        event.preventDefault();

        // Validation
        if (!productName.trim() || productPrice === "") {
            alert("Please enter product details!");
            return;
        }

        if (Number(productPrice) <= 0 || !Number.isFinite(Number(productPrice))) {
            alert("Please enter a valid price!");
            return;
        }

        // Create product object
        const newProduct = {
            id: Date.now(),
            name: productName,
            price: Number(productPrice)
        };

        // Add product to cart
        setCart([...cart, newProduct]);

        // Clear input fields
        setProductName("");
        setProductPrice("");
    }

    // Remove product
    function handleRemove(id) {

        setCart(cart.filter(product => product.id !== id));

    }

    // Calculate total
    const total = cart.reduce(
        (sum, product) => sum + product.price,
        0
    );

    return (

        <div className="store-container">

            <h1>Product Store</h1>

            {/* Product Form */}

            <div className="product-form">

                <h2>Add New Product</h2>

                <form onSubmit={handleAddToCart}>

                    <input
                        type="text"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Enter product price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />

                    <button type="submit">
                        Add to Cart
                    </button>

                </form>

            </div>

            {/* Shopping Cart */}

            <div className="cart-section">

                <h2>Shopping Cart ({cart.length})</h2>

                {cart.length === 0 ? (

                    <p className="empty-cart">
                        Your cart is empty!
                    </p>

                ) : (

                    cart.map((product) => (

                        <div className="cart-item" key={product.id}>

                            <div>
                                <h3>{product.name}</h3>
                                <p>Rs. {product.price}</p>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => handleRemove(product.id)}
                            >
                                Remove
                            </button>

                        </div>

                    ))

                )}

                <div className="total-section">

                    <h2>Total: Rs. {total}</h2>

                </div>

            </div>

        </div>

    );

}

export default AddToCart;
