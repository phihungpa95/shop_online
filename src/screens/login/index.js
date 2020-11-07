import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../../App.css';

const modal = document.querySelector("#modal");

const validate = yup.object().shape({
    userName: yup.string().required("Vui lòng nhập tài khoản"),
    passwords: yup.string().required("Vui lòng nhập mật khẩu")
})

const Login = function (props, ref) {

    let [open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            open: function () {
                setOpen(true)
            },
            close: close
        }
    })

    function close() {
        setOpen(false)
    }

    return ReactDOM.createPortal(
        <div className="modal" style={{ display: open ? 'block' : 'none' }}>
            <Formik onSubmit={(value) => {
                console.log(value);
            }}
                initialValues={{
                    userName: "",
                    passwords: ""
                }}
                validatetionSchema={validate}
                render={(formikProps) => {
                    return (
                        <Form className="modal-content animate">
                            <div className="imgcontainer">
                                <span onClick={close} className="close" title="Close Modal">×</span>
                                {/* <img src="img/img_avatar2.png" alt="Avatar" className="avatar" /> */}
                            </div>
                            <div className="container">
                                <label htmlFor="uname" name="lblname"><b>Tài khoản</b></label>
                                <Field type="text" placeholder="Enter Username" name="userName" onChange={formikProps.handleChange} />
                                <ErrorMessage name="userName">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                <label htmlFor="psw" name="lblpass"><b>Mật khẩu</b></label>
                                <Field type="password" placeholder="Enter Password" name="passwords" onChange={formikProps.handleChange} />
                                <ErrorMessage name="passwords">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                <button className="btnLogin" type="submit">Đăng nhập</button>
                                <label>
                                    <Field type="checkbox" defaultChecked="checked" name="remember" /> Remember me
    </label>
                            </div>
                            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                                <button type="button" onClick={close} className="cancelbtn">Cancel</button>
                                <span className="psw">Forgot <a href="#">password?</a></span>
                            </div>
                        </Form>
                    )
                }}
            />
        </div>,
        modal
    )
}

export default forwardRef(Login);