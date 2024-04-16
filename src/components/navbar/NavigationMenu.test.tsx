import * as React from 'react';
import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenu';

describe('NavigationMenu', () => {
    it('should Match Snapshot', async () => {
        const { container } = render(<NavigationMenu/>)
        expect(container).toMatchSnapshot();
    });   
})