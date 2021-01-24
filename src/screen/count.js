import React, { useState } from 'react'
function Count() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Count {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>count</button>
        </>
    );


}
export default Count