import { styled } from "@mui/material/styles";
import { FormGroup, Input } from "@mui/material"

const CustomForm = styled(FormGroup)`
    margin: 1rem;
    height: fit-content;
    width: 60rem;
    &.ql-editor ql-blank{
        height: 12rem;
    }
    &>form>div{
        margin: .5rem 0;
    }
`;

const CreateTicketActionButtonGroup = styled('div')`
    width: 100%;
    margin: 1rem 0;
    display: inline-flex;
    justify-content: space-evenly;
`;

const CustomInput =styled(Input)`
    display:block;
`;

const ErrorDialog = styled('div')`
    font-color: red;
    font-size: 10px;
`;

const DateWrapper = styled('div')`
    margin: 1rem;
    .react-datepicker-wrapper{
        
        background: #fff;
        border: 1px solid #DAE2ED;
        color: #1C2025;
        box-shadow: 0px 2px 4px rgba(0,0,0, 0.05);
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 120ms;
    }
`;

export {
    CustomForm,
    CreateTicketActionButtonGroup,
    CustomInput,
    ErrorDialog,
    DateWrapper
}