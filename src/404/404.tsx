import React from 'react'
import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';
type Props = {}

const Errors404 = (props: Props) => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">
                    <NavLink to='/'>Back home</NavLink>
                </Button>}
            />
        </div>
    )
}

export default Errors404

