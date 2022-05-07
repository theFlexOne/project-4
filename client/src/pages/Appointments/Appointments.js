import { useCallback, useMemo, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import "./appointments.css";
import BarberStep from "./components/BarberStep/BarberStep";
import ServicesStep from "./components/ServicesStep/ServicesStep";
import CustomerStep from "./components/CustomerStep/CustomerStep";
import DateTimeStep from "./components/DateTimeStep/DateTimeStep";
import ConfirmationStep from "./components/ConfirmationStep";

// const FormStepTracker = () => {
//   return (
//     <div className="form-step-tracker">
//       <span>
//         <p>Barber</p>
//       </span>
//       <ArrowRightAltIcon />
//       <span>
//         <p>Services</p>
//       </span>
//       <ArrowRightAltIcon />
//     </div>
//   );
// };

const SERVICE_DURATION = 30;
const OPEN_TIME = 1000;
const CLOSE_TIME = 1800;

// const availableTimeSlots = (() => {
//   const timeSlots = [];
//   console.log(`timeSlots`, timeSlots);
//   // const businessHours = CLOSE_TIME - OPEN_TIME;
//   // const numberOfTimeSlots = Math.floor(businessHours / 30)
//   for (let t = OPEN_TIME; t >= CLOSE_TIME; t = t + SERVICE_DURATION) {
//     const tCopy = t.toString();
//     const mins = tCopy.split("").splice(-2, 2).join();
//     const hours = tCopy;
//     const timeString = `${hours}:${mins}`;
//     console.log(`timeString`, timeString);
//     timeSlots.push(timeString);
//   }
//   return timeSlots;
// })();

const AVAILABLE_TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
];

const Appointments = () => {
  const { services, barbers } = useGlobalContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    barber: null,
    services: [],
    dateTime: {
      date: null,
      time: null,
    },
    customer: null,
  });

  const updateFormData = (label) => {
    const formDataCopy = { ...formData };
    return (data) => {
      formDataCopy[label] = data;
      setFormData(formDataCopy);
    };
  };

  const FormStep = () => {
    const steps = [
      <BarberStep
        barbers={barbers}
        selectedBarberId={formData.barber}
        updateBarber={updateFormData("barber")}
      />,
      <ServicesStep
        services={services}
        selectedServices={formData.services}
        updateSelectedServices={updateFormData("services")}
      />,
      <DateTimeStep
        availableTimeSlots={AVAILABLE_TIME_SLOTS}
        dateTime={formData.dateTime}
        updateDateTime={updateFormData("dateTime")}
      />,
      <CustomerStep />,
      <ConfirmationStep formData={formData} />,
    ];

    return steps[currentStep];
  };

  const handleNewAppointment = (formData) => {
    console.log(`formData`, formData);
    // POST a new appointment below
  };

  const handleNextButton = (e) => {
    console.log(`formData`, formData);
    e.preventDefault();
    if (currentStep === 5) {
      return handleNewAppointment(formData);
    }
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
  };

  // const renderAppointmentStep = () => {
  //   switch (currentStep) {
  //     case 1:
  //       return <BarberStep barbers={barbers} />;
  //     case 2:
  //       return <ServicesStep services={services} />;
  //     case 3:
  //       return <DateTimeStep availableTimes={[]} />;
  //     case 4:
  //       return <CustomerStep />;
  //     case 5:
  //       return <ConfirmationStep />;
  //     default:
  //       throw new Error("HUH? Form step is invalid...");
  //   }
  // };

  return (
    <div className="appointments">
      <div className="form-container">
        <form onSubmit={handleNextButton}>
          <FormStep />
          <div className="button-group">
            <button
              disabled={currentStep === 0}
              type="button"
              className="previous"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              BACK
            </button>
            <button type="button" className="next" onClick={handleNextButton}>
              {currentStep === 4 ? "SUBMIT" : "NEXT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
