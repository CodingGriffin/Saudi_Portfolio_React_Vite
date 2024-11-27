import AssetManagement from '@/components/AssetManagement'
import CloseRange from '@/components/CloseRange'
import DataIntegration from '@/components/DataIntegration'
import GeospatialSystems from '@/components/GeospatialSystems'
import HeritageDocumentation from '@/components/HeritageDocumentation'
import HeritagePhotogrammetry from '@/components/HeritagePhotogrammetry'
import UAVSFM from '@/components/UAVSFM'
import React from 'react'

function Projects() {
    return (
        <>
            <HeritageDocumentation />
            <UAVSFM />
            <HeritagePhotogrammetry />
            <DataIntegration />
            <CloseRange />
            <AssetManagement />
            <GeospatialSystems />
        </>
    )
}

export default Projects