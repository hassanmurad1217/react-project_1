import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
// import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
// import { LiftingState } from "./components/LiftStateUp";
// import { DerivedState } from "./components/DerivedState";
// import { State } from "./components/hooks/State";
// import { EventPropagation } from "./components/EventPropagation";
// import { EventHandling } from './components/EventHandling.jsx'
// import { EventProps } from './components/EventProps.jsx'
// import  Practice  from './practice.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <EventHandling/> */}
    {/* <EventProps/> */}
    {/* <Practice/> */}
    {/* <EventPropagation /> */}
    {/* <State/> */}
    {/* <DerivedState/> */}
    {/* <LiftingState /> */}
    {/* <ToggleSwitch/> */}
  </StrictMode>,
);
