import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BoardLayout from './BoardLayout';

describe('BoardLayout', () => {
  it('should Match Snapshot', () => {
    const { container } = render(<BoardLayout />)
    expect(container).toMatchSnapshot()
  })
})