import { Button, Checkbox, Form, Input, message } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../../api/users'
import { useAppDispatch } from '../../app/hook'
import { logIn } from '../../features/UserSlice'
import { BoxSignup, Container, DivLogo, Left, Right } from '../../styles/views/signup'
import Logo from './../../assets/images/anhhtus-logo 2.png'

type Props = {}

const Signin = (props: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const onFinish = async (values: any) => {

        try {
            const { data } = await login(values);
            localStorage.setItem('user', JSON.stringify(data));
            message.success("Đăng nhập thành công");
            if (data.user.role === 1) {
                navigate('/admin');
                message.success("Chào mừng admin");
            } else {
                navigate('/');
                message.success("Chào user")
            }
        } catch (error) {
            console.log(error);
            message.error("Đã có lỗi xảy ra.");
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Container>
            <BoxSignup>
                <Left>
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
                            label="Password"
                            name="password"
                            style={{ display: 'block' }}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password size='large' />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                        <hr />
                        <Custom>
                            <span>or</span>
                            <Link to='/signup'>Đăng ký</Link>
                        </Custom>
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
export const Custom = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

`
export const FormCustom = styled(Form)`
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 100px;
    .ant-col-16{
        max-width: 100%;
    }
    .ant-col-offset-8 {
    margin-left: 40%;
    }
`
// export const FormItem = styled(Form.Item)`
//     left: 10px;
// `
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
    width: 200px;
    height: 45px;
    background-color: #FF424E;
    border: 1px solid #FFFFFF;
    border-radius: 6px;
`
export default Signin