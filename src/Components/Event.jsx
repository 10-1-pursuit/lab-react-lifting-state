import { useState } from "react";
import Attendees from "./Attendees";

export default function Event({ event }) {
  const [showAttendees, setShowAttendees] = useState(false);
  const [people, setPeople] = useState(event.people);

  function updateEventAttendance(attendeeId) {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.id === attendeeId
          ? { ...person, attendance: !person.attendance }
          : person
      )
    );
  }

  function toggleEventAttendees() {
    setShowAttendees((prevShowAttendees) => !prevShowAttendees);
  }

  return (
    <>
      <li>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <Attendees
          attendees={people}
          showAttendees={showAttendees}
          toggleEventAttendees={toggleEventAttendees}
          updateEventAttendance={updateEventAttendance}
        />
      </li>
    </>
  );
}