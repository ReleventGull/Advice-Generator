import axios from "axios"
import { useState } from "react"
const App = () => {
    const [fact, setFact] = useState('')
    const submit = async() => {
        const response = await axios.get('https://api.adviceslip.com/advice', {}, {})
        .catch(error => console.error(error))
        console.log(response)
        setFact(response.data.slip)
    }
    return (
        <div className="mainBox">
            <h4 className="adviceTitle">ADVICE {fact ? '#' + fact.id : ''}</h4>
            <p className="quote">
            {fact ? fact.advice : 'Click the button below to get a random fact!'}
            </p>
            <div className="bottomSection">
                <img className="pauseImage" src="/images/pattern-divider-desktop.svg"/>
            </div>
      
                <div onClick={submit} className="circle">
                    <img  src="/images/icon-dice.svg"/>
                </div>
            
        </div>
    )
}

export default App