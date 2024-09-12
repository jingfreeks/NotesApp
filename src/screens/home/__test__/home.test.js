import React from 'react';
import { renderWithProviders } from "../../../utils/testframework";
import HomeScreen from '../home';


describe('Home Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<HomeScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
