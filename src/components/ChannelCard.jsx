import { CheckCircle } from '@mui/icons-material'
import {Box,CardContent,CardMedia,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'


const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{md:'333px',xs:'320px'},
        margin:'auto',
        marginTop,
    }} >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textAlign:'center',
                color:'#fff'
            }}
            >
                <CardMedia 
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{
                    borderRadius:'50%',
                    height:'180px',
                    md:2,
                    border : '1px solid #e3e3e3',
                    width:'180px'
                }}
                />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:15,color:'gray', ml:'6px' }} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard