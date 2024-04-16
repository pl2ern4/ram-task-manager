import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const EditableInputLabel = styled('label')`
    flex: 1;
`;

const EditableInputWrapper = styled('div')`
    display: flex;
    margin: 1rem 0;
    position: relative;
`;

const EditableInputReadOnlyLabel = styled(EditableInputLabel)`
    flex: 3;
    height: 4rem;
`;

const CustomTextField = styled(TextField)`
    height: fit-content;
    width: 100%;
    flex: 3;
    background: #fff;
    border: 1px solid #dae2ed9e;
    border-radius: 8px;
    color: #1C2025;
    box-shadow: 0px 2px 4px rgba(0,0,0, 0.05);
    &>div{
        height: 2.5rem;
    }
    &:focus:{
        border: 1px solid #dae2ed9e;
        outline: unset;
    }
`;

const EditableForm = styled('div')`
    flex: 3;
    margin: 1rem, 0;
    height: 2rem;
`;

const ActionButtonWrapper = styled('div')`
    flex: 3;
    margin: 1rem, 0;
    height: 3rem;
    z-index: 100;
    background: white;
    width: 6rem;
    float: right;
    top: 2.8em;
    right: 0px;
    position: absolute;
    border: 1px solid #dae2ed9e;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0,0,0, 0.05);
    border-top-right-radius: unset;
    border-top-left-radius: unset;
    border-top: unset;
`;

export {
    EditableInputLabel,
    EditableInputWrapper,
    EditableInputReadOnlyLabel,
    CustomTextField,
    EditableForm,
    ActionButtonWrapper
}