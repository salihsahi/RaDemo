import React, { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import authProvider from './authProvider';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import englishMessages from './i18n/en';

import visitors from './visitors';
import aracyonetimi from './aracyonetimi';
import soforyonetimi from './soforyonetimi';
import servisyonetimi from './servisyonetimi';
import aksaklikyonetimi from './aksaklikyonetimi';
import kazaislemleri from './kazaislemleri';
import cezayonetimi from './cezayonetimi';
import puantajvehakedis from './puantajvehakedis';
import aractipleri from './aractipleri';
import arackategorileri from './arackategorileri';
import kampus from './kampus';
import calismasekli from './calismasekli';
import duraklar from './duraklar';
import mesaigruplari from './mesaigruplari';
import guzergah from './guzergah';

import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';

import dataProviderFactory from './dataProvider';
import fakeServerFactory from './fakeServer';

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
}, 'en');

const App = () => {
    const [dataProvider, setDataProvider] = useState(null);

    useEffect(() => {
        let restoreFetch;

        const fetchDataProvider = async () => {
            restoreFetch = await fakeServerFactory(
                process.env.REACT_APP_DATA_PROVIDER
            );
            const dataProviderInstance = await dataProviderFactory(
                process.env.REACT_APP_DATA_PROVIDER
            );
            setDataProvider(
                // GOTCHA: dataProviderInstance can be a function
                () => dataProviderInstance
            );
        };

        fetchDataProvider();

        return restoreFetch;
    }, []);

    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return (
        <Admin
            title=""
            dataProvider={dataProvider}
            customReducers={{ theme: themeReducer }}
            customRoutes={customRoutes}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
        >
            <Resource name="customers" {...visitors} />
            <Resource
                name="commands"
                {...orders}
                options={{ label: 'Orders' }}
            />
            <Resource name="invoices" {...invoices} />
            <Resource name="products" {...products} />
            <Resource name="categories" {...categories} />
            <Resource name="reviews" {...reviews} />

            <Resource name="aracyonetimi" {...aracyonetimi} />
            <Resource name="soforyonetimi" {...soforyonetimi} />
            <Resource name="servisyonetimi" {...servisyonetimi} />
            <Resource name="aksaklikyonetimi" {...aksaklikyonetimi} />
            <Resource name="kazaislemleri" {...kazaislemleri} />
            <Resource name="cezayonetimi" {...cezayonetimi} />
            <Resource name="puantajvehakedis" {...puantajvehakedis} />
            <Resource name="aractipleri" {...aractipleri} />
            <Resource name="arackategorileri" {...arackategorileri} />
            <Resource name="kampus" {...kampus} />
            <Resource name="calismasekli" {...calismasekli} />
            <Resource name="duraklar" {...duraklar} />
            <Resource name="mesaigruplari" {...mesaigruplari} />
            <Resource name="guzergah" {...guzergah} />
        </Admin>
    );
};

export default App;
