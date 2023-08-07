import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({ event, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  const { people: attendees } = event;

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <div key={attendee.id} className="attendee">
              <Attendee
                updateEventAttendance={updateEventAttendance}
                attendee={attendee}
                event={event}
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
