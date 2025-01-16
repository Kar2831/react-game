function Result(props){/*{secretNum,terms}*/
    const {secretNum,terms} = props  //Destructuring
    let result
    if(terms){
        if(terms > secretNum){
            result = "Higher"
        }
        else if(terms < secretNum){
            result = "Lower"
        }
        else if(terms == secretNum){
            result = "Yipee! Correct"
        }
        else{
            result = "Invalid Input"
        }
    }

    return(
        <>
            <h1>You Guessed: {result}</h1>
        </>
    );
}

export default Result;