import "./productDetails.css";
import ProductsInfo from "../../data/productsInfo";

const ProductDetails = ({ id }) => {
  const product = ProductsInfo.map((product) => {
    console.log(id);
    if ((product.id = id)) {
      return product;
    }
  });
  console.log(product);
  return (
    <div className="product-details">
      <h3>Product Detail</h3>
      <div className="product-content">
        <img
          className="product-image"
          src={product.imgUrl}
          alt={product.productName}
        />

        <div className="text-detail">
          <p>{product.category}</p>
          <h4>{product.productName}</h4>
          <p id="price">${product.price}</p>
          {/* <p id="out-of-stock">Out of Stock</p> */}
          <p id="description">{product.descrioption}</p>
          <button>Add To Cart</button> <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
