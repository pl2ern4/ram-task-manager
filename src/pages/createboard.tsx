import { useEffect } from 'react';
import CreateBoardComponent from '../components/create-board/CreateBoard';
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '../context/application';

const CreateBoard = () => {
  const router = useRouter();
  const { setBoardName, boardName } = useGlobalContext()
  
  useEffect(()=>{
    if(boardName){
      router.push(`/board/${encodeURIComponent(boardName)}`, { scroll: false })
    }
  })
  return <CreateBoardComponent setBoardName={setBoardName}/>;
}

export default CreateBoard;