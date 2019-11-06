import { useState } from "react"

const useFormInput = (initialState) => {
    const [state, setState] = useState(initialState);
    return {
        value: state,
        onChange: (e) => setState(e.target.value)
    }
}

export default useFormInput;