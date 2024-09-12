import React from 'react';
import {render} from '@testing-library/react-native';
import SignupScreen from '../signup';


describe('Signup Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<SignupScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
