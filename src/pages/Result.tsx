import { Button, Stack, Typography } from '@mui/material';
import bg from '../assets/bg.png';
import { useLocation, useNavigate } from 'react-router-dom';
import ReplayIcon from '@mui/icons-material/Replay';
const styles={
    root:{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight:"100vh",
        maxHeight: "auto",
        boxShadow: "1px 1px 10px black",
        boxSizing: "border-box",
        padding: 3
    },
    result:{
        color: "white",
        fontSize: 60,
        fontWeight: "bold",
        fontFamily: "Comic Sans MS",
    },
    correct:{
        border:'20px solid #88D66C',
        width:200,
        height:200,
        borderRadius:"50%",
    },
    wrong:{
        border:'20px solid #FF6363',
        width:200,
        height:200,
        borderRadius:"50%",
    },
    score:{
        border:'20px solid #A1E3F9',
        width:200,
        height:200,
        borderRadius:"50%",
    },
    title:{
        fontSize:20,
        color:"white"
    },
    balance:{
        fontSize:50,
        color:"white",
        fontWeight:"bold"
    },
    button:{
        backgroundColor:"white",
        width:{
            lg:"10%",
            md:"10%",
            sm:"50%",
            xs:"50%"
        },
        borderRadius:3,
        color:"#42a5f5",
        alignSelf:"center",
        padding:2
    }
}
const Result = () => {
    const location = useLocation();
    const score= location.state;
    const navigate = useNavigate();
  return (
    <Stack sx={styles.root} spacing={10} alignItems={{lg:"none",md:"none",sm:"center",xs:"center"}}>
         <Typography sx={styles.result}>Result</Typography>
         <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} justifyContent={'center'} spacing={7}>
            <Stack sx={styles.correct} justifyContent={'center'} alignItems={'center'}>
                <Typography sx={styles.balance}>{score*1}/20</Typography>
                <Typography sx={styles.title}>Correct Answer</Typography>
            </Stack>
            <Stack sx={styles.wrong} justifyContent={'center'} alignItems={'center'}>
                <Typography sx={styles.balance}>{20-score}/20</Typography>
                <Typography sx={styles.title}>Wrong Answer</Typography>
            </Stack>
            <Stack sx={styles.score} justifyContent={'center'} alignItems={'center'}>
                <Typography sx={styles.balance}>{score*5}/100</Typography>
                <Typography sx={styles.title}>Total Score</Typography>
            </Stack>
         </Stack>
         <Button variant='contained' sx={styles.button} endIcon={<ReplayIcon color='primary' />} onClick={()=>navigate('/category')}>Play again</Button>
    </Stack>
  )
}

export default Result
