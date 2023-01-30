import React, { useState } from "react";
import { 
    ListItem, 
    ListItemText, 
    InputBase, 
    Checkbox,
    ListItemSecondaryAction,
    IconButton, 
}  from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";


const Todo = (props) => {
    const [item, setItem] = useState(props.item);

    //turnOnReadOnly 작성
    const turnOnReadOnly = (e) => {
        if (e.key === 'Enter'){
            setReadOnly(true);
        }
    }
    // readOnly 상태 변수 추가 
    const [readOnly, setReadOnly] = useState(true);
    
    // turnOffReadOnly() 함수 추가
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
  


    const deleteItem = props.deleteItem;
    
    // deleteEventHandler 작성
    const deleteEventHandler = () => {
        deleteItem(item);
    };

    return (
        <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{ 
                        "aria-label": "naked", 
                        readOnly: readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullwidth={true}
                 />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo"
                    onClick={deleteEventHandler} >
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;




