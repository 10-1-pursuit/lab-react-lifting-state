export default function Event(event) {

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
  // {events.map((event) => {
  //   const { people: attendees } = event;

  return(
    <li key={event.id}>
                    <img src={event.eventImage} alt={event.name} />
                    <h5>
                      {event.name} {event.eventType}
                    </h5>
                    <br />
                    <span>Organized by: {event.organizer} </span>
                    <br />
                    <></>
                    </li>
  )
  
}
