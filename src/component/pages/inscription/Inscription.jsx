import React, { useState } from 'react'

const Inscription = () => {
    const [inputForm, setInputForm] = useState({
        pseudo: "",
        email: "",
        password: ""
    })
  return (
    <div>
        <form action="">
            <label htmlFor="">Pseudo
                <input type="text" />
            </label>
            <label htmlFor="">Email
                <input type="text" />
            </label>
            <label htmlFor="">Password
                <input type="text" />
            </label>
            <input type="submit" value="Creer compte" />
        </form>
    </div>
  )
}

export default Inscription