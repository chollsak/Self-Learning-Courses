import React, { useState } from 'react';
import CardProps from './CardProps';

const names = ['Marcus', 'Lukaku', 'Sanchez'];

export default function NameUseState() {
    const [currentName, setCurrentName] = useState("What is your name?");

    return (
        <>
            <div>{currentName}</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                {names.map((name, index) => (
                    <CardProps
                        key={index}
                        name={name}
                        onClick={() => setCurrentName(name)}
                    />
                ))}
            </div>
        </>
    );
}
