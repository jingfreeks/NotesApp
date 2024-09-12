import React from 'react';
import { renderWithProviders } from "@/utils/testframework";
import {Appnavigation} from '../appnavigation';


describe('App navigation Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Appnavigation />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
