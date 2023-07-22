import React, { useState } from "react";
import TagsButton from "./components/TagsButton";
import Header from "./components/Layout/Header";
import AvailableDetails from "./components/AvailableDetails";

function App() {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div>
      <Header />
      <TagsButton selectColor={(color) => setSelectedColor(color)} />

      <main>
        <AvailableDetails selectedColor={selectedColor} />
      </main>
    </div>
  );
}

export default App;
