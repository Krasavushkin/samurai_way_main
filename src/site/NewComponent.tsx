import React from 'react';

type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}


/*export const NewComponent = (props: NewComponentType) => {*/
export const NewComponent = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <table>
            <tr>
                <th> № </th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {topCars.map((topCars, index) => {
                return (

                    <tr>
                        <td>{index+1} </td>
                        <td>{topCars.manufacturer}</td>
                        <td>{topCars.model}</td>
                    </tr>  )
            })}
        </table>

            );
};



{/*
<ul>
           {props.students.map((objectFromStudentArray, index) => {
               debugger
               return (<li key={objectFromStudentArray.id}>
                       <span>{objectFromStudentArray.name}</span>
                       <span>{objectFromStudentArray.age}</span>
                   </li>
               )
           })}
       </ul>
*/}

