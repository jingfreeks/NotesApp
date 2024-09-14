import React from 'react';
import {render} from '@testing-library/react-native';
import WelcomeScreen from '../welcome';


describe('Welcome Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<WelcomeScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
