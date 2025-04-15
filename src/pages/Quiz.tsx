import { Button, CircularProgress, FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import quizBg from '../assets/bg.png'
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import he from 'he';

const styles = {
    root: {
        backgroundImage: `url(${quizBg})`,
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
    loadingRoot: {
        minHeight: "100vh",
        maxHeight: "auto",
        boxSizing: "border-box",
    },
    question: {
        fontSize: {
            lg:40,
            md:40,
            sm:30,
            xs:30
        },
        color: "white",
        fontWeight:"bold"
    },
    optionMenu:{
        backgroundColor:"white",
        width:{
            lg:400,
            md:400,
            sm:300,
            xs:300
        },
        padding:{
            lg:2,
            md:2,
            sm:1,
            xs:1
        },
        boxShadow:"1px 1px 10px black",
        borderRadius:2
    },
    button:{
        width:"7%",
        borderRadius:3,
        color:"#42a5f5",
        backgroundColor:"white !important"
    },
    questionStack:{
        width:{
            lg:"70%",
            md:"70%",
            sm:"100%",
            xs:"100%"
        }
    }
}
type QuizData = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}
type QuizResponse = {
    response_code: number;
    results: QuizData[];
}
const Quiz = () => {
    const location = useLocation();
    const [quizData, setQuizData] = useState<QuizResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [options, setOptions] = useState<Array<string>>([]);
    const [score, setScore] = useState<number>(0);
    const [currentSelect, setCurrentSelect] = useState<string>('');
    const navigate = useNavigate();
    const apiData = location.state;
    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get<QuizResponse>(`https://opentdb.com/api.php?amount=20&category=${apiData.category}&difficulty=${apiData.invisible.toLowerCase()}&type=multiple`);
            setQuizData(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);

        }
    }
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        if (quizData) {
            const question = quizData.results[currentQuestion];
            const options = [...question.incorrect_answers];
            const randomIndex = Math.floor(Math.random() * (options.length + 1));
            options.splice(randomIndex, 0, question.correct_answer);
            setOptions(options);
        }
    }, [quizData, currentQuestion]);
    const handleOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSelect(event.target.value)
    };
    const handleNext = () => {
        if (currentSelect === quizData?.results[currentQuestion].correct_answer) {
            setScore(score + 1);
            console.log(score);
            
        }
        else {
            setScore(score-1===-1?0:score - 1);
            console.log((score));
            
        }
        if (currentQuestion <= 18) {
            setCurrentQuestion(currentQuestion + 1);
            setCurrentSelect('')
        }
        else {
            navigate('/result', { state: score })
        }
    }
    return (
        <Stack sx={styles.root}>

            {
                loading ? (
                    <Stack justifyContent='center' alignItems={'center'} sx={styles.loadingRoot} >
                        <CircularProgress sx={{ color: "white" }} size={100} />
                    </Stack>
                ) : (
                    <Stack spacing={4} justifyContent={'center'} alignItems={'center'}>
                        <Stack sx={styles.questionStack}>
                        <Typography sx={styles.question}> {he.decode(quizData?.results[currentQuestion].question || '')}</Typography>
                        </Stack>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                sx={{gap:3}}
                            >
                                {
                                    options.map((data, index) => {
                                        return (
                                            <FormControlLabel key={index} value={he.decode(data)} control={<Radio />} label={he.decode(data)} onChange={(event)=>{handleOptions(event as React.ChangeEvent<HTMLInputElement>)}} sx={styles.optionMenu} style={{color:currentSelect===he.decode(data)?"white":"black",backgroundColor:currentSelect===he.decode(data)?"#42a5f5":""}}  />
                                        )
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" onClick={handleNext} disabled={currentSelect === ''} sx={styles.button}>Next</Button>
                    </Stack>
                )
            }
        </Stack>
    )
}

export default Quiz
