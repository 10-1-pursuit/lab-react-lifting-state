export default function Attendee({event, attendee, updateEventAttendance }) {
  return (
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
           
  )
}
       
     
    
    
    
  

