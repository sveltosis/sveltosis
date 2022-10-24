function UserProfile(props) {
  return <>
      <p>
        My name is
        {props.name}!
      </p>
      <p>
        My age is
        {props.age}!
      </p>
      <p>
        My favourite colors are
        {props.favouriteColors.join(", ")}!
      </p>
      <p>
        I am
        {props.isAvailable ? "available" : "not available"}
      </p>
    </>;
}
export default UserProfile;