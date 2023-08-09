import Attendees from "./Attendees";

export default function Event({ events, setEvents }) {
  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }
  return (
    <>
      <ul>
        {events.map((event) => (
          <div className="events" key={event.id}>
            <li>
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />
              <Attendees
                Attendees={Attendees}
                event={event}
                updateEventAttendance={updateEventAttendance}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
