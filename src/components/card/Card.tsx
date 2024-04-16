import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import Avatar from '../../components/avatar/Avatar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useGlobalContext } from '@/context/application';
import { ALERT_CONSTANT } from '@/constants';
import {
  TaskContent,
  TaskBookmarked,
  TaskAssignee,
  TaskPoint,
  TaskType
} from './styles';

type Props = {
  id: string;
  isBookMarked: boolean;
  title: string;
  storyPoint?: number;
  assigneeName?: string;
  taskType: string;
  onDragStart?:(args:any)=>void;
  onDragEnd?:(args:any)=>void;
}

export default function TicketCard({id, title, storyPoint, assigneeName, taskType, isBookMarked, onDragEnd, onDragStart }:Props) {
  const {openUpdateTicket} = useGlobalContext();
  
  return (
      <div className='drag-item' draggable onDragStart={onDragStart} onDragEnd={onDragEnd} id={id} onClick={()=>openUpdateTicket(id, true)}>
        <Card variant='outlined' >
          <CardContent>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              {title}
            </Typography>
            <TaskContent>
              <TaskType><AddToQueueIcon color={ALERT_CONSTANT[taskType]} /></TaskType>
              <TaskPoint><div>{storyPoint || "-1"}</div></TaskPoint>
              <TaskBookmarked><BookmarkIcon sx={{color:isBookMarked? '#e68a12': '#808080b8'}} /></TaskBookmarked>
              <TaskAssignee><Avatar name={assigneeName}/></TaskAssignee>
            </TaskContent>
          </CardContent>
        </Card>
      </div>
  );
}