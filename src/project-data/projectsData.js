import React, { Fragment } from 'react'
import projectPreviews from './projectPreviews'
import galleryData from './galleryData'

const projectsData = [];

projectsData[0] = {
    title: 'mu.la',
    route: 'mu-la',
    previewData: {
        caption: 'Bachelor’s Thesis, Product Design',
        img: projectPreviews.mula,
    },
    contentData: {
        coverImg: galleryData.mula[0],
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
                galleryData.mula[1]
            ],
            [
                galleryData.mula[2], galleryData.mula[3]
            ],
            [
                galleryData.mula[4]
            ],
            [
                galleryData.mula[5]
            ],
            [
                galleryData.mula[6], galleryData.mula[7]
            ],
            [
                galleryData.mula[8]
            ],

        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }

}

// soap
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
                content: <p>Projekt logo oraz identyfikacji wizualnej dla fikcyjnej marki ręcznie produkującej mydła - The Soap Company.</p>
            },
            {
                title: 'MOJA ROLA',
                content: <p>Projektowanie Graficzne, Ilustracje, Projekt Logo</p>
            },
            {
                title: 'WIĘCEJ INFO',
                content: <p>Personal project</p>
            },
        ],
        gallery: [
            [
                galleryData.soap[1], galleryData.soap[2],
            ],
            [
                galleryData.soap[3], galleryData.soap[4],
            ],
            [
                galleryData.soap[5]
            ],
            [
                galleryData.soap[6]
            ],
            [
                galleryData.soap[7], galleryData.soap[8],
            ],
            [
                galleryData.soap[9], galleryData.soap[10],
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

// rogi
projectsData[2] = {
    title: 'Rogi',
    route: 'rogi',
    previewData: {
        caption: <Fragment>Costume Design</Fragment>,
        img: projectPreviews.rogi,
    },
    contentData: {
        coverImg: galleryData.rogi[0],
        year: '2018',
        subtitle: <Fragment>Kostium do spektaklu teatralnego<br/><i>Drzewom nie wypadają włosy</i></Fragment>,
        paragraphs: [
            {
                title: 'OPIS',
                content: 
                    <Fragment>
                        <p>
                            KOBIETA: Babciu, byłaś kiedyś szczęśliwa?<br/>
                            BABCIA: Tak, raz, jak zmarła ta wściekła koza.<br/>
                            KOBIETA: Myślałam, że ją kochałaś?<br/>
                            BABCIA: Kochałam, ale była naprawdę okropna. Zwłaszcza wtedy, kiedy walczyła o równe prawa dla wszystkich zwierząt. Wmawiała mi, że ja też jestem kozą.<br/>
                            ŁEŚKA: Wcale ci nie wmawiałam, że jesteś kozą. Mówiłam tylko, że wszystkie zwierzęta czymś się od siebie różnią, i że człowiek od innych nie różni się niczym szczególnym.
                        </p>
                    </Fragment>,
            },
            {
                title: 'MOJA ROLA',
                content: <p>Projektowanie kostiumu, Wykonanie kostiumu</p>
            },
            {
                title: 'WSPÓŁPRACA',
                content: <p>Aleksandra Cząstka, <i>Teatr Dla Początkujących</i></p>
            },
        ],
        gallery: [
            [
                galleryData.rogi[1], galleryData.rogi[2],
            ],
            [
                galleryData.rogi[3]
            ],
            [
                galleryData.rogi[4]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// skladak
projectsData[3] = {
    title: 'Składak',
    route: 'skladak',
    previewData: {
        caption: 'Product Design',
        img: projectPreviews.skladak,
    },
    contentData: {
        coverImg: galleryData.skladak[0],
        year: '2017',
        subtitle: 'Projekt stołka - pomocnika domowego',
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
                galleryData.skladak[1], galleryData.skladak[2]
            ],
            [
                galleryData.skladak[3]
            ],
            [
                galleryData.skladak[4], galleryData.skladak[5]
            ],
            [
                galleryData.skladak[6]
            ],
            [
                galleryData.skladak[7]
            ]
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// moduu
projectsData[4] = {
    title: 'moduu',
    route: 'moduu',
    previewData: {
        caption: 'Product design',
        img: projectPreviews.moduu,
    },
    contentData: {
        coverImg: galleryData.moduu[0],
        year: '2018',
        subtitle: 'Modułowy system przechowywania obok drzwi',
        paragraphs: [
            {
                title: 'OPIS',
                content: <Fragment><p><strong>moduu</strong> czyli przestrzeń na, przy, obok drzwi pozwalająca na przechowywanie. Modułowy system umożliwia swobodne rozmieszczanie elementów w kształt pożądany przez użytkownika oraz wielokrotne ich powielanie. Pozwala na kreowanie przestrzeni przy drzwiach.</p></Fragment>,
            },
            {
                title: 'MOJA ROLA',
                content: <p>Projektowanie produktu</p>
            },
            {
                title: 'WIĘCEJ INFO',
                content: <Fragment><p>Wyróżniona w konkursie <strong>PORTA BY ME 2017 - 4 DOORS</strong> koncepcja na obiekt NA, PRZY OBOK drzwi.</p><p>Projekt realizowany w grupie projektowej z Sonią Sudyka.</p></Fragment>
            },
        ],
        gallery: [
            [
                galleryData.moduu[1],
            ],
            [
                galleryData.moduu[2]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// pokoj zabaw
projectsData[5] = {
    title: <Fragment>Pokój&nbsp;zabaw</Fragment>,
    route: 'pokoj-zabaw',
    previewData: {
        caption: 'reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        img: projectPreviews.pokojZabaw,
    },
    contentData: {
        coverImg: galleryData.pokojZabaw[0],
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
                galleryData.pokojZabaw[1]
            ],
            [
                galleryData.pokojZabaw[2]
            ],
            [
                galleryData.pokojZabaw[3]
            ],
            [
                galleryData.pokojZabaw[4]
            ],
            [
                galleryData.pokojZabaw[5], galleryData.pokojZabaw[6]
            ],
            [
                galleryData.pokojZabaw[7]
            ]
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// costam
projectsData[6] = {
    title: 'Cośtam',
    route: 'costam',
    previewData: {
        caption: 'Graphic design, Illustration',
        img: projectPreviews.costam,
    },
    contentData: {
        coverImg: galleryData.costam[0],
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
                galleryData.costam[1]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// ilustracje
projectsData[7] = {
    title: 'Ilustracje',
    route: 'ilustracje',
    previewData: {
        caption: 'kurde bela ładne ilustracje jakieś',
        img: projectPreviews.ilustracje,
    },
    contentData: {
        coverImg: galleryData.ilustracje[0],
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
                galleryData.ilustracje[1], galleryData.ilustracje[2]
            ],
            [
                galleryData.ilustracje[3]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// ulicznicy
projectsData[8] = {
    title: 'Ulicznicy',
    route: 'ulicznicy',
    previewData: {
        caption: 'Graphic Design, Ilustration',
        img: projectPreviews.ulicznicy,
    },
    contentData: {
        coverImg: galleryData.ulicznicy[0],
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
                galleryData.ulicznicy[1]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

// voicemail
projectsData[9] = {
    title: 'Voicemail',
    route: 'voicemail',
    previewData: {
        caption: 'Excepteur sint occaecat cupidatat non proident',
        img: projectPreviews.voicemail,
    },
    contentData: {
        coverImg: galleryData.voicemail[0],
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
                galleryData.voicemail[1]
            ],
            [
                galleryData.voicemail[2]
            ],
        ]
    },
    thumbnailData: {
        previewImg: 'tu bd url zdj do preview',
    }
}

export default projectsData;