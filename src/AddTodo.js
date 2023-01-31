import React, {useState} from "react";
import { Button, Grid, TextField } from "@mui/material"

const AddTodo = (props) => {
    // 사용자의 입력을 저장할 오브젝트
    console.log("AddTodo 실행");

    const [item, setItem] = useState({ title: ""});
    const addItem = props.addItem;

    // onButtonClick 함수작성
    const onButtonClick = () => {
        console.log("onButtonClick 실행");
        addItem(item); // addItem 함수 사용
        setItem({ title: "" });
    }

    // enterKeyEventHandler 함수
    const enterKeyEventHandler = (e) => {
        console.log("enterKeyEventHandler 실행");
        if(e.key === 'Enter') {
            onButtonClick();
        }
    }

    // onInputChange 함수작성
    const onInputChange = (e) => {
        console.log("onInputChange 실행");

        setItem({title: e.target.value});
        console.log(item);
    }
    // onInputChange 함수 TextField에 연결
    return (
        <Grid container style={{ marginTop: 20 }}>
            <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                <TextField placeholder="Add Todo here" fullWidth 
                onChange={onInputChange} 
                onKeyPress={enterKeyEventHandler}
                value={item.title}
                />
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{ height: '100%' }} color="secondary" 
                variant="outlined" onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    )
}

export default AddTodo;