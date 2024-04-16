import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectInput from '../select-input/SelectInput';
import EditableInput from '../editable-label/EditableInput';
import Item from '../item/Item';
import { USER, TICKET_TYPE, TICKET_STATUS } from '../../constants';
import { TaskBookmarked } from '../card/styles';


const TaskDetailWrapper = styled(Item)`
    width: fit-content;
    margin: 1rem;
`;

const TaskOtherDetails = styled('div')`
    display: flex;
    &>label{
        flex:.5;
    }
    >&div{
        flex: 2;
    }
`;

type Props = {
    status: string;
    asignee?: string;
    taskType?: string;
    storyPoint?: number;
    deadLine: Date| string |null;
    isBookMarked?: boolean;
    handleChange: (fieldName:string, value:any)=>void;
    deleteTicket: ()=>void;
}

function TaskDetails({ deleteTicket, deadLine = null, status = 'Todo', asignee = 'Not Assigned', taskType = 'Not Assigned', storyPoint, handleChange, isBookMarked }: Props) {
    return (
        <TaskDetailWrapper>
            <TaskOtherDetails>
                <label>Favorite: </label>
                <TaskBookmarked onClick={()=>handleChange("isBookMarked",!isBookMarked)}><BookmarkIcon sx={{color:isBookMarked? '#e68a12': '#808080b8'}} /></TaskBookmarked>
            </TaskOtherDetails>
            <SelectInput label='status' defaultOption={status} options={TICKET_STATUS} onChange={(value:any)=>handleChange("status",value?.target?.textContent)}/>
            <SelectInput label='Asignee' defaultOption={asignee} options={USER}  onChange={(value:any)=>handleChange("assignee",value?.target?.textContent)}/>
            <SelectInput label='Task Type' defaultOption={taskType} options={TICKET_TYPE} onChange={(value:any)=>handleChange("taskType",value?.target?.textContent)}/>
            <EditableInput label='Story Points' text={storyPoint} type="number" onChange={(value:any)=>handleChange("storyPoint",value)}/>
            <TaskOtherDetails>
                <label>Task DeadLine</label>
                <DatePicker selected={deadLine} onChange={(value:any)=>handleChange("deadlineDate",value)}/>
            </TaskOtherDetails>
            <TaskOtherDetails>
                <Button variant="outlined" sx={{color:'red', margin: '1rem'}} onClick={()=>deleteTicket()}>Delete This ticket?</Button>
            </TaskOtherDetails>
        </TaskDetailWrapper>

    );
}
export default TaskDetails;