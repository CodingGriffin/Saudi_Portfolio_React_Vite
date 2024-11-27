import React from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
function App() {
    const { i18n } = useTranslation();
    const dir = i18n.language == "ar" ? "rtl" : "ltr";
    React.useLayoutEffect(() => {
        document.body.setAttribute("dir", dir);
    }, [dir]);
    const fontClass = i18n.language === 'ar' ? 'font-arabic' : 'font-english';
    return (
        <I18nextProvider i18n={i18n} defaultNS={'translation'}>
            <div className={`p - 4 ${fontClass} !important`}>
                <RouterProvider router={router} />
            </div>

        </I18nextProvider >
    )
}

export default App