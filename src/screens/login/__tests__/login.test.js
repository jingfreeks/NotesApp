import React from 'react';
import { renderWithProviders } from "../../../utils/testframework";
import LoginScreen from '../login';


describe('Login Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<LoginScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
