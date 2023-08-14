export default function Attendees() {
  return (

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


  )
}
