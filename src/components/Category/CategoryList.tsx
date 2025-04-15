import { Badge, Button, Grid, Stack } from "@mui/material"
import CategoryCard from "./CategoryCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryData from './categoryData.json';
import CheckIcon from '@mui/icons-material/Check';
const styles = {
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
};

const CategoryList = () => {
    const [invisible, setInvisible] = useState<{name:string,categoryNumber:number}>({name:"",categoryNumber:0});
    const navigate = useNavigate();
    const handleInvisible = (name:string,categoryId:number) => {
        setInvisible({name:name,categoryNumber:categoryId})
    }
    return (
        <Grid container spacing={6} padding={5}>
            {
                categoryData.map((data, index) => {
                    return (
                        <Grid size={{lg:2,md:2,sm:12,xs:12}} key={index}>
                            <Badge sx={{ width: "100%" }} anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }} badgeContent={<CheckIcon style={styles.badge} />} invisible={!(invisible.name === data.name)}>
                                <CategoryCard name={data.name} color={data.backgroundColor} categoryId={data.categoryNumber} invisible={handleInvisible} />
                            </Badge>
                        </Grid>
                    )
                })
            }
            <Stack justifyContent={'center'} width={'100%'} alignItems={'center'}>
                <Button variant="contained" sx={styles.button} disabled={invisible.name === ''} onClick={() => navigate('/difficulty',{state:invisible.categoryNumber})}>Start</Button>
            </Stack>
        </Grid>
    )
}

export default CategoryList
