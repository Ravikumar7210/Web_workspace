import "./Product.css"
import Price from "./Price.jsx";

function Product ({ title, idx }){
let oldPrices = ["11,999", "8,999", "1,999", "2,999"];
let newPrices = ["9,999", "7,999", "1,499", "2,499"];
let Description = ["8,000 DPI", "5 programmable buttons"] ["intuitive surface", "designed for ipad pro"] ["designed for ipad pro","intuitive surface" ][ "Bluetooth wireless", "Optical orientation"];

return (
    <div className="Product">
    <h4>{title}</h4>
    <p>{Description[idx][0]}</p>
    <p>{Description[idx][1]}</p>
    <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
);
}



export default Product 