import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import { useMediaQuery, Theme } from '@material-ui/core';
import { useTranslate, DashboardMenuItem, MenuItemLink } from 'react-admin';

import visitors from '../visitors';
import aracyonetimi from '../aracyonetimi';
import soforyonetimi from '../soforyonetimi';
import servisyonetimi from '../servisyonetimi';
import aksaklikyonetimi from '../aksaklikyonetimi';
import kazaislemleri from '../kazaislemleri';
import cezayonetimi from '../cezayonetimi';
import puantajvehakedis from '../puantajvehakedis';
import aractipleri from '../aractipleri';
import arackategorileri from '../arackategorileri';
import kampus from '../kampus';
import calismasekli from '../calismasekli';
import duraklar from '../duraklar';
import mesaigruplari from '../mesaigruplari';
import guzergah from '../guzergah';

import orders from '../orders';
import invoices from '../invoices';
import products from '../products';
import categories from '../categories';
import reviews from '../reviews';
import SubMenu from './SubMenu';
import { AppState } from '../types';

type MenuName =
    | 'menuCatalog'
    | 'menuSales'
    | 'menuCustomers'
    | 'menuServisIslemleri'
    | 'menuTanimlamalar';

interface Props {
    dense: boolean;
    logout: () => void;
    onMenuClick: () => void;
}

const Menu: FC<Props> = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({
        menuCatalog: false,
        menuSales: false,
        menuCustomers: false,
        menuServisIslemleri: false,
        menuTanimlamalar: false,
    });
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
    useSelector((state: AppState) => state.theme); // force rerender on theme change

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
            {/* <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                sidebarIsOpen={open}
                name="pos.menu.sales"
                icon={<orders.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/commands`}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/invoices`}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                sidebarIsOpen={open}
                name="pos.menu.catalog"
                icon={<products.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/products`}
                    primaryText={translate(`resources.products.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<products.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/categories`}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                sidebarIsOpen={open}
                name="pos.menu.customers"
                icon={<visitors.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/customers`}
                    primaryText={translate(`resources.customers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/segments`}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            /> */}
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.configuration')}
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
            <SubMenu
                handleToggle={() => handleToggle('menuServisIslemleri')}
                isOpen={state.menuServisIslemleri}
                sidebarIsOpen={open}
                name="pos.menu.servisislemleri"
                icon={<aracyonetimi.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/aracyonetimi`}
                    primaryText={translate(`resources.aracyonetimi.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<aracyonetimi.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/soforyonetimi`}
                    primaryText={translate(`resources.soforyonetimi.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<soforyonetimi.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/servisyonetimi`}
                    primaryText={translate(`resources.servisyonetimi.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<servisyonetimi.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/aksaklikyonetimi`}
                    primaryText={translate(`resources.aksaklikyonetimi.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<aksaklikyonetimi.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/kazaislemleri`}
                    primaryText={translate(`resources.kazaislemleri.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<kazaislemleri.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/cezayonetimi`}
                    primaryText={translate(`resources.cezayonetimi.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<cezayonetimi.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/puantajvehakedis`}
                    primaryText={translate(`resources.puantajvehakedis.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<puantajvehakedis.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuTanimlamalar')}
                isOpen={state.menuTanimlamalar}
                sidebarIsOpen={open}
                name="pos.menu.tanimlamalar"
                icon={<aractipleri.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/aractipleri`}
                    primaryText={translate(`resources.aractipleri.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<aractipleri.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/arackategorileri`}
                    primaryText={translate(`resources.arackategorileri.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<arackategorileri.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/kampus`}
                    primaryText={translate(`resources.kampus.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<kampus.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/calismasekli`}
                    primaryText={translate(`resources.calismasekli.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<calismasekli.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/duraklar`}
                    primaryText={translate(`resources.duraklar.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<duraklar.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/mesaigruplari`}
                    primaryText={translate(`resources.mesaigruplari.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<mesaigruplari.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/guzergah`}
                    primaryText={translate(`resources.guzergah.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<guzergah.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
        </div>
    );
};

export default Menu;
