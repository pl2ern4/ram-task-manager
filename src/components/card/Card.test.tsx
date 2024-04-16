import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
    const mockProps = {
        id: "1713262151975",
        title: "test",
        isBookMarked: true,
        storyPoint: 1,
        assigneeName: "TOM Th",
        taskType: "story",
        onDragStart: jest.fn(),
        onDragEnd:jest.fn()
    }
    it('Should Match Snapshot, when `storyPoint`, `isBookMarked` & `assigneeName` passed', async () => {
        const {getByText, debug, findByText, container } = render(<Card {...mockProps}/>)
        expect(container).toMatchSnapshot();
    });
    it('Should Match Snapshot, when `storyPoint` not passed', async () => {
        const props = {...mockProps, storyPoint:undefined}
        const {getByText, debug, findByText, container } = render(<Card {...props}/>)
        expect(container).toMatchSnapshot();
    });
    it('Should Match Snapshot, when `assigneeName` not passed', async () => {
        const props = {...mockProps, assigneeName:undefined}
        const {getByText, debug, findByText, container } = render(<Card {...props}/>)
        expect(container).toMatchSnapshot();
    });
    it('Should Match Snapshot, when `isBookMarked` passed `false`', async () => {
        const props = {...mockProps, isBookMarked: false}
        const {getByText, debug, findByText, container } = render(<Card {...props}/>)
        expect(container).toMatchSnapshot();
    });
})