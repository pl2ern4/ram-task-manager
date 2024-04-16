import {FormControl, Input} from '@mui/material';
import { styled } from '@mui/material/styles';

const CreateBoardForm = styled(FormControl)`
    width:50%; 
    display: flex; 
    margin: auto ;
    height: calc(100vh - 6rem); 
    justify-content: center;
`;

const CustomInput = styled(Input)`
    margin: 2rem 0;
`;

export {
    CreateBoardForm,
    CustomInput
}