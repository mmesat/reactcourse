import React  from "react";


export const Small = React.memo(({value}) => {
    console.log('me volví a dibujar :(')
  return (
    <small>{value}</small>
    
  )
})