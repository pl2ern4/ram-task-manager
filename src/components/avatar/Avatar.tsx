import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

const AvatarSection = styled(Avatar)`
  flex: 2;
  background-color:unset;
`;

type Props = {
    name?: string
}

const CustomAvatar = (props:Props) => {
    const {name} = props;
    if(!name){
        return <AvatarSection><AccountCircleRoundedIcon color="action" fontSize="large"/></AvatarSection>;
    }
    return <AvatarSection><Avatar {...stringAvatar(name)} /></AvatarSection>;
}

export default CustomAvatar;