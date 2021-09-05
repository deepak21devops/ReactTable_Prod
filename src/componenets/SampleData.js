import React, { useState, useEffect } from 'react'
import BasicTable from './BasicTable'
function SampleData() {
    const [paginations, setPagination] = useState([])
    const [pagelinks, setPageLinks] = useState([])
    const [apiData, setApiData] = useState([])

    const [pageToggle, setPageToggle] = useState('')

    const { previous, next } = pagelinks

    const { page, pages } = paginations


    useEffect(() => {

        const fetchApi = async (api) => {
            await (fetch(api)
                .then(res => {
                    if (res.ok) {
                        res.json().then(result => {
                            setApiData(result.data)
                            setPageLinks(result.meta.pagination.links)
                            setPagination(result.meta.pagination)
                        })
                    }
                })
            )


        }

        fetchApi(`https://gorest.co.in/public/v1/users`)


    }, [])

    useEffect(() => {
        const fetchPage = async (apis) => {
            await (fetch(apis)
                .then(res => {
                    if (res.ok) {
                        res.json().then(result => {
                            setApiData(result.data)
                            setPageLinks(result.meta.pagination.links)
                            setPagination(result.meta.pagination)
                        })
                    }
                })
            )
        }

        fetchPage(pageToggle)

    }, [pageToggle])


    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "40px" }}>REACT DYNAMIC DATA TABLE </div>

            <div>
                <BasicTable main={apiData} pagelinks={pagelinks} />
            </div>

            <div style={{ textAlign: "center" }}>
                <button style={{ fontSize: "10px", marginRight: "10px" }} className={previous === null ? "button_disable" : "button"} disabled={previous === null ? true : false} onClick={() => setPageToggle(`https://gorest.co.in/public/v1/users?page=1`)}>{"<<"}</button>
                <button style={{ fontSize: "10px", marginRight: "10px" }} className={previous === null ? "button_disable" : "button"} disabled={previous === null ? true : false} onClick={() => setPageToggle(previous)} > Previous Page</button>
                <label>Enter Page Number : </label>
                <input style={{ width: '50px', marginRight: "10px" }} min={page} max={pages} type="text" defaultValue={page} onChange={(e) => {
                    const Pagenumber = Number(e.target.value)
                    setPageToggle(`https://gorest.co.in/public/v1/users?page=${Pagenumber}`)

                }}></input>
                <button style={{ fontSize: "10px", marginRight: "10px" }} className={page === pages ? "button_disable" : "button"} disabled={page === pages ? true : false} onClick={() => setPageToggle(next)} >Next Page</button>
                <button style={{ fontSize: "10px" }} className={page === pages ? "button_disable" : "button"} disabled={page === pages ? true : false} onClick={() => setPageToggle(`https://gorest.co.in/public/v1/users?page=${pages}`)}>{">>"}</button><br></br>
                <div style={{ marginTop: "20px" }}>
                    Page : <strong>{page}</strong> of <strong>{pages}</strong>
                </div>
            </div>

        </div>
    )
}

export default SampleData
