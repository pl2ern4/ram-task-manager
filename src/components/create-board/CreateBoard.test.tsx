import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CreateBoard from './CreateBoard';

describe('CreateBoard', () => {
    const setBoardNameFn = jest.fn();
    it('should call `setBoardName`, with Valid input', async () => {
        const {container} = render(<CreateBoard setBoardName={setBoardNameFn}/>)
        expect(container).toMatchSnapshot();
    });
})