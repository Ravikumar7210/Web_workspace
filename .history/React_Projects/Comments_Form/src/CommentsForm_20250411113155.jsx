export default function CommentsForm() {

    return (
 <div>
 <h4>Give a comment</h4> 
 <form> 
 <input placeholder="username" type="text"></input>
 <br></br><br></br>
 <textarea placeholder="Remarks" type="text"></textarea>
 <br></br><br></br>
 <input placeholder="Rating" type="number"></input>
 <button type="submit">Submit</button>
 </form>
 </div>
 
);
}