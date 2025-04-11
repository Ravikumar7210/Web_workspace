import { useState } from "react";
export default function CommentsForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    return (
 <div>
 <h4>Give a comment</h4> 
 <form> 
 <input placeholder="username" type="text" value={formData.username}></input>
 <br></br><br></br>
 <textarea placeholder="Add few remarks" type="text" value={formData.remarks}></textarea>
 <br></br><br></br>
 <input 
 placeholder="Rating"
  type="number" 
  min={1} 
  max={5} 
  value={formData.rating}>
  </input>
 <br></br><br></br>
 <button type="submit">Submit</button>
 </form>
 </div>
 
);
}