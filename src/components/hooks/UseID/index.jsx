import { useId } from "react";

export const UseId = () => {
  //   const usernameid = useId();
  //   const emailid = useId();
  //   const passwordid = useId();
  //   return (
  //     <form>
  //       <div>
  //         <label htmlFor={usernameid}>UserName:</label>
  //         <input type="text" id={usernameid} name="name" />
  //       </div>
  //       <div>
  //         <label htmlFor={passwordid}>Password:</label>
  //         <input type="text" id={passwordid} name="password" />
  //       </div>
  //       <div>
  //         <label htmlFor={emailid}>Email:</label>
  //         <input type="email" id={emailid} name="email" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );

  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={id + "usernameid"}>UserName:</label>
        <input type="text" id={id + "usernameid"} name="name" />
      </div>
      <div>
        <label htmlFor={id + "passwordid"}>Password:</label>
        <input type="text" id={id + "passwordid"} name="password" />
      </div>
      <div>
        <label htmlFor={id + "emailid"}>Email:</label>
        <input type="email" id={id + "emailid"} name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
