import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('price');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts('AMZ', 'Laptop', 10, 1, 10000);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortCriteria) {
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  return (
    <div>
      <h1>All Products</h1>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortCriteria} onChange={handleSortChange}>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
      <ul>
        {sortedProducts.map((product, index) => (
          <li key={index}>
            <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
