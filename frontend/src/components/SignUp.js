import { Card, Form, Input, Button } from 'antd'
import React, {useRef} from 'react'
import styles from '../styles/SignUp.module.css'
import { useAuth } from '../contexts/AuthContext'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    function handleSubmit(e){
        e.preventDefault()
        signup(emailRef.current.value, passwordRef.current.value)
    }


    return (
        <div className={styles.mainWrapper}>
        <h2 className={styles.header}>Sign Up</h2>
        <Card className={styles.card}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                labelCol={{span:6}}
                labelWrap
                labelAlign='left'
                onFinish={handleSubmit()}
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input ref={emailRef}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password ref={passwordRef}/>
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmpassword"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password ref={passwordConfirmRef} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        </div>
    )
}
