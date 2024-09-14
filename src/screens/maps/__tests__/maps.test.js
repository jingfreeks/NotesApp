import React from 'react';
import { renderWithProviders } from "../../../utils/testframework";
import MapsScreen from '../maps';


describe('Maps Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<MapsScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
