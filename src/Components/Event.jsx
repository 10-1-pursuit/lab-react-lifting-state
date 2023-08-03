import Attendees from "./Attendees.jsx";

const Event = ({ event, updateEventAttendance }) => {
  return (
    <li key={event.id} className="event">
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <Attendees event={event} updateEventAttendance={updateEventAttendance} />
    </li>
  )
}

export default Event