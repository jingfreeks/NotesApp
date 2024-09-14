/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {StrictMode, useRef} from 'react';
import {RootNavigator} from './navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store,setupStore, AppStore,persiststore} from './config/store';

function App(): React.JSX.Element {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststore}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

export default App;
