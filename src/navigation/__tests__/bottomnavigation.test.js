import React from 'react';
import { renderWithProviders } from "@/utils/testframework";
import BottomTabScreen from '../bottomtabnavigation';


describe('Bottom navigation Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<BottomTabScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
