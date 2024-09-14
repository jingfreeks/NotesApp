import React from 'react';
import { renderWithProviders } from "@/utils/testframework";
import {AuthNavigation} from '../authnavigation';


describe('Auth navigation Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<AuthNavigation />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
