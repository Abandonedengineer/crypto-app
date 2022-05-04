import React, { useState } from 'react';
import "./SideBarComponent.css"
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import * as Fa from "react-icons/fa";

export default function SideBarComponent() {
    const [collapased, setCollapased] = useState(false)
    return (
        <ProSidebar collapsed={collapased} width={210} height={200} collapsedWidth={50} >
            <SidebarHeader className='sidebar-header'>
                <div
                    style={{
                        padding: '5px',
                        display: 'flex',
                        justifyContent: "flex-end"
                    }}
                    onClick={() => { setCollapased(!collapased) }}
                >
                    <Fa.FaAngleDoubleLeft />
                </div>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <Fa.FaAngellist />dexscreener
                </div>
            </SidebarHeader>
            <Menu className='sidebar-header'>
                <SubMenu title="Watchlist" icon={<Fa.FaStar color={"yellow"} />} defaultOpen>
                    <MenuItem icon={<Fa.FaAdn />}>Alerts</MenuItem>
                    <MenuItem icon={<Fa.FaAdversal />}>Multicharts</MenuItem>
                    <MenuItem icon={<Fa.FaAffiliatetheme />}>Trends</MenuItem>
                    <MenuItem icon={<Fa.FaAirbnb />}>New Pairs</MenuItem>
                    <MenuItem icon={<Fa.FaAlgolia />}>Gainers & Losers</MenuItem>
                    <MenuItem icon={<Fa.FaAlipay />}>Ethereum</MenuItem>
                    <MenuItem icon={<Fa.FaAmazonPay />}>BSC</MenuItem>
                    <MenuItem icon={<Fa.FaAmazon />}>Polygon</MenuItem>
                    <MenuItem icon={<Fa.FaAndroid />}>Avalanche</MenuItem>
                    <MenuItem icon={<Fa.FaAngrycreative />}>Fantom</MenuItem>
                    <MenuItem icon={<Fa.FaAngellist />}>Harmony</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Cronos</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Osmosis</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Osmosis</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Osmosis</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Osmosis</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Osmosis</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Osmosis</MenuItem>
                    <MenuItem icon={<Fa.FaGem />}>Osmosis</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    );
}
