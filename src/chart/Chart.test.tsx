import { render, screen } from '@testing-library/react';
import { mockData } from '../App';
import { Chart } from './Chart';

describe('Chart component', () => {
  test('should render chart component', () => {
    render(<Chart data={mockData} />);

    const chartElement = screen.getByTestId('chart');
    expect(chartElement).toBeInTheDocument();
  });
});
