import Product from "./Product.jsx";

function ProductTab () {

return (
styles = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f0f0f0"
}
}
<div style={styles}>
<Product title = "Logitech MX Master" idx={0}/>
<Product  title = "Apple Pencil (2nd Gen)" idx={1}/>
<Product title = "Zebronics zeb-transfrom" idx={2}/>
<Product title = "Petronics Toad 23" idx={3}/>
</div>

);   

}

export default ProductTab