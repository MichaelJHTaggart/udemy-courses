import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({handleEvents, handleClose}) {

 const [title, setTitle] = useState("");
 const [date, setDate] = useState("");

 // const handleChange = (event) =>{
 //  setTitle(event.target.value);
 // }

 const resetForm = (event) => {
  setTitle("");
  setDate("");
 }

 const handleSubmit = (e) => {
  e.preventDefault();

  const event = {
   title: title,
   date: date,
   id: Math.floor(Math.random() * 10000),
  }
  handleEvents(event);
  handleClose()
  resetForm();
 }

 return (
  <form className="new-event-form" onSubmit={handleSubmit}>
   <label>
    <span>Event Title:</span>
    <input
     type="text"
     placeholder="Event Title"
     onChange={(e) => setTitle(e.target.value)}
     value={title}
    />
   </label>

   <label>
    <span>Event Date:</span>
    <input
     type="date"
     placeholder="Event Date"
     onChange={(e) => setDate(e.target.value)}
     value={date}
    />
   </label>

   <button>Submit Form</button>
   <p> title - {title}, date - {date}</p>
   <p onClick={resetForm}>reset the form</p>
  </form>
 );
}
