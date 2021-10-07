import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Navbar, ProductRequire, Footer } from "../../components/index";
import { supabase } from "../../supabaseClient";

const ProductRequirements = () => {
  const [products, setProducts] = useState({});
  let { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    let { data: posts, error } = await supabase
      .from("posts")
      .select()
      .eq("id", id)
      .single();
    console.log(error);
    setProducts(posts);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="relative">
      <Navbar />
      <ProductRequire product={products} />
      <Footer />
    </div>
  );
};

export default ProductRequirements;
