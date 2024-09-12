import React from 'react';
import { renderWithProviders } from "../../../utils/testframework";
import SignupScreen from '../signup';


describe('Signup Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<SignupScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
