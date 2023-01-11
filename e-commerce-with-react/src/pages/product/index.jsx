import React from "react";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  return (
    <div>
      <Helmet>
        <title>Product-Tammy demo</title>
        <meta name="description" content="test on react-helmet" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <h1>ProductPage</h1>
    </div>
  );
};

export default ProductPage;
