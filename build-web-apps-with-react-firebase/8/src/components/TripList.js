import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

//styles
import "./TripList.css";

export function TripList(props) {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, error, isPending } = useFetch(url);

  return (
    <div className="trip-list">
      <h1>Trip List</h1>
      {isPending && <div>Loading Trips</div>}
      {error && <div>{error}</div>}
      <ul>
        {
          trips && trips.map(trip => {
            return (
              <li key={trip.id}>
                <h2>{trip.title}</h2>
                <p>{trip.price}</p>
              </li>
            )
          }
          )
        }
      </ul>
      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/trips")}>All</button>
        <button onClick={() => setUrl("http://localhost:3000/trips?loc=Venice")}>Venice Trips</button>
        <button onClick={() => setUrl("http://localhost:3000/trips?loc=America")}>America Trips</button>
      </div>
    </div>
  );
}

export default TripList;
