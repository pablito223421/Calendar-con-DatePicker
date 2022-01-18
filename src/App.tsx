import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default function App() {
  return (
    <div>
      <p>Selecciona  el día den el calendario:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
    </div>
  );
}

