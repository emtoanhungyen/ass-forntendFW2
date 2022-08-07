import { Button, Checkbox, Form, Input, message, Select } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch } from '../../app/hook'
import { register } from '../../features/UserSlice'
import { BoxSignup, Container, DivLogo, Left, Right } from '../../styles/views/signup'
import Logo from './../../assets/images/anhhtus-logo 2.png'

type Props = {}


const Signup = (props: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        try {
            dispatch(register(values));
            message.success("Đăng ký thành công, vui lòng đăng nhập");
            navigate('/signin');
        } catch (error) {
            console.log(error);
            message.error("Đã xảy ra lỗi.");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
            <BoxSignup>
                <Left>
                    <DivForm>
                        <FormCustom
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="email"
                                label="E-mail"
                                style={{ display: 'block' }}
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input size='large' />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                style={{ display: 'block' }}
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                style={{ display: 'block' }}
                                rules={[
                                    { required: true, message: 'Please input your password!' },
                                ]}
                            >
                                <Input.Password size='large' />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Đăng ký
                                </Button>
                            </Form.Item>
                            <hr />
                            <Custom>
                                <span>or</span>
                                <Link to='/signin'>Đăng nhập</Link>
                            </Custom>
                        </FormCustom>
                    </DivForm>
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
export const DivForm = styled.div`
    width: 100%;
`
export const Custom = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    

`
export const FormCustom = styled(Form)`
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 55px;
    .ant-col-16{
        max-width: 100%;
    }
    .ant-col-offset-8 {
    margin-left: 42%;
    }
`
export const FormItem = styled(Form.Item)`
    left: 10px;
`
export const InputCustom = styled(Input)`
    width: 525px;
    height: 40px;
    border: 1px solid #C7C7C7;
    margin-left: 7px;
    .antd-col-16 {
        max-width: 100%;
    }
`
export const InputCustom1 = styled(Input.Password)`
    width: 525px;
    height: 40px;
    border: 1px solid #C7C7C7;
    margin-left: 7px;
`
export const ButCustom = styled(Button)`
    width: 200px;
    height: 45px;
    background-color: #FF424E;
    border: 1px solid #FFFFFF;
    border-radius: 6px;
    margin-right: 10px;
`
export default Signup