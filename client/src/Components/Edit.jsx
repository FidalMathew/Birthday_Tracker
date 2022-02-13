import React, { useEffect, useState, useContext } from 'react'
import "./edit.css"
import { Context } from '../Context/Context';
import { axiosInstance } from '../config';
import { Link } from 'react-router-dom';
export default function Edit() {

    const { user } = useContext(Context);

    const [userLinks, setuserLinks] = useState([]);

    const [stext, setText] = useState("")
    const [sdate, setDate] = useState("")

    const [refData, setrefData] = useState(true)

    const PostLink = async () => {

        try {
            await axiosInstance.put("/links/", {
                username: user.username,
                birthday: [...userLinks, { name: stext, date: sdate }]
            });

            setrefData(!refData);
            setText("");
            setDate("");

        } catch (error) {
            console.log(error);
            console.log("Error sending links to database!");
        }

    }

    const deleteData = async (val, ind) => {
        // setuserLinks(userLinks.splice(ind, 1));
        const ARR = userLinks.filter((v, i) => {

            return i !== ind
        })
        console.log(ARR);
        setuserLinks(ARR);
        try {

            const res = await axiosInstance.put("/links/del/", {
                username: user.username,
                birthday: ARR
            });
            console.log(res);
            setrefData(!refData);

        } catch (error) {
            console.log(error);
        }

    }


    const PostEmail = async () => {

        try {
            await axiosInstance.post("/links/email", {
                username: user.username,
                email: user.email,
                Bname: stext,
                Bdate: sdate
            });


        } catch (error) {
            console.log(error);
            console.log("Error sending email!");
        }


    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof (sdate));
        setuserLinks([...userLinks, { name: stext, date: sdate }]);
        PostLink();
        PostEmail();
    }

    useEffect(() => {
        const getUserLink = async () => {
            try {
                const resdate = await axiosInstance.get("/links/" + user.username);
                setuserLinks(resdate.data.birthday);

            }
            catch (err) {
                console.log("error getting links!")
                console.log(err);
            }

        }
        getUserLink(user.username);

    }, [user.username])

    return (
        <div className='EditPage container'>
            <div className='bg-white text-dark rounded AdminEdit_Section'>
                <div className='edit_section'>

                    <h4>Add Birthdays</h4>
                    <form onSubmit={HandleSubmit}>
                        <div className="input-group flex-nowrap api_input mb-3">

                            <input type="text" className="form-control" placeholder="Text"
                                aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setText(e.target.value)} value={stext} required />

                            <input type="date" className="form-control" placeholder="Link"
                                aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setDate(e.target.value)} value={sdate} required />


                            <button className='ml-3 btn btn-primary' type='submit'>Add</button>
                        </div>

                    </form>
                    {/* </BackLink> */}

                    <div className='AllLinks'>
                        {userLinks.map((val, ind) => {
                            return (<div key={ind} className='text_link mb-2 p-2' >

                                <div> {`text: ${val.name} `}</div> <button onClick={() => deleteData(val, ind)}>X</button>
                                <div>{`link: ${val.date}`}</div>

                            </div>)
                        })}

                    </div>
                </div>


            </div>
        </div >

    )
}
