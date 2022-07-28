import React, { useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {
    let storedSideOpen = localStorage.sideOpen ? JSON.parse(localStorage.sideOpen) : true;
    let storedSelectedProduct = localStorage.selectedProduct ? JSON.parse(localStorage.selectedProduct) : "";

    // TODO: Replace with state variable - complete
    const [sideOpen, setSideOpen] = useState(storedSideOpen);
    const [selectedProduct, setSelectedProduct] = useState(storedSelectedProduct);
    
    // Open side panel
    useEffect(() => {
        // console.log(`selectedProduct CHANGED TO`, selectedProduct);
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        if (selectedProduct) setSideOpen(true);
    }, [selectedProduct])

    // Deselect product
    useEffect(() => {
        // console.log(`sideOpen CHANGED TO`, sideOpen);
        localStorage.setItem('sideOpen', sideOpen);  
        if (!sideOpen) setSelectedProduct("");
    }, [sideOpen])

    console.log('ProductView Refresh')
    
    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => setSelectedProduct(item)}
                            isSelected={selectedProduct.id === item.id}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                        // recall the previous useState and change it
                         onClick={() => setSideOpen(prev => !prev)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails visible={sideOpen} product={selectedProduct} />
            </div>
        </div>
    );
}

export default ProductView;
