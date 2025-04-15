import {  Box, Stack, Typography } from "@mui/material";
import pin from '../../assets/pin.png'
const styles={
    root:{
        padding:3,
        height:120,
        boxShadow:"10px 10px 5px black",
        width:"100%",
        "&:hover":{
            boxShadow:"none"
        },
        
    },
    title: {
        color: "#333333",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Comic Sans MS",

      },
      pin:{
        width:30,
        height:30,
        position:"absolute",
        top:-10,
        right:0,
      }
      
}
type CategoryCardProps={
    name:string;
    color:string;
    categoryId:number;
    invisible:(name:string,categoryId:number)=>void;
}
const CategoryCard:React.FC<CategoryCardProps> = ({name,color,categoryId,invisible}) => {
  return (
    <Stack sx={styles.root}   onClick={()=>invisible(name,categoryId)}  style={{backgroundColor:color}} position={'relative'} >
      <Box component={'img'} src={pin} sx={styles.pin} alignSelf={'flex-end'}  />
      <Typography sx={styles.title}>{name}</Typography>
    </Stack>
  )
}

export default CategoryCard
