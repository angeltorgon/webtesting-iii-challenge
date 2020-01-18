import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Dashboard />', () => {
    it('closed should render when clicking close gate', () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText(/close gate/i);
      fireEvent.click(button);
      const closedSign = getByText(/closed/i);
      expect(closedSign).toBeInTheDocument();
    });
  });

  describe('<Dashboard />', () => {
    it('button should display "Close Gate" when clicked', () => {
      const { getByText } = render(<Dashboard />);
  
      const closeGateBtn = getByText(/close gate/i)
      fireEvent.click(closeGateBtn);
      expect(getByText(/open gat/i)).toBeInTheDocument();
      
    });
  });