import "./Product.css"
import Price from "./Price.jsx";

function Product ({ title, idx }){
let oldPrices = ["11,999", "8,999", "1,999", "2,999"];
let newPrices = ["9,999", "7,999", "1,499", "2,499"];
let Description = ["8,000 DPI", "intuitive touch", "designed for ipad pro", "Bluetooth wireless"];

return (
    <div className="Product">
    <h4>{title}</h4>
    <p>Description</p>
    <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
);
}



export default Product 