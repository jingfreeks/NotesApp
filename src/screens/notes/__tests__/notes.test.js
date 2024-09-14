import React from 'react';
import { renderWithProviders } from "../../../utils/testframework";
import NotesScreen from '../notes';


describe('Notes Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<NotesScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
