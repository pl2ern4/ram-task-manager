import {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

type Props = {
    openDialog:boolean;
    title?: string;
    onClose: (args:boolean)=>void;
    children: React.ReactElement;
}
export default function FormDialog({openDialog,  onClose, title, children}: Props) {

  const [open, setOpen] = useState(openDialog)
  const handleClose = () => {
    setOpen(false);
    onClose(false)
  };

  useEffect(()=>
    setOpen(openDialog)
  ,[openDialog])

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        {children}
      </Dialog>
  );
}