import React, { Fragment } from 'react'
import projectPreviews from './projectPreviews'

const projectsData = [];

projectsData[0] = {
    title: 'mu.la',
    route: '',
    previewData: {
        caption: 'Batchelor’s Thesis, Product Design',
        img: projectPreviews.mula,
    },
    contentData: {
        coverImg: 'asd',
        year: '2018',
        subtitle: 'Modułowy instrument muzyczny wspomagający rozwój psychoruchowy dziecka.',
        paragraphs: [
            <Fragment><bold>mu.la</bold> czyli muzyczne laboratorium pozwalające na zaangażowanie, oprócz słuchu, najważniejszego w przypadku muzyki zmysłu, także zmysłów wzroku i dotyku. Czy zastanawialiście się kiedyś jak wygląda dźwięk, jaki jest w dotyku? Albo jak jest zbudowany instrument? Z <bold>mu.lą</bold> dzieci mogą zaobserwować powstawanie fal dźwiękowych, zbadać właściwości różnych materiałów wydających dźwięki oraz tworzyć własne wersje instrumentu.</Fragment>,
            <Fragment>Podczas zabawy kategoria błędnego doświadczenia nie istnieje – każde doświadczenie, nawet to zakończone niepowodzeniem jest wartościowe. Umożliwia to rozwój myślenia wyjętego ze schematów oraz angażuje wyobraźnię i całą pomysłowość dziecka.</Fragment>
        ],
        myRole: 'Projektowanie Produktu, Praca Licencjacka',
        gallery: [
            [
                'url zdj1'
            ],
            [
                'url zdj1', 'url zdj2'
            ],
            [
                'url zdj1', 'url zdj2', 'url zdj3', 'url zdj4',
            ]
        ]
    },
    thumbnailData: {
        location: 'tu bd url',
        previewImg: 'tu bd url zdj do preview',
    }

}

projectsData[1] = {
    title: 'Soap Company',
    route: '',
    previewData: {
        caption: 'Lorem ipsum dolor',
        img: projectPreviews.soapCompany,
    }
}

projectsData[2] = {
    title: 'Rogi',
    route: '',
    previewData: {
        caption: <Fragment>Costume Design</Fragment>,
        img: projectPreviews.rogi,
    }
}

projectsData[3] = {
    title: 'Składak',
    route: '',
    previewData: {
        caption: 'elit, sed do eiusmod tempor incididunt',
        img: projectPreviews.skladak,
    }
}

projectsData[4] = {
    title: 'Moduu',
    route: '',
    previewData: {
        caption: 'quis nostrud exercitation ullamco laboris nisi ut aliquip',
        img: projectPreviews.moduu,
    }
}

projectsData[5] = {
    title: <Fragment>Pokój&nbsp;zabaw</Fragment>,
    route: '',
    previewData: {
        caption: 'reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        img: projectPreviews.pokojZabaw,
    }
}

projectsData[6] = {
    title: 'Cośtam',
    route: '',
    previewData: {
        caption: 'Ut enim ad minim veniam, quis',
        img: projectPreviews.costam,
    }
}

projectsData[7] = {
    title: 'Ilustracje',
    route: '',
    previewData: {
        caption: '',
        img: projectPreviews.ilustracje,
    }
}

projectsData[8] = {
    title: 'Ulicznicy',
    route: '',
    previewData: {
        caption: 'incididunt ut labore et dolore',
        img: projectPreviews.ulicznicy,
    }
}

projectsData[9] = {
    title: 'Album cover',
    route: '',
    previewData: {
        caption: 'Lorem ipsum dolor sit amet, consectetur',
        img: projectPreviews.albumCover,
    }
}

projectsData[10] = {
    title: 'Voicemail',
    route: '',
    previewData: {
        caption: 'Excepteur sint occaecat cupidatat non proident',
        img: projectPreviews.voicemail,
    }
}

export default projectsData;