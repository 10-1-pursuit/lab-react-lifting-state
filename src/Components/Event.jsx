import { useState } from "react";

export default function Event() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }
  function addEvent() {
    const createEvent = {
      id: generateUniqueID(),
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
      date: newEvent.date,
      people: [],
    };
    handleAddEvent(createEvent);
  }

  return(
    <div>
      {addEvent}
    </div>
  );
}
