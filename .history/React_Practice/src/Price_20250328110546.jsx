export default function Price ({oldPrice,newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    }

    let newStyles = {
        fontWeight: "bold",
    }

    let styles = {
        backgroundColor: "#E0C367",
        height: "30px",
        borderBottomRadius: "5px",
    }
    
    return (
        <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp;
        <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
