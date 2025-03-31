// intro.tsx component that includes a paragraph that introduces both of you.
// For your names, use props to obtain the names that were passed in from <App />

import './App.css'

export function Intro(props) {

    return (
        <div className="Intro">
            <h2>{props.username}</h2>
            <p>Hello! This is Kang's and Andy's introduction. Kang is
            a RBE and CS major, and he is excited to learn about software engineering!
            {/*Andy, please write your description here below */}

            </p>

        </div>
    )
}

export default Intro
