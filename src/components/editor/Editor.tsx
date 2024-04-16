import dynamic from 'next/dynamic';
import { styled } from '@mui/material/styles';
import { SetStateAction, useState } from 'react'
import 'react-quill/dist/quill.snow.css';


interface Props {
    label?: string;
    shouldDisplayBorderOnReadOnly: boolean;
    shouldShowButtons?:boolean;
    shouldAlwaysEditable?:boolean;
    setDescription:any;
    value?: string;
}

interface EditorReadOnlyProps {
    shouldDisplayBorderOnReadOnly: boolean
}

const EditorReadOnly = styled('div')<EditorReadOnlyProps>(({shouldDisplayBorderOnReadOnly})=>({
    border: shouldDisplayBorderOnReadOnly? `.5px solid grey`:'',
    minHeight: '3rem',
    width: '100%',
    borderRadius:'.2rem',
    overflow: 'scroll'
}))

const ReactQuill = dynamic(
    () => import('react-quill'),
    { ssr: false }
  )

const Editor = ({shouldDisplayBorderOnReadOnly, label, shouldAlwaysEditable, setDescription, shouldShowButtons, value=''}:Props) => {
    const [editorHtml, setEditorHTML] = useState(value);
    const [content, setContent] = useState(value);
    const [isEditable, setIsEditable] = useState(false);
    const handleChange = (html: SetStateAction<string>) => {
        setEditorHTML(html);
        !shouldShowButtons && setDescription && setDescription(html);
    }
    const handleSubmit = () => {
        setIsEditable(false);
        setContent('');
        setDescription && setDescription(editorHtml);
        setEditorHTML('')
    }
    const handleDoubleClick = () => {
        setIsEditable(true);
    }
    const handleCancel = () =>{
        setIsEditable(false);
    }
    return (
        <div>
            {label && <label><h3>{label} :</h3></label>}
            {!isEditable && !shouldAlwaysEditable? <EditorReadOnly shouldDisplayBorderOnReadOnly={shouldDisplayBorderOnReadOnly} className='clickable-div' onDoubleClick={handleDoubleClick} dangerouslySetInnerHTML={{__html: content }}/> :
                <div>
                        <ReactQuill 
                            onChange={handleChange}
                            value={editorHtml}
                            modules={Editor.modules}
                            formats={Editor.formats}
                            bounds={'.app'}
                        />
                        {
                            shouldShowButtons && (
                                <>
                                    <button type='button' onClick={handleSubmit}>Save</button>   
                                    <button type='button' onClick={handleCancel}>Cancel</button>  
                                </>
                            )
                        }
                </div>
            }
        </div>
    )


}

Editor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: [200]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
       [{ 'color': [] }, { 'background': [] }],
      ['image', 'video'],
      ['clean']
    ]
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'color','background',
    'list', 'bullet', 'indent',
    'image', 'video'
  ]

export default Editor;