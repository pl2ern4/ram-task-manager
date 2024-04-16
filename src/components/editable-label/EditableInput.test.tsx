import { render } from '@testing-library/react';
import EditableInput from './EditableInput';

describe('EditableInput', () => {
    it('should Match Snapshot', async () => {
        const { container } = render(<EditableInput label="Test" text="test" type="number"/>)
        expect(container).toMatchSnapshot();
    });  
})