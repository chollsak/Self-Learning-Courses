import React from 'react'

type GreetProps = {
    name: string
    massageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h2>
            {
                props.isLoggedIn ? `Welcome ${props.name} ! You have ${props.massageCount} unread messages` : `Welcome Guest`
            }
        </h2>
    </div>
  )
}

