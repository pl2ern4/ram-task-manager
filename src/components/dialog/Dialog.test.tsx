import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Dialog from './Dialog';

describe('Dialog', () => {
    it('should Match Snapshot', async () => {
        const mockFn = jest.fn();
        const { container } = render(<Dialog onClose={mockFn} openDialog={true}><div>Test</div></Dialog>)
        expect(container).toMatchSnapshot();
    });
    it('should Match Snapshot, when dialog state `openDialog` set to false', async () => {
        const mockFn = jest.fn();
        const { container } = render(<Dialog onClose={mockFn} openDialog={false}><div>Test</div></Dialog>)
        expect(container).toMatchSnapshot();
    });
    it('should Match Snapshot, when title state set `title` set to null', async () => {
        const mockFn = jest.fn();
        const { container } = render(<Dialog title="test" onClose={mockFn} openDialog={true}><div>Test</div></Dialog>)
        expect(container).toMatchSnapshot();
    });
})