import { render, screen } from '@testing-library/react'
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

test('should be button for the danger type', async () => {
    // ARRANGE
    render(<Button type='danger'>danger btn</Button>)
    //ACT
    const button = await screen.findByText('danger btn');
    //ASSERT
    expect(button).toHaveClass('danger');
});

test('button should call callback on click event', (done) =>{
    const callBackFun = (e) =>{
        console.log(e);
        done();
    }
    render(<button onClick={callBackFun}>Click Btn</button>)
    screen.findByText('Click Btn').then((btn) =>{
        userEvent.click(btn)
    })
})