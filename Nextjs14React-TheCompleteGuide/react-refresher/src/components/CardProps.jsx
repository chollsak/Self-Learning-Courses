import React from 'react'

export default function CardProps(props) {
  return (
    <div 
            onClick={props.onClick}
            style={{
                width: '100px',
                height: 'fit-content',
                border: 'solid 1px white',
                borderRadius: '5%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                color: '#000',
                cursor: 'pointer' // Add a cursor style to indicate clickable items
            }}
        >
            {props.name}
        </div>
  )
}
