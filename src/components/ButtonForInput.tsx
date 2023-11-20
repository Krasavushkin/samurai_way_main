import React from 'react';


type ButtonForInputProps = {
    name: string
    callBack: ()=>void
    /*callBack: (title:string) => void
    title: string*/
}


export const ButtonForInput = (props: ButtonForInputProps) => {
    const onClickButtonHandler = () => {
        props.callBack()
       /* props.callBack(props.title)*/
    }

    return (
        <button onClick={onClickButtonHandler}> {props.name} </button>

    );
};

