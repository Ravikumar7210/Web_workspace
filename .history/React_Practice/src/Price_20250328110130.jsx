export default function Price ({oldPrice,newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    }

    let newStyles = {
        textDecoration: "bold",
    }
    
    return (
        <div>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp;
        <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
