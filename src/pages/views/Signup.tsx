import { Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BoxSignup, Container, DivLogo, Left, Right } from '../../styles/views/signup'
import Logo from './../../assets/images/anhhtus-logo 2.png'

type Props = {}

const Signup = (props: Props) => {
    return (
        <Container>
            <BoxSignup>
                <Left>
                    <FormCustom
                        // name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <FormItem
                            name="email"
                            rules={[{ required: true, message: 'Không được để trống.' }]}
                        >
                            <label htmlFor="">Email</label>
                            <InputCustom />
                        </FormItem>

                        <Form.Item
                            name="sdt"
                            rules={[{ required: true, message: 'Không được để trống.' }]}
                        >
                            <label htmlFor="">Số điện thoại</label>
                            <InputCustom />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Không được để trống.' }]}
                        >
                            <label htmlFor="">Mật khẩu</label>
                            <InputCustom1 />
                        </Form.Item>



                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </FormCustom>
                </Left>
                <Right>
                    <DivLogo>
                        <Link to='/'>
                            <img src={Logo} />
                        </Link>
                    </DivLogo>
                </Right>
            </BoxSignup>
        </Container>
    )
}
export const FormCustom = styled(Form)`
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 100px;
`
export const FormItem = styled(Form.Item)`
    left: 10px;
`
export const InputCustom = styled(Input)`
    width: 525px;
    height: 40px;
    border: 1px solid #C7C7C7;
    margin-left: 7px;
`
export const InputCustom1 = styled(Input.Password)`
    width: 525px;
    height: 40px;
    border: 1px solid #C7C7C7;
    margin-left: 7px;
`
export const ButCustom = styled(Button)`
    width: 525px;
    height: 40px;
    background-color: #FF424E;
    border: 1px solid #FFFFFF;
`
export default Signup