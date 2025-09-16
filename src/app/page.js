import React from "react";
import Header from "../components/Header";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryList from "@/components/CategoryList";
import ProductCard from "@/components/ProductCard";
import axios from "axios";

const HomePage = async () => {
  const response = await axios.get("https://fakestoreapi.com/products ");
  const products = response.data;
  console.log(products);
  return (
    <main>
      <Header />
      <CategoryList />
      <CategoryHeader />
      <ProductCard products={products} />
    </main>
  );
};  
export default HomePage;