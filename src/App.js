import './App.css';
import { useState } from "react";

export default function App() {
const [name, setName] = useState("Ali Fraz");
const [showEvents, setShowEvents] = useState(true)
//List.
const [events, setEvents] = useState([
    {title: "Success is for doers", id:1},
    {title: "React is LIVE", id:2},
    {title: "LIVE like a NOW", id:3},
    {title: "Flying Kite", id: 4}
]);
const handleClick = () => {
    setName("Khan")
    };

console.log(showEvents)
const handleDelete = (id) => {
    setEvents((prevEvents) => {
        return prevEvents.filter((event) => {
            return id !== event.id
        })
    })
}
  return (
    <div className="App">
        <h1>My First Component</h1>
        <h3>Now, we are working on the State</h3>
        <p>My name is { name }</p>
        <button onClick={handleClick}>Change my Name</button>
        {!showEvents && (<div>
            <button onClick={() => (setShowEvents(true))}>Show Events</button>
        </div>)}
        {showEvents && (<div>
            <button onClick={() => (setShowEvents(false))}>Hide Events</button>
        </div>)}
        {showEvents && events.map((event, index)=>(
            <div key={event.id}>
                <h2>{index} - {event.title}</h2>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
        ))}
    </div>
  );
}