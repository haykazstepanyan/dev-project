import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  return (
    <div>
      <h1>Product number {params.productId} page</h1>
    </div>
  );
};

export default Product;
