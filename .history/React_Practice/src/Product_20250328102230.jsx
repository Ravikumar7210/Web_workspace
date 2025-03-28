import "./Product.css"
import Price from "./Price.jsx";

function Product ({ title }){
// let oldPrices = ["11,999", "8,999", "1,999", "2,999"];
// let newPrices = ["9,999", "7,999", "1,499", "2,499"];

return (
    <div className="Product">
    <h4>{title}</h4>
    <p>Description</p>
    <Price oldprice="123" newPrice = "3234"/>
    </div>
);
}



export default Product 