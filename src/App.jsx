import { useState } from "react";
import eventsData from "./data";
//  import { v1 as generateUniqueID } from "uuid";
  // import Attendees from "./Components/Attendees.jsx"
import Event from "./Components/Event.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import NewEventForm from "./Components/NewEventForm.jsx";
  // import Attendee from "./Components/Attendee.jsx"




function App() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events])
  }

  function updateEventAttendance(eventId,attendeeId) {
    const eventArray =[...events]
    const eventIndex =eventArray.findIndex((event)=> eventId === event.id)
    const event = {...eventArray[eventIndex] }
    const personIndex = event.people.findIndex(
      (person)=> person.id === attendeeId
    )
    const peopleArray = [...event.people]
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance
    event.people = peopleArray
    eventArray[eventIndex] = event
    setEvents(eventArray)
  }

  return (
    <div className="App">



      <Header />

<main>
  <div className="new-event">
    <NewEventForm handleAddEvent={handleAddEvent} />
  </div>
  <div className="events">
    <ul>
 


      {events.map((event)=>(

        <Event
        event={event}
        updateEventAttendance={updateEventAttendance} />
      ))}
    </ul>

  </div>
</main>
<Footer />
    </div>
  )
      }


export default App

  

  

  

 


  
        
      
              
                  
          
          
    
