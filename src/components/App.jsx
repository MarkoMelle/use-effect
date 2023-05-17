import React, { createContext } from 'react';
import List from './List/List';

export const BaseUrlContext = createContext(
  'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'
);

const App = () => {
  return (
    <BaseUrlContext.Provider value='https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'>
      <List />
    </BaseUrlContext.Provider>
  );
};

export default App;
