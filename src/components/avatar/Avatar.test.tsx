import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Avatar from './Avatar';

describe('Avatar', () => {
it('renders without Name', () => {
    const {container} = render(<Avatar name="Tom HeadMan"/>)
    expect(container).toMatchSnapshot();
    })
  it('renders a heading', () => {
    const {container} = render(<Avatar name="Tom HeadMan"/>)
    expect(container).toMatchSnapshot();
  })
})