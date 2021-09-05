import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
function ColumnSort({
    column: { filterValue, preFilteredRows, setFilter },
}) {

    // const count = preFilteredRows.length
    const [myBounce, setBounce] = useState(filterValue)

    const getChange = useAsyncDebounce(myBounce => {
        setFilter(myBounce || undefined)
    }, 1000)

    return (
        <div style={{ margin: "10px 0px" }}>
            <input
                className="form-control"
                value={myBounce}
                onChange={e => {
                    setBounce(e.target.value)
                    getChange(e.target.value)

                }}
            // placeholder={`Search ${count} records...`}
            />
        </div>
    )
}

export default ColumnSort
