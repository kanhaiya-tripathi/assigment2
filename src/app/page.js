import React from "react";
import Header from "../components/Header";
import CategoryHeader from "@/components/CategoryHeader";
import CategoryList from "@/components/CategoryList";
import ProductCard from "@/components/ProductCard";

const HomePage = async () => {
  // const response = await axios.get("https://fakestoreapi.com/products ");
  // const products = response.data;
  // console.log(products);
  return (
    <main>
      <Header />
      <CategoryList />
      <CategoryHeader />
      <ProductCard  />
    </main>
  );
};  
export default HomePage;
