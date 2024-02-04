import React, {useState} from "react";
import './App.css'

export default function Timer() {
    const [name, setName] = useState('Атай')
    const [value, setValue] = useState(0)

    const changeName = (newName) => {
        setName(newName)
    }

    const increment = () =>{
        setValue(value +1)
    }

    const decrement = () =>{
        setValue(value -1)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            height: '100vh',
            alignItems: "center",
            flexDirection: "column",
            fontSize: 20,
            gap: 10
        }}>
            <p>Здравствуйте {name}!</p>
            <input style={{
                width: 150,
                height: 40,
                border: "1px solid gray",
                borderRadius: 6,
                textAlign: "center"

            }}
                type="text"
                value={name}
                onChange={(e) => changeName(e.target.value)}
                placeholder="Введите имя..."
            />
            <span>{value}</span>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
