import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/128?u=118836",
    post: "Fronted developer",
    age: 32,
    adress: {
      city: "Prague",
      country: "Czech Republic",
    },
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/128?u=933372",
    post: "Backend developer",
    age: 30,
    adress: {
      city: "Torronto",
      country: "Canada",
    },
    arr: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/128?u=499476",
    post: "Fullstack developer",
    age: 28,
    adress: {
      city: "New York",
      country: "United States",
    },
    arr: [3, 4, 5, 6, 7, 8, 9],
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      {initialFriends.map((friend) => (
        <Card key={friend.id} friend={friend}></Card>
      ))}
    </>
  );
}

export default App;
