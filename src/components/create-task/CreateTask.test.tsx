import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CreateTask from './CreateTask';

describe('CreateTask', () => {
    it('should Match Snapshot', async () => {
        const { container } = render(<CreateTask/>)
        expect(container).toMatchSnapshot();
    });
})