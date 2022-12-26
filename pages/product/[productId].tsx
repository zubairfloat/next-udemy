import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const productRouter = router.query.productId;
  return (
    <div>
      <h2>Product details {productRouter}</h2>
    </div>
  );
};

export default ProductDetails;
