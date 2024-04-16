import { render } from '@testing-library/react';
import Editor from './Editor';

describe('Editor', () => {
    const mockFn = jest.fn();
    it('should Match Snapshot', async () => {
        const { container } = render(<Editor setDescription={mockFn} label="Test" value="test value" shouldDisplayBorderOnReadOnly={true} />)
        expect(container).toMatchSnapshot();
    });  
    it('should Match Snapshot, when `shouldDisplayBorderOnReadOnly` passed false', async () => {
        const { container } = render(<Editor setDescription={mockFn} label="Test" value="" shouldDisplayBorderOnReadOnly={false}/>)
        expect(container).toMatchSnapshot();
    }); 
    it('should Match Snapshot, when `label` passed blank', async () => {
        const { container } = render(<Editor setDescription={mockFn} label="" value="" shouldDisplayBorderOnReadOnly={false}/>)
        expect(container).toMatchSnapshot();
    });  
    it('should Match Snapshot, when `shouldAlwaysEditable` passed true', async () => {
        const { container } = render(<Editor shouldDisplayBorderOnReadOnly={true} setDescription={mockFn} label="" value="" shouldAlwaysEditable={true}/>)
        expect(container).toMatchSnapshot();
    });  
})