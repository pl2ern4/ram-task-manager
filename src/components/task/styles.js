import { styled } from '@mui/material/styles';

const CommentSectionWrapper = styled('div')`
  margin: 1rem;
`;

const CommentEditorSection = styled('div')`
  flex: 10;
  padding: 1rem 0;
  overflow: auto;
`;

const CommentSection = styled('div')`
  margin: 1rem;
  display:flex;
  flex-flow: row;
  align-items: center;
`;

export {
    CommentSectionWrapper,
    CommentEditorSection,
    CommentSection
}