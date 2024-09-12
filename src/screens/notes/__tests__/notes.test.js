import React from 'react';
import {render} from '@testing-library/react-native';
import NotesScreen from '../notes';


describe('Signup Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<NotesScreen />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
