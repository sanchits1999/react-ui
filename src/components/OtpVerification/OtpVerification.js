import React, { useRef, useState, useEffect } from "react"
import ov from "./OtpVerification.module.css"
import img from "../../utils/Images/undraw_online_messaging_9ro6.png"
import { BsArrowRight } from "react-icons/bs"

const OtpVerification = (props) => {

    const inpt1 = useRef(null)
    const inpt2 = useRef(null)
    const inpt3 = useRef(null)
    const inpt4 = useRef(null)
    const [Timer, setTimer] = useState(60)
    let count = 2
    let back = false
    let code

    useEffect(() => {
        timer(Timer)
    }, [Timer])

    const timer = (t) => {
        if (t === 0) {
            return
        } else {
            setTimeout(() => {
                setTimer(Timer - 1)
            }, 1000)
        }
    }

    const onChange = (e, ref) => {
        const re = /^[0-9\b]+$/;

        if (back) {
            return
        }
        if (e.target.value === '' || re.test(e.target.value)) {
            if (e.target.value.length === 0) {
                count--
            } else {
                switch (ref) {
                    case inpt1: count++
                        back = false
                        inpt2.current.focus()
                        break
                    case inpt2: count++
                        back = false
                        inpt3.current.focus()
                        break
                    case inpt3: count++
                        back = false
                        inpt4.current.focus()
                        break
                    case inpt4: count++
                        back = false
                        console.log("inpt4")
                        break
                }
            }

        } else {
            ref.current.value = ""
        }

    }

    const onBackspaceClick = (e, ref) => {
        if (e.keyCode === 8) {
            if (ref.current.value.length === 0) {
                switch (ref) {
                    case inpt1: console.log(inpt1.current.value)
                        break
                    case inpt2: back = true
                        inpt1.current.focus()
                        break
                    case inpt3: back = true
                        inpt2.current.focus()
                        break
                    case inpt4: back = true
                        inpt3.current.focus()
                        break
                }
            } else {
                switch (ref) {
                    case inpt1: back = false
                        inpt1.current.value = ""
                        break
                    case inpt2: back = false
                        inpt2.current.value = ""
                        break
                    case inpt3: back = false
                        inpt3.current.value = ""
                        break
                    case inpt4: back = false
                        inpt4.current.value = ""
                        break
                }
            }

        }
    }

    const HandleFocus = (e) => {
        if (back) {
            count = 2
            back = false
        }
        else {
            count = 1
        }
    }

    const onSubmit = () => {
        code = inpt1.current.value + inpt2.current.value + inpt3.current.value + inpt4.current.value
        if (code.length < 4) {
            alert("Please enter a valid OTP")
        } else {
            if (code !== "1234") {
                alert("Invalid OTP")
            } else {
                inpt1.current.value = ""
                inpt2.current.value = ""
                inpt3.current.value = ""
                inpt4.current.value = ""
                count = 2
                back = false
                alert("Success")
            }
        }
    }

    const HandleResend = ()=>{
        if(Timer!==0){
            return null
        }
        alert("Code Sent")
        setTimer(60)
    }

    return (
        <div className={ov.parent}>
            <div className={ov.child2}>
                <div className={ov.formContainer}>
                    <div className={ov.head}>Verification Code</div>
                    <div className={ov.subHead}>Please type the verification code<br />sent to +91 88******56</div>

                    <div className={ov.inputContainer}>
                        <div className={ov.input}>
                            <input placeholder="0" onFocus={HandleFocus} onChange={(e) => { onChange(e, inpt1) }} onKeyDown={(e) => { onBackspaceClick(e, inpt1) }} className={ov.inputStyle} ref={inpt1} maxLength={1} />
                        </div>
                        <div className={ov.input}>
                            <input placeholder="0" onFocus={HandleFocus} onChange={(e) => { onChange(e, inpt2) }} onKeyDown={(e) => { onBackspaceClick(e, inpt2) }} className={ov.inputStyle} ref={inpt2} maxLength={1} />
                        </div>
                        <div className={ov.input}>
                            <input placeholder="0" onFocus={HandleFocus} onChange={(e) => { onChange(e, inpt3) }} onKeyDown={(e) => { onBackspaceClick(e, inpt3) }} className={ov.inputStyle} ref={inpt3} maxLength={1} />
                        </div>
                        <div className={ov.input}>
                            <input placeholder="0" onFocus={HandleFocus} onChange={(e) => { onChange(e, inpt4) }} onKeyDown={(e) => { onBackspaceClick(e, inpt4) }} className={ov.inputStyle} ref={inpt4} maxLength={1} />
                        </div>
                    </div>
                    <div className={ov.timerParent} onClick={HandleResend}>
                        {Timer !== 0 ? <div className={ov.timer}>
                            Resend code in 00:{Timer}
                        </div> : null}
                        {Timer === 0 ? <div className={ov.timer}>
                            Resend code
                        </div> : null}
                        <BsArrowRight size={18} className={ov.icon} />
                    </div>
                    <div className={ov.verifyContainer} onClick={onSubmit}>
                        <div className={ov.verifyText}>VERIFY</div>
                    </div>

                </div>
            </div>
            <div className={ov.child1}>
                <div className={ov.imageContainer}>
                    <img className={ov.image} src={img} />
                </div>
            </div>
        </div>
    )
}

export default OtpVerification