import { axiosInstance } from '../config';
import React, { useEffect, useState, useContext } from 'react'
// import Dropdown from './Dropdown';
import { Context } from '../Context/Context';
import "./User.css"

export default function User(props) {

    const { user } = useContext(Context);
    const [userLinks, setuserLinks] = useState([]);

    useEffect(() => {
        const getUserLink = async () => {
            try {
                const resLink = await axiosInstance.get("/links/" + user.username);
                setuserLinks(resLink.data.birthday);

            }
            catch (err) {
                console.log("error");
            }

        }
        getUserLink();


    }
        , [props.refData, user.username])


    return (
        <div className='Usercontainer'>

            <div className='d-flex flex-column justify-content-center align-items-center pt-5'>

                {userLinks.map((val, ind) => {
                    return (<a key={ind} className='LinkButton links'> {val.name} </a>)
                })}



            </div>
        </div>
    )
}
