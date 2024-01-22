import { render } from '@testing-library/react';

import IsAuth from './is-auth';

describe('IsAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IsAuth />);
    expect(baseElement).toBeTruthy();
  });
});
