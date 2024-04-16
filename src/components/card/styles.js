import { styled } from '@mui/material/styles';

const TaskType = styled('div')`
  flex: 12;
`;
const TaskPoint = styled('div')`
  flex: 2;
  align-self: center;
  &>div{
    height: 25px;
    width: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 50%;
    background: #e9e9e9;
  }
`;

const TaskAssignee = styled('div')`
  flex:1;
`;

const TaskBookmarked = styled('div')`
  flex:1.5;
  align-self: center;
  cursor: pointer;
`;

const TaskContent = styled('div')`
  display:flex;
`;

export {
    TaskContent,
    TaskBookmarked,
    TaskAssignee,
    TaskPoint,
    TaskType
}