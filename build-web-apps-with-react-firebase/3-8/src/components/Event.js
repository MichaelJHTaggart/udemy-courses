import styles from "./EventList.module.css"

export default function Event({event, index, handleDeleteEvent}) {
 return (
  <div className={styles.card}>
   <h3>{index} - {event.title}</h3>
   <button onClick={() => { handleDeleteEvent(event.id) }}>delete event</button>
  </div>
 );
}
