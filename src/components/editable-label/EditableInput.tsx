import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from "@mui/material";
import {
    EditableInputLabel,
    EditableInputWrapper,
    EditableInputReadOnlyLabel,
    CustomTextField,
    EditableForm,
    ActionButtonWrapper
} from './styles';

interface Props {
    label: string|undefined;
    type: string;
    text: string | number | undefined;
    onChange?: (value:any)=>any
}

const EditableInput = (props:Props) => {
    const { label, type, text, onChange } = props;
    const [isEditable, setIsEditable] = useState(false);
    const [value, setValue] = useState(text);
    const [fieldValue, setFieldValue] = useState();
    const handleSaveClick = () => { 
        setValue(fieldValue);
        setIsEditable(false);
        onChange && onChange(fieldValue);
    }
    const handleTextFieldChange = (params: any) => {
        setFieldValue(params.target.value)
    }
    const handleCloseClick = () =>{
        setIsEditable(false);
    }

    let field = <EditableForm>
        <CustomTextField type={type} onChange={handleTextFieldChange} value={fieldValue} autoFocus={true}/>
        <ActionButtonWrapper>
            <IconButton aria-label="cancel" color="success" onClick={handleSaveClick}>
                <CheckIcon />
            </IconButton>  
            <IconButton aria-label="save" color="error" onClick={handleCloseClick}>
                <CloseIcon />
            </IconButton>
        </ActionButtonWrapper>
        
    </EditableForm>;
    if (!isEditable) {
        field =(<EditableInputReadOnlyLabel onClick={() => setIsEditable(true)}>
            {value}
        </EditableInputReadOnlyLabel>)
    }
    return (
        <EditableInputWrapper>
            <EditableInputLabel>
                {label}
            </EditableInputLabel>
            {field}
        </EditableInputWrapper>
    )

}

export default EditableInput;