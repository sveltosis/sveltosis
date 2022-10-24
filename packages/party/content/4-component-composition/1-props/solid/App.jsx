import UserProfile from "./UserProfile.svelte";
function App(props) {
  return <UserProfile name="John" age={20} favouriteColors={["green", "blue", "red"]} isAvailable={true}></UserProfile>;
}
export default App;