
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '../card/Card';
import { styled } from '@mui/material/styles';
import FormDialog from '../dialog/Dialog';
import Task from '../task/Task';
import { TICKET_STATUS, TICKET_ORDERBY } from '../../constants';
import CreateBoard from '../create-task/CreateTask';
import { useGlobalContext } from '@/context/application';
import SelectInput from '../select-input/SelectInput';

const ColumnBackground = styled(Paper)`
  width: calc(100vw/4);
  padding: .5rem;
  min-height: calc(100vh - 10rem);
  background-color: #8080801f;
`;
const BoardWrapper = styled('div')`
  width: calc(100vw - 2rem);
  justify-content: center;
`;

export default function BoardLayout() {
  const [ticketOrder, setTicketOrder] = useState('modifiedDate');
  const {openCreateTicket, openUpdateTicketDialog, openUpdateTicket, setOpenCreateTicket, tickets, updateTicket} = useGlobalContext();
  const TaskColumn = TICKET_STATUS;

  const onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("draggedItem", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragLeave = (evt)=>{
    evt.currentTarget.classList.remove("dragged");
  }
  const onDragEnter = (evt)=>{
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  }

  const onDragOver = (evt)=>{
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  }

  const onDrop = (evt)=>{
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    const draggedItemId = evt.dataTransfer.getData("draggedItem");
    const index = tickets.findIndex(o=>o.id==draggedItemId)
    if(index>-1 && evt.target.id){
      updateTicket({id: draggedItemId, node:"status", data: evt.target.id})
    }
  }
  const handleSortChange = (_, value)=>{
    setTicketOrder(value)
  }

  const modiefieldTicketList = ({list, orderBy, value})=>{
    if(orderBy==='bookmarked'){
      return list.reduce((acc, item)=>item.isBookMarked && [item,...acc] || [...acc, item],[]).filter(o=>o.status===value);
    }
    if(orderBy==='createdDate'){
      return list.sort((a,b)=>a.createdDate>b.createdDate?-1:1).filter(o=>o.status===value);
    }
    if(orderBy==='title'){
      return list.sort((a,b)=>a.title>b.title?1:-1).filter(o=>o.status===value);
    }
    return list.sort((a,b)=>a.modifiedDate>b.modifiedDate?-1:1).filter(o=>o.status===value);
  }
  
  return (
    <BoardWrapper>
      <SelectInput onChange={handleSortChange} defaultOption={ticketOrder} options={Object.keys(TICKET_ORDERBY)}  label="Order By"/>
      <Grid sx={{ flexGrow: 1, justifyContent:'center' }} container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2} sx={{justifyContent:'center' }}>
            {TaskColumn.map((value) => (
              <Grid key={value} item>
                <ColumnBackground 
                  className="drop-zone order small-box" 
                  id={value} 
                  onDragLeave={onDragLeave} 
                  onDragEnter={onDragEnter}
                  onDragEnd={onDragEnd}
                  onDragOver={onDragOver}
                  onDrop={onDrop}>
                  <Typography variant="h5" color="text.primary" gutterBottom>
                    {value}
                  </Typography>
                    {
                      modiefieldTicketList({list:tickets, orderBy:ticketOrder, value}).map(item=> <Card onDragStart={onDragStart} onDragEnd={onDragEnd} key={item.id} isBookMarked={item.isBookMarked} id={item.id} title={item.title} storyPoint={item.storyPoint} assigneeName={item.asignee} taskType={item.taskType} />)
                    }
                </ColumnBackground>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {openCreateTicket && <FormDialog openDialog={openCreateTicket} onClose={shouldOpenDialog=>setOpenCreateTicket(shouldOpenDialog)}><CreateBoard/></FormDialog>}
      {openUpdateTicketDialog.shouldOpenDialog && <FormDialog openDialog={openUpdateTicketDialog.shouldOpenDialog} onClose={(shouldOpenDialog)=>openUpdateTicket(undefined, shouldOpenDialog)}><Task/></FormDialog>}
    </BoardWrapper>

  );
}