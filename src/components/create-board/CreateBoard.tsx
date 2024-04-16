import {Button} from '@mui/material';
import { SetStateAction, useState } from 'react';
import {CreateBoardForm, CustomInput} from './styles';
const VALID_BOARD_STRING = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

type Props = {
    setBoardName:(value:string)=>void
}
const CreateBoard = ({setBoardName}: Props) => {
    const [value, setValue] = useState('');
    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) =>{
        setValue(e.target.value);
    }
    const handleSubmit = () =>{
        if(VALID_BOARD_STRING.test(value)){
            setBoardName(value)
        }
    }
    return (
        <CreateBoardForm fullWidth focused className='FormControl'>
            <CustomInput name="board-input" inputProps={{maxLength:20}} value={value} onChange={handleChange} required autoFocus/>
            <Button variant="contained" onClick={handleSubmit}>Create Board</Button>
        </CreateBoardForm>
    )
}

export default CreateBoard;
