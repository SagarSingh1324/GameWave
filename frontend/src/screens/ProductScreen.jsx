import { useParams } from "react-router-dom";


const ProductScreen = () => {
    const {id: productId } = useParams();
     
  return (
    <div>ProductScreen for product {productId}</div>
  )
}

export default ProductScreen;
