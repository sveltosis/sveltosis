import * as React from 'react';
import UserProfile from './UserProfile.svelte';

export default function App(props: any) {
  return (
    <UserProfile
      name="John"
      age={20}
      favouriteColors={['green', 'blue', 'red']}
      isAvailable={true}
    />
  );
}
