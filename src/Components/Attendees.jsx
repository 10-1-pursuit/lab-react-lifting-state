import { useState } from "react";

export default function Attendees({ event, attendees, updateEventAttendance }) {
  
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <div key={attendee.id} className="attendee">
                <p>
                  <button
                    className="clickable"
                    onClick={() => updateEventAttendance(event.id, attendee.id)}
                  >
                    Attending:
                  </button>
                  <span>{attendee.attendance ? "✅" : "❌"}</span>
                </p>

                <p>
                  <span>Note:</span> {attendee.note}
                </p>
              </div>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}
