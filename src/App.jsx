// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
// import styles from "./components/Netflix.module.css";
// import { Todo } from "./projects/Todo/Todo";
// import { Counter } from "./projects/challange/Counter";
// import ControlledForm from "./components/hooks/useState/ControlledForm";
// import { RegistrationForm } from "./components/hooks/useState/Registration";
import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
const App = () => {
  return (
    // <section className="container">
    //     <h1 className={styles["card-heading"]}>List of Best Netflix Series</h1>
    //             <NetflixSeries />
    // </section>

    <section>
      {/* <Todo /> */}
      {/* <Counter /> */}
      {/* <ControlledForm /> */}
      {/* <RegistrationForm /> */}
      <RegistrationFormReact />
    </section>
  );
};

export default App;
