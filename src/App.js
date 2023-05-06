import React from "react";
import "./App.css";
import ItemList from "./ItemList";
function App() {
  // Define state for the items data
  const items = [
    {
      image: "https://images.bestofbharat.com/2021/04/32-18.jpg",
      title: "Perfect",
      unique_plays: 4000,
      total_plays: 8000,
      completion_rate: 90,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdFUP8a16UL1WKGhzizloNND81QPgzzcgFNKT00L77NFJh80UwA1OK_H4MMaJo69Lt-7o&usqp=CAU",
      title: "Bones",
      unique_plays: 2000,
      total_plays: 4000,
      completion_rate: 75,
    },
    {
      image:
        "https://i.pinimg.com/originals/9f/83/53/9f8353708adfae62917df8aa011c72e1.jpg",
      title: "PBX I",
      unique_plays: 100,
      total_plays: 500,
      completion_rate: 60,
    },
    {
      image: "https://c.saavncdn.com/798/Ishq-Bulaava-2014-500x500.jpg",
      title: "Ishq Bulava",
      unique_plays: 250,
      total_plays: 450,
      completion_rate: 55,
    },
    {
      image:
        "https://i1.sndcdn.com/artworks-TjLTmi9loEeCCUz5-s2ti4w-t500x500.jpg",
      title: "We Rollin",
      unique_plays: 230,
      total_plays: 700,
      completion_rate: 80,
    },
  ];

  return (
    <div className="app">
      <h1 className="header">Sound Dashboard</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
