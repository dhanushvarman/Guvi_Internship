import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Profile() {

    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        fetchdata()
    }, [])


    let fetchdata = async () => {
        try {
            setLoading(true)
            const users = await axios.get("https://634579c9dcae733e8ff3a795.mockapi.io/internship")
            setUsers(users.data)
            setLoading(false)
        } catch (error) {
            alert("Error")
        }
    }


    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">USERS</h1>
                <Link to={"/"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Log Out</Link>
            </div>
            {
                isLoading ? <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                    :
                    <div className='container-fluid'>
                        <div className='row'>
                            {
                                users.map((user) => {
                                    return <div className='col-md-4 mb-5'>
                                        <div class="card" style={{ width: "25rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title"><b style={{fontWeight:"bolder",color:"black"}}>Name:</b> <span>{user.name}</span></h5>
                                                <h5 class="card-title"><b style={{fontWeight:"bolder",color:"black"}}>Email:</b> <span>{user.email}</span></h5>
                                                <h5 class="card-title"><b style={{fontWeight:"bolder",color:"black"}}>Date of Birth:</b> <span>{user.dob}</span></h5>
                                                <h5 class="card-title"><b style={{fontWeight:"bolder",color:"black"}}>Gender:</b> <span>{user.gender}</span></h5>
                                                <h5 class="card-title"><b style={{fontWeight:"bolder",color:"black"}}>State:</b> <span>{user.state}</span></h5>
                                                <h5 class="card-title"><b style={{fontWeight:"bolder",color:"black"}}>Phone Number:</b> <span>{user.phonenumber}</span></h5>
                                                
                                                
                                                <Link to={`/edituser/${user.id}`} class="btn btn-danger">Edit user</Link>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Profile