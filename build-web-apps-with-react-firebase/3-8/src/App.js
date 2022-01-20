import { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Modal from './components/Modal';
import Title from "./components/Title";
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: 'marios birthday bash', id: 1 },
    { title: 'bowsers birthday bash', id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ])

  const handleEvents = (newEvent) => {
    setEvents([...events, newEvent])
    // setEvents((prevEvents) => {
    //   return [...prevEvents, newEvent]
    // })
  }

  const handleDeleteEvent = (id) => {
    setEvents(
      events.filter((event) => {
        return id !== event.id
      })
    )
  }
  const handleClose = () => {
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

      {showEvents && <EventList events={events} handleDeleteEvent={handleDeleteEvent} />}

      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {
        showModal && <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventForm handleClose={handleClose} handleEvents={handleEvents} />
        </Modal>
      }
    </div>
  );
}

export default App;
