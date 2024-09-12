import React from 'react';
import {render} from '@testing-library/react-native';
import OtpScreen from '../otp';


describe('Otp Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<OtpScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
