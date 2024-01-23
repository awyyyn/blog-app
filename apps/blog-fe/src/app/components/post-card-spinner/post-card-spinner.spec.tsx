import { render } from '@testing-library/react';

import PostCardSpinner from './post-card-spinner';

describe('PostCardSpinner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostCardSpinner />);
    expect(baseElement).toBeTruthy();
  });
});
