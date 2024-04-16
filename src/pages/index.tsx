import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
    useEffect(()=>{
      const taskBoard = window.localStorage.getItem("boardName");
      if(taskBoard && router.query.board!==taskBoard){
        router.replace(`/board/${taskBoard}`);
      }else{
        router.replace(`/createboard`);
      }
  },[])
  return null;
}
