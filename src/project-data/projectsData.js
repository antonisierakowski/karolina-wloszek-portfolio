import React, { Fragment } from 'react'
import projectPreviews from './projectPreviews'
import galleryData from './galleryData'

const projectsData = [];

projectsData[0] = {
    title: 'mu.la',
    route: 'mu-la',
    previewData: {
        caption: 'Batchelor’s Thesis, Product Design',
        img: projectPreviews.mula,
    },
    contentData: {
        coverImg: 'asd',
        year: '2018',
        subtitle: 'Modułowy instrument muzyczny wspomagający rozwój psychoruchowy dziecka.',
        paragraphs: [
            {
                title: 'OPIS',
                content: <Fragment><p><strong>mu.la</strong> czyli muzyczne laboratorium pozwalające na zaangażowanie, oprócz słuchu, najważniejszego w przypadku muzyki zmysłu, także zmysłów wzroku i dotyku. Czy zastanawialiście się kiedyś jak wygląda dźwięk, jaki jest w dotyku? Albo jak jest zbudowany instrument? Z <strong>mu.lą</strong> dzieci mogą zaobserwować powstawanie fal dźwiękowych, zbadać właściwości różnych materiałów wydających dźwięki oraz tworzyć własne wersje instrumentu.</p><p>Podczas zabawy kategoria błędnego doświadczenia nie istnieje – każde doświadczenie, nawet to zakończone niepowodzeniem jest wartościowe. Umożliwia to rozwój myślenia wyjętego ze schematów oraz angażuje wyobraźnię i całą pomysłowość dziecka.</p></Fragment>,
            },
            {
                title: 'MOJA ROLA',
                content: 'Projektowanie Produktu, Praca Licencjacka'
            },
            {
                title: 'WIĘCEJ INFO',
                content: 'Praca licencjacka realizowana w Pracowni Projektowania Narzędzi i Środowiska Pracy na ASP we Wrocławiu'
            },
        ],
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
        previewImg: 'tu bd url zdj do preview',
    }

}

projectsData[1] = {
    title: 'The Soap Company',
    route: 'soap-company',
    previewData: {
        caption: 'Lorem ipsum dolor',
        img: projectPreviews.soapCompany,
    },
    contentData: {
        coverImg: galleryData.soap[0],
        year: '2019',
        subtitle: 'Projekt opakownań oraz logo dla manufaktury ręcznie wytwarzającej mydła',
        paragraphs: [
            {
                title: 'OPIS',
                content: <Fragment><p><strong>mu.la</strong> czyli muzyczne laboratorium pozwalające na zaangażowanie, oprócz słuchu, najważniejszego w przypadku muzyki zmysłu, także zmysłów wzroku i dotyku. Czy zastanawialiście się kiedyś jak wygląda dźwięk, jaki jest w dotyku? Albo jak jest zbudowany instrument? Z <strong>mu.lą</strong> dzieci mogą zaobserwować powstawanie fal dźwiękowych, zbadać właściwości różnych materiałów wydających dźwięki oraz tworzyć własne wersje instrumentu.</p><p>Podczas zabawy kategoria błędnego doświadczenia nie istnieje – każde doświadczenie, nawet to zakończone niepowodzeniem jest wartościowe. Umożliwia to rozwój myślenia wyjętego ze schematów oraz angażuje wyobraźnię i całą pomysłowość dziecka.</p></Fragment>,
            },
            {
                title: 'MOJA ROLA',
                content: <p>Projektowanie Graficzne, Ilustracje</p>
            },
            {
                title: 'WIĘCEJ INFO',
                content: <p>Personal project</p>
            },
        ],
        gallery: [
            [
                galleryData.soap[1], galleryData.soap[2], galleryData.soap[3], galleryData.soap[4], 
            ],
            [
                galleryData.soap[5]
            ],
            [
                galleryData.soap[6]
            ],
            [
                galleryData.soap[7], galleryData.soap[8], galleryData.soap[9], galleryData.soap[10], 
            ],
            [
                galleryData.soap[11]
            ]
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

projectsData[2] = {
    title: 'Rogi',
    route: 'rogi',
    previewData: {
        caption: <Fragment>Costume Design</Fragment>,
        img: projectPreviews.rogi,
    }
}

projectsData[3] = {
    title: 'Składak',
    route: 'skladak',
    previewData: {
        caption: 'elit, sed do eiusmod tempor incididunt',
        img: projectPreviews.skladak,
    }
}

projectsData[4] = {
    title: 'Moduu',
    route: 'moduu',
    previewData: {
        caption: 'quis nostrud exercitation ullamco laboris nisi ut aliquip',
        img: projectPreviews.moduu,
    }
}

projectsData[5] = {
    title: <Fragment>Pokój&nbsp;zabaw</Fragment>,
    route: 'pokoj-zabaw',
    previewData: {
        caption: 'reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        img: projectPreviews.pokojZabaw,
    }
}

projectsData[6] = {
    title: 'Cośtam',
    route: 'costam',
    previewData: {
        caption: 'Ut enim ad minim veniam, quis',
        img: projectPreviews.costam,
    }
}

projectsData[7] = {
    title: 'Ilustracje',
    route: 'ilustracje',
    previewData: {
        caption: 'kurde bela ładne ilustracje jakieś',
        img: projectPreviews.ilustracje,
    }
}

projectsData[8] = {
    title: 'Ulicznicy',
    route: 'ulicznicy',
    previewData: {
        caption: 'incididunt ut labore et dolore',
        img: projectPreviews.ulicznicy,
    }
}

projectsData[9] = {
    title: <Fragment>Album&nbsp;cover</Fragment>,
    route: 'album-cover',
    previewData: {
        caption: 'Lorem ipsum dolor sit amet, consectetur',
        img: projectPreviews.albumCover,
    }
}

projectsData[10] = {
    title: 'Voicemail',
    route: 'voicemail',
    previewData: {
        caption: 'Excepteur sint occaecat cupidatat non proident',
        img: projectPreviews.voicemail,
    }
}

export default projectsData;