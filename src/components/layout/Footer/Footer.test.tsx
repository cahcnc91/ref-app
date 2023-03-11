import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('renders footer text', () => {
    render(<Footer />);

    const footerText = screen.getByText("Test footer text");

    expect(footerText).toBeInTheDocument();
  });
});
