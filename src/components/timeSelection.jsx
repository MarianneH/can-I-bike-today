import React from "react";

function TimeSelection(field) {
  return (
    <div>
      <form action="" id={field[0]}>
        <label htmlFor="time">Select the matching hour!</label>
        <select name="dropdown" id="time">
          <option value={0}>0</option>
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
          <option value={15}>15</option>
          <option value={18}>18</option>
          <option value={21}>21</option>
        </select>
      </form>
    </div>
  );
}

export default TimeSelection;
