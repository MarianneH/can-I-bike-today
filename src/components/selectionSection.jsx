import React from "react";
import FrequencySelection from "./frequencySelection";
import TimeSelection from "./timeSelection";

function SelectionSection() {
  const [frequency, setFrequency] = React.useState(["morning", "evening"]);

  function handleFrequency(event, num) {
    if (num === 1) {
      setFrequency(["morning"]);
    } else {
      setFrequency(["morning", "evening"]);
    }
  }

  return (
    <>
      <FrequencySelection handleFrequency={handleFrequency} />
      <div>
        <p>What time/s do you ride your bike?</p>
        {frequency.map((field, index) => (
          <TimeSelection key={index} {...field} />
        ))}
      </div>
    </>
  );
}

export default SelectionSection;
