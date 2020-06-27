import React, { useState } from "react"
import mn from "./MobileNumber.module.css"
import img1 from "../../utils/Images/undraw_secure_login_pdn4.png"
import ReactPhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/material.css"
import TextField from '@material-ui/core/TextField'


const MobileNumber = () => {

    const [phone, setphone] = useState("")

    const handleOnChange = (e) => {
        const re = /^[0-9\b]+$/;

        if (e.target.value === '' || re.test(e.target.value)) {
            setphone(e.target.value)
            console.log(e.target.value)
        }
    }

    const HandleClick = () => {
        if (phone.length < 10) {
            alert("Please enter a valid number")
        }
    }

    return (
        <div className={mn.parent}>
            <div className={mn.child1}>
                <div className={mn.imageContainer}>
                    <img className={mn.image} src={img1} />
                </div>
            </div>
            <div className={mn.child2}>
                <div className={mn.formContainer}>
                    <div className={mn.head}>Mobile Verification</div>
                    <div className={mn.subHead}>Please enter your mobile number to<br />verify your account</div>
                    <div className={mn.phoneInput}>
                        <input placeholder="884*****56" type="tel" maxLength={10} className={mn.inputStyle} onChange={handleOnChange} value={phone} />
                    </div>
                    <div className={mn.verifyContainer} onClick={HandleClick}>
                        <div className={mn.verifyText}>VERIFY</div>
                    </div>
                </div>
            </div>
        </div>)
}

export default MobileNumber