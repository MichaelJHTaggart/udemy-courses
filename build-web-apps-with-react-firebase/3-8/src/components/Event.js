export default function Event({event, index, handleDeleteEvent}) {
 return (
  <div>
   <h3>{index} - {event.title}</h3>
   <button onClick={() => { handleDeleteEvent(event.id) }}>delete event</button>
  </div>
 );
}
