import { render, screen, waitFor } from '@testing-library/react';

describe('Location Test', () => {
  it('renders location name when data is fetched', async () => {
    const mockData = { name: 'Dallas' };

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<div>{mockData.name}</div>);

    await waitFor(() => screen.getByText('New York'));

    expect(screen.getByText('New York')).toBeInTheDocument();
  });
});
