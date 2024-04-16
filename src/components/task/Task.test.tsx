import * as React from 'react';
import { render } from '@testing-library/react';
import Task from './Task';

describe('SelectInput', () => {
    it('should Match Snapshot', async () => {
        const { container } = render(<Task/>)
        expect(container).toMatchSnapshot();
    });    
})