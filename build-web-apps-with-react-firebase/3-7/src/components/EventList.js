import Event from "./Event"

export default function EventList( { events, handleDeleteEvent } ) {
  return (
  <>

  {events.map((event, index) => {
    return (
    <Event key={event.id} event={event} index={index} handleDeleteEvent={handleDeleteEvent}/>
    )
  })}

  </>
  );
}
