import React from 'react';
import {Button} from "../../src/components/Button";

type FilterComponentType = {
    allMoney: Array<MoneyType>
}

type MoneyType = {
    banknots: string
    value: number
    number: string
}

type ButtonType = {
    name: string
    callBack: () => void
}
const onClickHandler = () => {
}

export const FilterComponent = (props: FilterComponentType) => {
    return (
        <>

            <ul>
                {props.allMoney.map((objFromMoneyArr, index) => {

                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots} </span>
                            <span> {objFromMoneyArr.value} </span>
                            <span> {objFromMoneyArr.number} </span>
                        </li>
                      /*  <div>
                        <button onClick={onClickHandler}> {props.name} </button>
                        <button onClick={onClickHandler}> {props.name} </button>
                        <button onClick={onClickHandler}>{props.name} </button>
                        </div>*/
                    )
                })}

            </ul>

        </>
    )
}


/*
         <button onClick={() => onClickFilterHandler('all')}> all</button>
         <button onClick={() => onClickFilterHandler('ruble')}> ruble</button>
         <button onClick={() => onClickFilterHandler('dollar')}> dollar</button>

     })}
 </>
);
};

*/