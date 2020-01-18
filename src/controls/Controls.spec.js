import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Controls />', () => {
  it('should call toggleClosed when close gate is clicked', () => {
    let locked = false;
    let closed = false;

    const toggleLocked = jest.fn();
    const toggleClosed =  jest.fn();

    const { getByText } = render(<Controls 
        locked={locked}
        closed={closed}
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
    />);

    const closeGateBtn = getByText(/close gate/i)
    fireEvent.click(closeGateBtn);
    fireEvent.click(closeGateBtn);
    expect(toggleClosed).toHaveBeenCalled();

  });
});

