import UserProfile from './UserProfile';
import { Fragment, component$, h } from '@builder.io/qwik';
export const App = component$((props) => {
  return (
    <UserProfile
      name="John"
      age={20}
      favouriteColors={['green', 'blue', 'red']}
      isAvailable={true}
    ></UserProfile>
  );
});
export default App;
