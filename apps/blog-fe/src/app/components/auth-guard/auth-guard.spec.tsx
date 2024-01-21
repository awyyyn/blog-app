import { render } from '@testing-library/react';

import AuthGuard from './auth-guard';

describe('AuthGuard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthGuard />);
    expect(baseElement).toBeTruthy();
  });
});
