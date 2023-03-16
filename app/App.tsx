import React from 'react';
import { Provider } from 'react-redux';
import { BottomTabs } from './navigation';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BottomTabs />
    </Provider>
  );
};

export default App;
