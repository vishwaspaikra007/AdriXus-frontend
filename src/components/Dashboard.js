import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import baseURL from './config'

export const _fetch = (url, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: 'bearer ' + token,
        },
        withCredentials: true,
      })
      let data = await response.json()
      console.log('data', data)
      resolve(data)
    } catch (err) {
      console.log(err)
      alert('something went wrong')
      reject()
    }
  })
}

export default function Dashboard(props) {
  const [isAscendingSort, setIsAscendingSort] = useState(true)
  const [originalList, setOriginalList] = useState([])
  const [pageNo, setPageNo] = useState(0)
  const [page, setPage] = useState({})

  function asc(a, b) {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1
    else return 0
  }

  function desc(a, b) {
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return -1
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return 1
    else return 0
  }

  const handleSearch = (e) => {
    let filteredList = originalList.filter((obj) => {
      return (
        (obj.firstName + ' ' + obj.lastName)
          .substring(0, e.target.value.length)
          .toLowerCase() == e.target.value.toLowerCase()
      )
    })
    setPageNo(0)
    handlePage(filteredList)
  }

  const handlePage = (data) => {
    // console.log(page)
    let i = 0
    let totPages = {}
    for (let i = 0; i < data.length; ++i) {
      let key = parseInt(i / 10)
      if (totPages[key] === undefined) totPages[key] = []
      totPages[key].push(data[i])
    }
    // console.log(totPages)
    setPage(totPages)
  }

  useEffect(() => {
    // if(!props.token)
    // fetch(baseURL + 'getusers', {
    //     method: 'GET',
    //     credentials: 'include',
    //     headers: {
    //       'Authorization': 'bearer ' + props.token,
    //     },
    //     withCredentials: true,
    // }).then((response) => {
    //   response.json().then((data) => {
    //     // console.log(data)
    //     if(data.status === 'successfull') {
    //         handlePage(data.list)
    //         setOriginalList(data.list)
    //     } else {
    //       props.setToken("")
    //       props.setName("")
    //       window.localStorage.removeItem('signedToken')
    //       window.localStorage.removeItem('name')
    //     }
    //   }).catch(err => {
    //       console.log(err)
    //       alert('something went wrong')
    //   })
    // })
    async function call() {
      if (props.token) {
        let data = await _fetch(baseURL + 'getusers', props.token)
        if (data.status === 'successfull') {
          handlePage(data.list)
          setOriginalList(data.list)
        } else {
          props.setToken('')
          props.setName('')
          window.localStorage.removeItem('signedToken')
          window.localStorage.removeItem('name')
        }
      }
    }
    call()
  }, [props.token])

  useEffect(() => {
    let list = originalList
    isAscendingSort ? list.sort(asc) : list.sort(desc)
    handlePage(list)
  }, [isAscendingSort])

  return (
    <div className={styles.container}>
      <h1>List of all Users</h1>
      <div className={styles.options}>
        <button onClick={() => setIsAscendingSort(!isAscendingSort)}>
          sort in {isAscendingSort ? 'Descending' : 'Ascendng'} order
        </button>
        <input
          placeholder="search"
          type="text"
          name="search"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className={styles.table}>
        <div className={[styles.item, styles.head].join(' ')}>
          <span>Name</span>
          <span>Email</span>
        </div>
        {page[pageNo] &&
          page[pageNo].map((obj, idx) => {
            return (
              <div className={styles.item} key={obj.firstName + idx}>
                <span>{obj.firstName + ' ' + obj.lastName}</span>
                <span>{obj.email}</span>
              </div>
            )
          })}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => setPageNo(pageNo - 1)} disabled={pageNo < 1}>
          Previous
        </button>
        <span>{`${pageNo + 1}/${Object.keys(page).length}`}</span>
        <button
          onClick={() => setPageNo(pageNo + 1)}
          disabled={Object.keys(page).length - 1 <= pageNo}
        >
          Next
        </button>
      </div>
    </div>
  )
}
