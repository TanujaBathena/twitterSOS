import { Layout, Menu, Checkbox } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import React from 'react';
import './sider.css';
const { Sider } = Layout;
const { SubMenu } = Menu;
function onChange(e) {
    const { checked } = e.target;
    //console.log(`checked = ${e.target.checked}`);
}
class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Sider
                // width={220}
                style={{
                    overflow: 'auto',
                    height: 'cover',
                    // position: 'fixed',
                    left: 0,
                }}
                collapsible
                collapsed={collapsed}
                onCollapse={this.onCollapse}>
                <div className='logo' />
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>

                    <SubMenu class="submenu" style={{ minHeight: '70px', padding: 15, fontSize: 'x-large' }} key='sub1' icon={<UnorderedListOutlined style={{ fontSize: 'large' }} />} title='Sort by'>
                        <Menu.Item style={{ padding: 10 }} key='1'>
                            <Checkbox onChange={onChange}></Checkbox> Oxygen
                        </Menu.Item>
                        <Menu.Item style={{ padding: 10 }} key='2'>
                            <Checkbox onChange={onChange}></Checkbox> Medicine
                        </Menu.Item>
                        <Menu.Item style={{ padding: 10 }} key='3'>
                            <Checkbox onChange={onChange}></Checkbox> Money
                        </Menu.Item>
                        <Menu.Item style={{ padding: 10 }} key='4'>
                            <Checkbox onChange={onChange}></Checkbox> Hospital beds
                        </Menu.Item>
                        <Menu.Item style={{ padding: 10 }} key='5'>
                            <Checkbox onChange={onChange}></Checkbox> Plasma donors
                        </Menu.Item>



                    </SubMenu>
                </Menu>
            </Sider >
        );
    }
}

//ReactDOM.render(<SiderDemo />, mountNode);
export default SiderDemo;
