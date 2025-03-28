export default function Price ({oldPrice,newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    }

    let newStyles = {
        fontWeight: "bold",
    }

    let styles = {
        backgroundColor: "#E0C367",
        height: "50px",
    }
    
    return (
        <div>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp;
        <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
