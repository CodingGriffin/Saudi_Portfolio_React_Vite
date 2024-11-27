import Footer from '@/components/Footer';
import Header from '../components/Header';
import React from 'react'
import { Outlet } from 'react-router'
import { useTranslation } from 'react-i18next';

function MainLayout() {
    const { i18n } = useTranslation();
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout