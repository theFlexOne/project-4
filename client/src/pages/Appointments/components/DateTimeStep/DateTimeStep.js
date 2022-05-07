import { useState } from "react";
import "./dateTimeStep.css";

const DateTimeStep = ({ availableTimeSlots, dateTime, updateDateTime }) => {
  console.log(`availableTimeSlots`, availableTimeSlots);
  const updateDate = (date) => {
    const dateTimeCopy = { ...dateTime };
    dateTimeCopy.date = date;
    updateDateTime(dateTimeCopy);
  };
  const updateTime = (time) => {
    const dateTimeCopy = { ...dateTime };
    dateTimeCopy.time = time;
    updateDateTime(dateTimeCopy);
  };
  return (
    <div className="date-time-container">
      <div>
        <label htmlFor="date">PLease, pick your appointment date:</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => updateDate(e.target.value)}
          value={dateTime.date || ""}
        />
      </div>
      {dateTime.date && (
        <div>
          <p>Please, pick an appointment time:</p>
          <select
            name="available-times"
            id="available-times"
            onChange={(e) => updateTime(e.target.value)}
          >
            {availableTimeSlots.map((t) => {
              return (
                <option key={t} value={t}>
                  {t}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default DateTimeStep;
