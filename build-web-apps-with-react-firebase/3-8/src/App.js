import { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Modal from './components/Modal';
import Title from "./components/Title";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: 'marios birthday bash', id: 1 },
    { title: 'bowsers birthday bash', id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ])

  const handleDeleteEvent = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id
      })
    )
  }
  const handleClose = () =>{
    setShowModal(false);
  }

  let subtitle = "All the latest events in Marioland"

  return (
    <div className="App">

      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div>}

      {!showEvents && <div>
        <button onClick={() => setShowEvents(true)}>Show Events</button>
      </div>}

      {showEvents && <EventList events={events} handleDeleteEvent={handleDeleteEvent}/>}

      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>

{
  showModal && <Modal handleClose={handleClose}>
        <h1>10% Off Coupon Code!</h1>
        <p>Use the code NINJA10 at the checkout</p>
      </Modal>
}
    </div>
  );
}

export default App;
