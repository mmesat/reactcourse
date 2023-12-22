import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    console.log(counter)
    const incrementFather = useCallback(
      (value) => {
        //console.log(value);
        console.log(counter)
        setCounter((c)=> c+value);
      },
      [],
    );

    useEffect(() => {
        //incrementFather();
    }, [incrementFather])
    
    

    // const incrementFather =() => {
    //     setCounter(counter+1);
    // }

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr/>

        <ShowIncrement increment={incrementFather} />


    </>
  )
}
