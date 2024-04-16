import { PropsWithChildren, createContext, useEffect, useState } from "react";

type Ticket = {
  title: string;
  description: any;
  id: string;
  status: string;
  taskType: string;
  storyPoint: number;
  createdAt: Date;
  modifiedAt: Date;
  asignee: string;
  reportee: string;
  isBookMarked: boolean;
  deadlineDate: Date|string
}

type Comment = {
  comment: string;
  id: string;
  ticketId: string;
}

interface IGlobalContextProps {
    applicationState: any;
    boardName: string;
    setApplicationState: (user: any) => void;
    setBoardName: (board: string) => void;
    openCreateTicket: boolean;
    setOpenCreateTicket:(shouldOpen: boolean) => void;
    tickets: Ticket[];
    comments: Comment[];
    createTicket: (data: any) => void;
    updateTicket: (data:any)=>void;
    createComment: (data:any)=>void;
    deleteTicket: (data: string)=>void;
    openUpdateTicket: (id:string|undefined, shouldOpenDialog:boolean)=>void
    openUpdateTicketDialog: {id:string|undefined, shouldOpenDialog: boolean}
  }
  
export const GlobalContext = createContext<IGlobalContextProps>({
    applicationState: {},
    boardName:"",
    openCreateTicket:false,
    setBoardName:()=>{},
    comments: [],
    setApplicationState: () => {},
    setOpenCreateTicket:()=>{},
    createTicket: ()=>{},
    tickets:[],
    createComment: ()=>{},
    updateTicket:()=>{},
    openUpdateTicket: ()=>{},
    deleteTicket: ()=>{},
    openUpdateTicketDialog: {id:undefined, shouldOpenDialog: false}
});

const ApplicationProvider = (props: PropsWithChildren) => {
    const ticket:Ticket[] = [];
    const comment:Comment[] = [];
    const initialDialogState = {id:undefined, shouldOpenDialog: false};
    const [applicationState, setApplicationState] = useState({});
    const [boardName, setBoard] = useState("");
    const [openCreateTicket, setOpenCreateTicket] = useState(false);
    const [comments, setComment] = useState(comment);
    const [tickets, setTickets] = useState(ticket);
    const [openUpdateTicketDialog, setOpenUpdateTickets] = useState(initialDialogState);
    
    const openUpdateTicket = (id, shouldOpenDialog)=>{
      setOpenUpdateTickets({id, shouldOpenDialog});
    }
    const setBoardName = (boardName) =>{
        window?.localStorage.setItem("boardName", boardName);
        setBoard(boardName);
    }
    const createComment = ({value, id})=>{
      const commentId = new Date().getTime()+'';
      const newComment = {id:commentId,  ticketId: id, comment: value };
      const commentList = [...comments, newComment];
      setComment(commentList)
      window.localStorage.setItem('comments',JSON.stringify(commentList));
    }
    const createTicket = ({title,
      storyPoint,
      taskType,
      asignee,
      reportee,
      description,
      status}) =>{
      const id = new Date().getTime()+'';
      const newTicket:Ticket = {
        id,
        title,
        storyPoint,
        taskType,
        asignee,
        status,
        createdAt: new Date(),
        modifiedAt: new Date(),
        description,
        reportee,
        isBookMarked: false,
        deadlineDate: Date()
      };
      const updatedList = [...tickets, newTicket];
      
      setTickets(updatedList);
      setOpenCreateTicket(false);
      window.localStorage.setItem('tickets',JSON.stringify(updatedList));
    }

    const updateTicket = ({id, node, data}) =>{
      const items = [...tickets];
      const index = items.findIndex(o=>o.id===id);
      items[index] = {...items[index], [node]:data, modifiedAt: new Date() }
      setTickets(items);
      window.localStorage.setItem('tickets',JSON.stringify(items));
    }

    const deleteTicket = toBeDeleteTicketId=>{
        const newTicket = [...tickets];
        const updatedList = newTicket.filter(item=>item.id!==toBeDeleteTicketId);
        setTickets(updatedList);
        setOpenUpdateTickets(initialDialogState);
        window.localStorage.setItem('tickets',JSON.stringify(updatedList));
    }

    useEffect(()=>{
        const boardName = window?.localStorage.getItem("boardName");
        const tickets = window.localStorage.getItem('tickets',);
        const comments = window.localStorage.getItem('comments',);
        boardName && setBoard(boardName);
        tickets && setTickets(JSON.parse(tickets));
        comments && setComment(JSON.parse(comments));
    },[]);

    return (
      <GlobalContext.Provider value={{ deleteTicket, comments, createComment, openUpdateTicketDialog, openUpdateTicket, updateTicket, tickets, createTicket, applicationState, boardName, setBoardName, setApplicationState, openCreateTicket, setOpenCreateTicket,  }}>
        {props.children}
      </GlobalContext.Provider>
    );
};

export default ApplicationProvider;