import * as React from 'react';
import { render } from '@testing-library/react';
import SelectInput from './SelectInput';
import * as constants from '../../constants';

describe('SelectInput', () => {
    it('should Match Snapshot', async () => {
        const { container } = render(<SelectInput label="test" options={constants.TICKET_TYPE} defaultOption={constants.TICKET_TYPE[1]}/>)
        expect(container).toMatchSnapshot();
    });
    it('should Match Snapshot, when `defaultOption` not passed', async () => {
        const { container } = render(<SelectInput label="test" options={constants.TICKET_TYPE} defaultOption={null}/>)
        expect(container).toMatchSnapshot();
    });   
})