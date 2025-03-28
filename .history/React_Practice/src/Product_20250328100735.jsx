import "./Product.css"
import Price from "./Price.jsx";

function Product ({ title }){

return (
    <div className="Product">
    <p>Title</p>
    <p>Description</p>
    <Price/>
    </div>
);
}



export default Product 