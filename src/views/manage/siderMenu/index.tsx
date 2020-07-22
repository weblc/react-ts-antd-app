import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import { SvgIcon, Space } from "@/components";

import { getMenuData,getSubMenu, MenusTypes } from "@/router/menu";

interface siderProps {
    collapsed: boolean;
    pathname: string;
}

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderMenu: React.FC<siderProps> = ({ collapsed ,pathname='' }) => {
    const [openKeys, setOpenKeys]:Array<any> = useState([]);
    const allSubMenu = getSubMenu()
    useEffect(() => {
        setOpenKeys( pathname.split('/')[2]?[`/${pathname.split('/')[1]}/${pathname.split('/')[2]}`]:[])
      }, [pathname])
    const menusRender = getMenuData().map((item: MenusTypes) => (
        <SubMenu
            key={item.path}
            title={
                <Space size={collapsed ? 30 : 10}>
                    <SvgIcon type={item.icon} size={22} />
                    <span>{item.name}</span>
                </Space>
            }
        >
            {item.children &&
                item.children.map((e, i) => (
                    <Menu.Item key={e.path} title={e.name}>
                        <Link to={e.path}>{e.name}</Link>
                    </Menu.Item>
                ))}
        </SubMenu>
    ));

    const onOpenChange = (currentKeys:Array<string>)=>{
        const latestOpenKey = currentKeys.find(key => openKeys.indexOf(key) === -1);
        if (allSubMenu.indexOf(latestOpenKey) === -1) {
            setOpenKeys(currentKeys)
        } else {
            setOpenKeys(latestOpenKey?[latestOpenKey]:[])
        }
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: "#ececec" }}>
            <Link to="/home">
                <SvgIcon type="icon-chouzhi" size={58} />
                <span>Cui</span>
            </Link>
            <Menu mode="inline" selectedKeys={[pathname]}  onOpenChange={onOpenChange} openKeys={openKeys} style={{ background: "#ececec" }}
            >
                {menusRender}
            </Menu>
        </Sider>
    );
};

export default SiderMenu;
