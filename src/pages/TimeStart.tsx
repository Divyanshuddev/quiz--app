import { Stack, Typography } from '@mui/material';
import bg from '../assets/bg.png';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
    timerBox: {
        backgroundColor: "rgba(196, 191, 193, 0.8)",
        width: {
            lg:"40%",
            md:"40%",
            sm:"70%",
            xs:"70%"
        }
    },
    timerStyle: {
        fontSize: 300,
        fontWeight: "bold",
        color: "white"

    }
}
const TimeStart = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(5);
    const location= useLocation();
    const data= location.state;
    useEffect(() => {
        setTimeout(() => {
            if (count === 1) {
                navigate('/quiz',{state:data})
            }
            setCount(count - 1)
        }, 1000);
    }, [count])
    return (
        <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
            <Stack sx={styles.timerBox} justifyContent={'center'} alignItems={'center'}>
                <Typography sx={styles.timerStyle}>{count}</Typography>
            </Stack>
        </Stack>
    )
}

export default TimeStart
