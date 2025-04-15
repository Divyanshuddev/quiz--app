import { Badge, Button, Grid, Stack, Typography } from "@mui/material"
import bg from '../assets/bg.png';
import CategoryCard from "../components/Category/CategoryCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

const styles = {
  root: {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "100vh",
    maxHeight: "auto",
    boxShadow: "1px 1px 10px black",
    boxSizing: "border-box",
    padding: 3
  },
  difficulty: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Comic Sans MS",
  },
  badge: {
    color: "white",
    backgroundColor: "#03C988",
    width: 25,
    hright: 25,
    borderRadius: "50%",
    padding: 2
  },
  button: {
    width: "30%"
  }
}

const difficultyData = [
  {
    name: "Easy",
    color: "#6DE1D2",
  },
  {
    name: "Medium",
    color: "#FFA955"
  },
  {
    name: "Hard",
    color: "#F75A5A"
  }
]
const Difficulty = () => {
  const [invisible, setInvisible] = useState<string>('');
  const navigate = useNavigate();
  const location=useLocation();
  const category=location.state;
  const handleInvisible = (name: string) => {
    setInvisible(name)
  }
  return (
    <Stack sx={styles.root}>
      <Typography sx={styles.difficulty}>Difficulty</Typography>
      <Grid container spacing={3} width={'100%'} direction={'column'} sx={{placeItems:"center"}}>
        {
          difficultyData.map((data, index) => {
            return (
              <Grid size={{lg:3,md:3,sm:12,xs:12}} key={index}>
                <Badge sx={{ width: "100%" }} anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }} badgeContent={<CheckIcon style={styles.badge} />} invisible={!(invisible === data.name)}>
                  <CategoryCard name={data.name} color={data.color} categoryId={1} invisible={handleInvisible} />
                </Badge>
              </Grid>
            )
          })
        }
        <Stack justifyContent={'center'} width={'100%'} alignItems={'center'}>
          <Button variant="contained" sx={styles.button} disabled={invisible === ''} onClick={() => navigate('/timer',{state:{category,invisible}})}>Start</Button>
        </Stack>
      </Grid>
    </Stack>
  )
}

export default Difficulty
