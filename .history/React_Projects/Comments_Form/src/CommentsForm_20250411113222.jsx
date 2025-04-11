export default function CommentsForm() {

    return (
 <div>
 <h4>Give a comment</h4> 
 <form> 
 <input placeholder="username" type="text"></input>
 <br></br><br></br>
 <textarea placeholder="Remarks" type="text"></textarea>
 <br></br><br></br>
 <input placeholder="Rating" type="number" min={1} max={5}></input>
 <br></br><br></br>
 <button type="submit">Submit</button>
 </form>
 </div>
 
);
}