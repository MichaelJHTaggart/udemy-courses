import "./newEventForm.css";

export default function newEventForm() {

 return (
  <form className="new-event-form">
   <label>
    <span>Event Title:</span>
    <input type="text" placeholder="Event Title" />
   </label>

   <label>
    <span>Event Date:</span>
    <input type="date" placeholder="Event Date" />
   </label>

   <button>Submit Form</button>

  </form>
 );
}
