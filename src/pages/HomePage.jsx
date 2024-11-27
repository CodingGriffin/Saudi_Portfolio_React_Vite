import React from 'react'
import Abouts from '../components/Abouts';
import Heritage from '../components/Heritage';
import Landing from '../components/Landing';
import Mission from '@/components/Mission';
import Strategic from '@/components/Strategic';
import System from '@/components/System';
import Services from './Services';
import Team from '@/components/Team';
import HeritageDocumentation from '../components/HeritageDocumentation';
import UAVSFM from '@/components/UAVSFM';
import HeritagePhotogrammetry from '../components/HeritagePhotogrammetry';
import DataIntegration from '@/components/DataIntegration';
import CloseRange from '@/components/CloseRange';
import AssetManagement from '@/components/AssetManagement';
import GeospatialSystems from '@/components/GeospatialSystems';
import Past from '@/components/Past';
import SaudiHeritage from '@/components/SaudiHeritage';
import Competency from '@/components/Competency';
import End from '@/components/End';
import ScrollAnimation from 'react-animate-on-scroll';
import Ethics from './Ethics';
import { useTranslation } from 'react-i18next';
import Future from './Future';
import EndSection from '@/components/ui/EndSection';
import Team2 from '@/components/Team2';
function HomePage() {
    const { i18n } = useTranslation();
    return (
        <div className={`flex flex-col `}>
            <Landing />
            <Abouts />
            <Heritage />
            <Strategic />
            <Mission />
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <Ethics />
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <Services />
            </ScrollAnimation>
            <System />
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <HeritageDocumentation />
            </ScrollAnimation>
            <UAVSFM />
            <HeritagePhotogrammetry />
            <DataIntegration />
            <CloseRange />
            <AssetManagement />
            <GeospatialSystems />
            <Team />
            <Team2 />
            <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
                <Past />
            </ScrollAnimation >
            <SaudiHeritage />
            <Competency />
            <EndSection />
            <Future />
            <End />
        </div >

    )
}

export default HomePage
