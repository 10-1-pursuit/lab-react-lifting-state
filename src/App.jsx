import { useState } from "react";
import eventsData from "./data";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewEventForm from "./Components/NewEventForm";
import Event from "./Components/Event";

function App() {
  // declare a state variable called events and have setEvents as the setter function.
  // events value is set to eventsData array
  const [events, setEvents] = useState(eventsData);

  // this function adds a new event to the events list. It receives an event object as an argument
  // and uses the setEvents function to update events state. The new event is added to the beginning of the current list using the spread operator
  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  // NewEventForm passes handleAddEvent function as a prop allowing it to trigger the addition of a new event of the list when form is submitted.
  // Event uses map to render the Event component for each event in the events array, the key attribute is set to tthe id of each event to update the list when changes occur
  return (
    <div className="App">
      <Header />
      <main>
        <div className="new-event">
          <NewEventForm handleAddEvent={handleAddEvent} />
        </div>
        <div className="events">
          <ul>
            {events.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;