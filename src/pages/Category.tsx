import { Stack, Typography } from '@mui/material';
import bg from '../assets/bg.png';
import CategoryList from '../components/Category/CategoryList';

const styles = {
    root: {
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
    categories: {
        color: "white",
        fontSize: 60,
        fontWeight: "bold",
        fontFamily: "Comic Sans MS",
    }
}
const Category = () => {
    return (
        <Stack sx={styles.root} spacing={2}>
            <Typography sx={styles.categories}>Categories</Typography>
            <CategoryList />
        </Stack>
    )
}

export default Category
