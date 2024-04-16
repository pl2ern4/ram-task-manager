import Grid from '@mui/material/Grid';
import BoardLayout from '../../components/board/BoardLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Board() {
  const router = useRouter();
  useEffect(()=>{
    const taskBoard = window.localStorage.getItem("boardName");
    if(taskBoard && router.query.board!==taskBoard){
      router.replace(`/board/${taskBoard}`);
    }
    if(!taskBoard){
      router.replace(`/createboard`);
    }
  },[])
  return (
      <Grid container spacing={2}>
          <BoardLayout/>
      </Grid>
    )
};