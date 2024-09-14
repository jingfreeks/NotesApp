import React from 'react';
import {render} from '@testing-library/react-native';
import MapsScreen from '../maps';


describe('Maps Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<MapsScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
