import { Box, Button, Stack, Typography } from "@mui/material"
import bg from '../assets/bg.png';
import quizLogo from '../assets/quiz_logo.png';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useNavigate } from "react-router-dom";
const styles = {
  root: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width:{
      lg:"50%",
      md:"50%",
      sm:"100%",
      xs:"100%"
    },
    height: "100vh",
    boxShadow: "1px 1px 10px black"
  },
  root2: {
    width:{
      lg:"50%",
      md:"50%",
      sm:"100%",
      xs:"100%"
    },
    height: "100vh",
  },
  title: {
    color: "white",
    fontSize: {
      lg:50,
      md:50,
      sm:30,
      xs:30
    },
    fontWeight: "bold",
    fontFamily: "Comic Sans MS",
  },
  quizLogo: {
    width: {
      lg:500,
      md:500,
      sm:300,
      xs:300
    },
    height: {
      lg:400,
      md:400,
      sm:200,
      xs:250
    },
  },
  stack1: {
    backgroundColor: "#F75A5A",
    width: "100%",
    height: "25vh",
    boxShadow: "1px 1px 10px black",
    boxSizing: "border-box",
    padding: 2
  },
  stack2: {
    backgroundColor: "#FFA955",
    width: "100%",
    height: "25vh",
    boxShadow: "1px 1px 10px black",
    boxSizing: "border-box",
    padding: 2
  },
  stack3: {
    backgroundColor: "#FFD63A",
    width: "100%",
    height: "25vh",
    boxShadow: "1px 1px 10px black",
    boxSizing: "border-box",
    padding: 2
  },
  stack4: {
    backgroundColor: "#6DE1D2",
    width: "100%",
    height: "25vh",
    boxShadow: "1px 1px 10px black",
    boxSizing: "border-box",
    padding: 2
  },
  startButton: {
    width:{
      lg:"65%",
      md:"65%",
      sm:"70%",
      xs:"70%"
    }
  },
  startIcon: {
    width: {
      lg:100,
      md:100,
      sm:50,
      xs:50
    },
    height: {
      lg:100,
      md:100,
      sm:50,
      xs:50
    }
  }
}
const Home = () => {
  const navigate = useNavigate();
  return (
    <Stack direction={{lg:"row",md:"row",sm:"column",xs:"column"}} alignItems={'center'}>
      <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
        <Box component={'img'} src={quizLogo} sx={styles.quizLogo} />
      </Stack>
      <Stack sx={styles.root2} direction={'column'}>
        <Stack sx={styles.stack1} justifyContent={'flex-end'}>
          <Typography sx={styles.title}>Welcome to the</Typography>
        </Stack>
        <Stack sx={styles.stack2} justifyContent={'flex-end'} >
          <Typography sx={styles.title}>QuizzI</Typography>
        </Stack>
        <Stack sx={styles.stack3} justifyContent={'flex-end'}>
          <Typography sx={styles.title}>Pick a topic to get started</Typography>
        </Stack>
        <Stack sx={styles.stack4} justifyContent={'flex-end'} >
          <Button sx={styles.startButton} onClick={() => navigate('/category')}>
            <Typography sx={styles.title}>Start</Typography>
            <DoubleArrowIcon sx={styles.startIcon} style={{ color: "white", opacity: 0.5 }} />
            <DoubleArrowIcon sx={styles.startIcon} style={{ color: "white", opacity: 0.8 }} />
            <DoubleArrowIcon sx={styles.startIcon} style={{ color: "white" }} />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home
