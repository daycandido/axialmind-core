import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkipToContent } from './SkipToContent';

describe('SkipToContent', () => {
  it('renders the skip to content link', () => {
    render(<SkipToContent />);
    const link = screen.getByRole('link', { name: /pular para o conteúdo principal/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
  });
});
