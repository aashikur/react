import { useState } from "react"


export default function ShowText() {

    const [active,setActive] = useState(true);

    const Toggle = () => {
     setActive(!active)
    }

    return (<>
        <div className="wrapper" style={{maxWidth:'600px'}}>
            <h2>Show/hide Text </h2>
            <button onClick={Toggle}  >Show/hide</button>

            <p className={active? '':'hidden'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus fugit quisquam. Voluptatum minima quis debitis unde illo et doloremque alias temporibus consequuntur culpa soluta, facilis ratione possimus quibusdam at!
            </p>

        </div>

    </>)
}