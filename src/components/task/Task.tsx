import Grid from '@mui/material/Grid';
import Editor from '../../components/editor/Editor';
import EditableInput from '../../components/editable-label/EditableInput';
import TaskDetails from '../../components/task-details/TaskDetails'
import Item from '../../components/item/Item';
import Avatar from '../../components/avatar/Avatar'; 
import { useGlobalContext } from '@/context/application';
import {
    CommentSectionWrapper,
    CommentEditorSection,
    CommentSection
} from './styles';

const Task = () => {
    const { boardName, openUpdateTicketDialog, tickets, createComment, updateTicket, comments, deleteTicket } = useGlobalContext();
    
    const data = tickets.find(o=>o.id===openUpdateTicketDialog.id);
    const addComment = (value)=>{
        data && createComment({id: data.id, value});
    }
    const updateDescription = (params) => {
        data && updateTicket({id: data.id, node: "description", data: params})
    }

    const handleChange=(fieldName:string, value:any)=>{
        data && updateTicket({id: data.id, node: fieldName, data: value})
    }

    const handleDeleteTicket = ()=>{
        openUpdateTicketDialog.id && deleteTicket(openUpdateTicketDialog.id);
    }

    if(!data){
       return;
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Item>
                    <h1>{boardName}</h1>
                    <EditableInput label='Title' type="text" text={data.title}/>
                    <Editor value={data.description} setDescription={updateDescription} shouldShowButtons={true} label="Description" shouldDisplayBorderOnReadOnly={false}/>
                    <CommentSectionWrapper>
                    <h2>Comments:</h2>
                    {
                        comments && comments.filter(o=>o.ticketId===data.id).map(({id,comment})=>(
                            <CommentSection key={id}>
                                <Avatar name='Kent Dodds' />
                                <CommentEditorSection dangerouslySetInnerHTML={{__html:comment}}/>
                            </CommentSection>
                        ))
                    }
                    <CommentSection>
                        <Avatar name='Kent Dodds' />
                        <CommentEditorSection><Editor shouldShowButtons={true} setDescription={addComment} shouldDisplayBorderOnReadOnly={true}/></CommentEditorSection>
                    </CommentSection>
                    </CommentSectionWrapper>
                </Item>
            </Grid>
            <Grid item xs={4}>
                <TaskDetails deleteTicket={handleDeleteTicket} deadLine={data.deadlineDate} isBookMarked={data.isBookMarked} status={data.status} asignee ={data.asignee} taskType ={data.taskType} storyPoint={data.storyPoint} handleChange={handleChange}/>
            </Grid>
        </Grid>
        
    )
}

export default Task;