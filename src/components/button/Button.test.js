import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Button from './Button';

test('should be button for the primary type', async () => {
    // ARRANGE
    render(<Button type='primary'>primary btn</Button>)
    //ACT
    const button = await screen.findByText('primary btn');
    //ASSERT
    expect(button).toHaveClass('primary');
  });