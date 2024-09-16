import React from 'react'

type PersonProps = {
    name:{
        firstName: string
        lastName: string
    }
}

export const Person = (props: PersonProps) => {
  return (
    <div>
       <div>{ props.name.firstName} {props.name.lastName}</div> 
    </div>
  )
}
