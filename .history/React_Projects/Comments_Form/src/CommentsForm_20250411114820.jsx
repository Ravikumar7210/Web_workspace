import { useState } from "react";
export default function CommentsForm() {

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) =>{
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value}
        })
    }

    let handleSubmit =(event) => {
        console.log(formData);
        event.preventDefault();
    }

    return (
 <div>
 <h4>Give a comment</h4> 
 <form onSubmit={handleSubmit}> 
 <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange}></input>
 <br></br><br></br>
 <label>Remarks</label>
 <textarea  type="text" value={formData.remarks} onChange={handleInputChange}></textarea>
 <br></br><br></br>
 <input 
 placeholder="Rating"
 onChange={handleInputChange}
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