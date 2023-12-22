import { useCounter,useFetch } from "../hooks";
import { Quote,LoadingQuote } from "./";


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {data,isLoading,hasError}= useFetch(`https://www.breakingbadapi.com/api/quotes/1${counter}`)

    const {author, quote} =!!data && data[0];

    
    return(
        <> 
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                isLoading
                ? <LoadingQuote/>
                :<Quote author ={author} quote={quote}/>

                
            }


            <button className="btn btn-primary" onClick={ () => increment()}
                    disabled={isLoading}>
                next quote
            </button>



        </>
    )
}
