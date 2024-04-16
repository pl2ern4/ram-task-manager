import * as React from 'react';
import { render } from '@testing-library/react';
import TaskDetails from './TaskDetails';
import { USER, TICKET_TYPE, TICKET_STATUS } from '../../constants';

describe('SelectInput', () => {
    it('should Match Snapshot', async () => {
        const { container } = render(<TaskDetails handleChange={jest.fn()} asignee={USER[3]} status={TICKET_STATUS[1]} taskType={TICKET_TYPE[1]}/>)
        expect(container).toMatchSnapshot();
    });  
    it('should Match Snapshot, when asignee, taskType not passed', async () => {
        const { container } = render(<TaskDetails handleChange={jest.fn()} status={TICKET_STATUS[0]} />)
        expect(container).toMatchSnapshot();
    });    
})