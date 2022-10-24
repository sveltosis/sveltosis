import { Fragment, component$, h } from "@builder.io/qwik";
export const UserProfile = component$((props) => {
  return (
    <Fragment>
      <p>My name is {props.name} !</p>
      <p>My age is {props.age} !</p>
      <p>My favourite colors are {props.favouriteColors.join(", ")} !</p>
      <p>I am {props.isAvailable ? "available" : "not available"}</p>
    </Fragment>
  );
});
export default UserProfile;
