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

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
    }

    const editItem = props.editItem;
    const editEventHandler = (e) => {
        setItem({...item, title: e.target.value});
    };

    //turnOnReadOnly 작성
    const turnOnReadOnly = (e) => {
        if (e.key === 'Enter' && readOnly === false){
            setReadOnly(true);
            editItem(item);
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
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{ 
                        "aria-label": "naked", 
                        readOnly: readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
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




