import { useEffect, useRef, useState } from "react";
import "./dateTimeStep.css";

const DateTimeStep = ({ availableTimeSlots, formDataRef }) => {
  const [date, setDate] = useState(formDataRef.current.dateTime.date);
  const [time, setTime] = useState(
    formDataRef.current.dateTime.time || availableTimeSlots[0]
  );

  // const handleBlur = (label) => {
  //   return (e) => {
  //     const dateTimeCopy = { ...dateTime };
  //     dateTimeCopy[label] = e.target.value;
  //     updateDateTime(dateTimeCopy);
  //   };
  // };

  // useEffect(() => {
  //   console.log(timeRef.current);
  //   timeRef.current?.focus();
  // });

  useEffect(() => {
    formDataRef.current.dateTime = { date, time };
  }, [date, formDataRef, time]);

  return (
    <div className="date-time-container">
      <div>
        <label htmlFor="date">PLease, pick your appointment date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date || ""}
          onChange={(e) => setDate(e.target.value)}
          // onBlur={handleBlur("date")}
          // onClick={(e) => e.target.focus()}
        />
      </div>
      {date && (
        <div>
          <p>Please, pick an appointment time:</p>
          <select
            name="available-times"
            id="available-times"
            value={time || availableTimeSlots[0]}
            onChange={(e) => setTime(e.target.value)}
            // onBlur={handleBlur("time")}
            // onClick={(e) => e.target.focus()}
          >
            {availableTimeSlots.map((timeSlot) => (
              <option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default DateTimeStep;
