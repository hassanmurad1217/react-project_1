export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };

  const handleHover = () => {
    alert(`Thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Hassan")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreatings = () => {
    console.log(`Hey user, Welcome`);
    props.onClick();
  };
  return (
    <>
      <button onClick={props.onClick}>Click</button>
      <button onClick={props.onMouseEnter}>Hover Me</button>
      <button onClick={handleGreatings}>Greatings</button>
    </>
  );
};
