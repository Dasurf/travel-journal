import React from "react";
import "./App.css"
import Header from "./components/Header";
import Location from "./components/Location";
import data from "./data";



export default function App() {
  const elements = data.map((node) => {
    return (
      <Location
        key={node.id}
        {...node}
      />
    )
  })

  return (
    <div>
      <Header />
      {elements}
    </div>
  )
}