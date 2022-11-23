import './Container.css'
import usersList from './list'

import { useState, useEffect } from "react";

let Container = () => {

    let [choseUser, setChoseUser] = useState(usersList[0]);

    let [userUan, setUserUan] = useState(choseUser["uan"] || "")
    let [userEmail, setUserEmail] = useState(choseUser["email"] || "")
    let [userAddress, setUserAddress] = useState(choseUser["address"] || "")

    useEffect(() => {
        setUserUan(choseUser["uan"] || "")
        setUserEmail(choseUser["email"] || "")
        setUserAddress(choseUser["address"] || "")
        document.getElementById('form-email').classList.remove('error-field')
        document.getElementById('form-uan').classList.remove('error-field')
    }, [choseUser])

    let onSubmit = (e) => {
        e.preventDefault()
        let uanValue = document.getElementById('form-uan').value
        let emailValue = document.getElementById('form-email').value
        let uanPattern = /[0-9]{16}/g
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g

        if ( !uanPattern.test(uanValue) ) {
            document.getElementById('form-uan').classList.add('error-field')
        } else {
            document.getElementById('form-uan').classList.remove('error-field')
            choseUser["uan"] = uanValue
        }
        
        if ( !emailPattern.test(emailValue) ) {
            document.getElementById('form-email').classList.add('error-field')
        } else {
            document.getElementById('form-email').classList.remove('error-field')
            choseUser["email"] = emailValue
        }

        choseUser["address"] = document.getElementById('form-address').value;
    }

    return (
        <div className="container">
            <div id='content-1'>
                <div id="content-profile-template">
                    <img id='face-img' src={choseUser["icon"]} alt="No Image" />
                    <div>
                        <p id='content-name'>{choseUser["name"]}</p>
                        <p id='content-mobile'>{choseUser["phone"]}</p>
                    </div>
                </div>
                <form >
                    <p id='content-user-details'>
                        User Details
                    </p>
                    <div id='form-fields'>
                        <div className='inline-field'>
                            <label id='form-uan-label' htmlFor="form-uan">UAN:</label>
                            <input value={userUan || ""} onChange={(e) => {setUserUan(e.target.value)}} id='form-uan' className='form-uan' placeholder='0000 0000 0000 0000' type="text" />
                        </div>
                        <div className='inline-field'>
                            <label id='form-email-label' htmlFor="form-email">Email Address:</label>
                            <input value={userEmail || ""} onChange={(e) => {setUserEmail(e.target.value)}} id='form-email' className='form-email' placeholder='xyz@example.com' type="email" />
                        </div>
                        <div className='inline-field'>
                            <label className='' id='form-address-label' htmlFor="form-address">Address:</label>
                            <input value={userAddress || ""} onChange={(e) => {setUserAddress(e.target.value)}} id='form-address' className='form-address' type="text" />
                        </div>
                    </div>
                    <button onClick={onSubmit} id='update-user-details'>Update User Details</button>
                </form>
            </div>
            <div id='content-2'>
                <p id='user-list'>User List</p>
                <div id='table-title'>
                    <p id='table-title-user-id'>User ID</p>
                    <p id='table-title-name'>Name</p>
                    <p id='table-title-phone-number'>Phone Number</p>
                </div>
                <hr id='table-br' />
                <div id='profile-lists'>
                    {
                        usersList.map((user) => {
                            return (
                                <div className='list-user' onClick={() => {setChoseUser(user)}}>
                                    <div className='profile-list' style={{}}>
                                        <p className="profile-list-user-id width-fix">{user["userId"]}</p>
                                        <div className='icon-and-name'>
                                            <img src={user["icon"]} className="profile-icon" alt="No Icon" />
                                            <p className="profile-list-name">{user["name"]}</p>
                                        </div>
                                        <p className="profile-list-phone-number width-fix">{user["phone"].slice(0,2) + 'XXXXXX' + user["phone"].slice(8,10) }</p>
                                    </div>
                                    <hr className='table-hr' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Container;