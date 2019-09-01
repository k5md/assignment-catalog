import React from 'react';

import { Catalog } from '../../components/Catalog';
import { StoreProvider } from '../../stores/createStore';

export const App = () => (
  <StoreProvider>
    <Catalog />
  </StoreProvider>
);

export default App;
