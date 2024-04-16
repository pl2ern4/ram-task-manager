import Editor from "../editor/Editor";
import SelectInput from "../select-input/SelectInput";
import {TICKET_STATUS, TICKET_TYPE, USER} from "../../constants";
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "@/context/application";
import React, { useState } from "react";
import {
    CustomForm,
    CreateTicketActionButtonGroup,
    CustomInput,
    ErrorDialog,
    DateWrapper
} from './styles';

const CreateTask = ()=>{
    const {setOpenCreateTicket, createTicket } = useGlobalContext();
    const [description, setdescription ] = useState();
    const [error, setError] = useState('');
    const [deadlineDate, setDeadLineDate] = useState();
    const saveData = (event) => {
        const elements = new FormData(event.currentTarget);
        const title = elements.get("title");
        const status = elements.get("status");
        const asignee = elements.get("asignee");
        const taskType = elements.get("taskType");
        const storyPoint = elements.get("storyPoint");
        const reportee = elements.get("reportee");
        if(!title){
            setError("Please enter Correct Title");
            return;
        }
        setError('');
        event.preventDefault();
        createTicket({
            title,
            storyPoint,
            taskType,
            asignee,
            reportee,
            status,
            description,
            deadlineDate
        });
    }

    return (
        <form method="POST" onSubmit={saveData}>
            <CustomForm>
                {error && <ErrorDialog>{error}</ErrorDialog>}
                    <CustomInput name="title" id="title" aria-describedby="my-helper-text" type="text" placeholder="Title" required/>
                    <Editor setDescription={setdescription} label="Description" shouldDisplayBorderOnReadOnly={true} shouldAlwaysEditable={true}/>
                    <SelectInput name="status" label='status' defaultOption='Todo' options={TICKET_STATUS}/>
                    <SelectInput name="asignee" label='Asignee' defaultOption='Not Assigned' options={USER}/>
                    <SelectInput name="reportee" label='Reportee' defaultOption='Not Assigned' options={USER}/>
                    <SelectInput name="taskType" label='Task Type' defaultOption='Not Assigned' options={TICKET_TYPE}/>
                    <CustomInput name="storyPoint" id="storyPoint" aria-describedby="my-helper-text" type="number" placeholder="Story Point"/>
                    <DateWrapper>
                        <span> Deadline of the Ticket? </span>
                        <DatePicker selected={deadlineDate} onChange={setDeadLineDate}/>
                    </DateWrapper>
                    <CreateTicketActionButtonGroup>
                        <Button variant="contained" type="submit">Create Ticket</Button>
                        <Button variant="outlined" onClick={()=>setOpenCreateTicket(false)}>Cancel</Button>
                    </CreateTicketActionButtonGroup>
                
            </CustomForm>
        </form>
    )
}

export default CreateTask;