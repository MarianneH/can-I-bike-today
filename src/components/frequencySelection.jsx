import React from "react";

function FrequencySelection({ handleFrequency }) {
  return (
    <div id="frequency">
      <p>How often do you ride your bike?</p>
      <form action="">
        <input
          type="radio"
          id="once"
          name="fav_language"
          value={1}
          onClick={(event) => handleFrequency(event, 1)}
        />
        <label htmlFor="once">once a day</label>
        <input
          type="radio"
          id="twice"
          name="fav_language"
          value={2}
          onClick={(event) => handleFrequency(event, 2)}
        />
        <label htmlFor="twice">morning & evening</label>
      </form>
    </div>
  );
}
export default FrequencySelection;
