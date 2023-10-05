import { useState } from 'react'

//to define prop types
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[]; //a list of strings
    country: Country; //and use enum Country here
}

//we can define options for your type
export enum Country {
    Brazil = " Brazil",
    Canada = "Canada",
    France = "France"
}

export const Person = (props: Props) => {
    const [name, setName] = useState<string>('')
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Name: {props.email}</h2>
            <h2>Name: {props.age}</h2>
            <h2>This person {props.isMarried ? 'is' : 'is not'} MARRIED</h2>
            {props.friends.map((friend, index) => (
                <h1 key={index}>{friend}</h1>
            ))}
            <h2>{props.country}</h2>
        </div>
    )
}