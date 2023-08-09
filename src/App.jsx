import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import NewEventForm from "./Components/NewEventForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [events, setEvents] = useState(eventsData);

  return (
    <div className="App">
      <Header />
      <main className="container">
        <NewEventForm events={events} setEvents={setEvents} />
        <Event events={events} setEvents={setEvents} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
