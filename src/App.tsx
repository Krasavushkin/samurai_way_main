import './App.css';
import React, {useState} from "react";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {ButtonForInput} from "./components/ButtonForInput";



function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ])

    let[title, setTitle] = useState('');
    console.log(title);

    const callBackButtonHandler =()=> {
        sendMessage(title)
        setTitle("")
    }

    const sendMessage = (title: string) => {
       let newMessage = {message: title};
       setMessage([newMessage,...message])


    }


    return (
        <div className="App">
           {/* <FullInput sendMessage={sendMessage} />*/}
            <Input setTitle={setTitle} title={title}/>
            <ButtonForInput name={"+"} callBack={callBackButtonHandler} /*title={title}*//>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>


    )
        ;
}

export default App;


/*------------для метода Map---------------------
   const [students, setStudents] = useState([
           {id: 1, name: "James", age: 8},
           {id: 2, name: "Robert", age: 18},
           {id: 3, name: "John", age: 28},
           {id: 4, name: "Michael", age: 38},
           {id: 5, name: "William", age: 48},
           {id: 6, name: "David", age: 58},
           {id: 7, name: "Richard", age: 68},
           {id: 8, name: "Joseph", age: 78},
           {id: 9, name: "Thomas", age: 88},
           {id: 10, name: "Charles", age: 98},
           {id: 11, name: "Christopher", age: 100},
       ]
   )

return (
<NewComponent students={students}/>
function App() {

    return (
        <NewComponent />
    );
}*/


/*----------------/ Buttons/-------------*/
/*  const Button1Foo =(subscriber: string, age: number) => {
    console.log(subscriber, age)
}
const Button2Foo =(subscriber: string) => {
    console.log(subscriber)
}

const Button3Foo =() => {
    console.log("im stupid button")
}

   <Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo('im vasya',21)}/>
           <Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo('im ivan')}/>
            <Button name={"MyYouTubeChannel-3"} callBack={Button3Foo} />


*/


/*
--------------/useState/-----------------
    let [a, setA] = useState(1)
const onClickHandler =()=>{
    setA(++a);
    console.log(a)
}
const onClickHandler2 =()=>{
    setA(0);
    console.log(a)
}

return (
    <div className={"App"}>


        <h1> {a} </h1>
        <button onClick={onClickHandler}> number</button>
        <button onClick={onClickHandler2}> 0</button>


    </div>*/


//-----------------микротаски урок 1, последнее задание--------------

//type FilterType = 'all' | 'dollar'| 'ruble'
/*const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
])
let [filter, setFilter] = useState('all')


let currentMoney = money;

if (filter === 'dollar') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
}
if (filter === 'ruble') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
}


const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)

}

return (

    <>
        <FilterComponent allMoney={currentMoney} />
        <div style={{marginLeft: "35px"}}>
            <Button name={'all'}  callBack={()=>onClickFilterHandler('all')}/>
            <Button name={'ruble'}  callBack={()=>onClickFilterHandler('ruble')}/>
            <Button name={'dollar'}  callBack={()=>onClickFilterHandler('dollar')}/>
        </div>
    </>*/
/*

            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {

                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots} </span>
                            <span> {objFromMoneyArr.value} </span>
                            <span> {objFromMoneyArr.number} </span>
                        </li>
                    )
                })}

            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => onClickFilterHandler('all')}> all</button>
                <button onClick={() => onClickFilterHandler('ruble')}> ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}> dollar</button>
            </div>*/