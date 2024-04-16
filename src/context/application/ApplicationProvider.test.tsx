import * as React from 'react';
import { render } from '@testing-library/react';
import ApplicationProvider from './ApplicationProvider';

describe('SelectInput', () => {
    it('should Match Snapshot', async () => {
        const { container, debug } = render(<ApplicationProvider/>);
        expect(container).toMatchSnapshot();
    });    
})
