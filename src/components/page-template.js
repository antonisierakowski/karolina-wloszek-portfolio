import React, { Fragment, useEffect, useRef } from 'react'
import '../styles/global-styles.scss'
import '../styles/project-template.scss'
import Layout from "./layout"
import SEO from "./seo"
import { window, document } from 'browser-monads'
import smoothscroll from 'smoothscroll-polyfill'
import useOnTopPosition from '../components/useOnTopPosition'
import { detect } from 'detect-browser'

export default function Template({data, location}) {
    const isOnTop = useOnTopPosition()
    const infoRef = useRef(null)
    const browser = detect().name
    // window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill()

    useEffect(() => {
        const scrollToInfo = () => window.scrollTo({
            top: infoRef.current.offsetTop,
            left: 0,
            behavior: 'smooth',
        })

        let handleScroll;

        if (browser === 'firefox') {
            handleScroll = () => {
                scrollToInfo()
                setTimeout(() => {
                    scrollToInfo()
                },200)
                setTimeout(() => {
                    scrollToInfo()
                },300)
            }
        } else {
            handleScroll = event => {
                if (event.wheelDelta < 0) {
                    scrollToInfo()
                    setTimeout(() => {
                        scrollToInfo()
                    },800)
                }
            }
        }
        
        isOnTop && document.addEventListener(browser === 'firefox' ? 'scroll' : 'wheel', handleScroll, { passive: false })
        
        return () => {
            document.removeEventListener(browser === 'firefox' ? 'scroll' : 'wheel', handleScroll)
        }
    }, [isOnTop])
    
    const handleCoverClick = () => {
        window.scrollTo({top: infoRef.current.offsetTop, behavior: 'smooth'})
    }

    return (
        <Layout fontColor='inherit' location={location}>
            <SEO title={ typeof data.title === 'string' ? data.title : data.title.props.children } keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
            <div id='project-page' className='background'>
                <section className='project-cover' style={{backgroundImage: `url(${data.contentData.coverImg})`}} onClick={handleCoverClick}/>

                
                <div className='center' ref={infoRef}>
                    <section className='project-info'>
                        <div className='title-section'>
                            <h2 className='title'>{data.title}</h2>
                            <span className='year'>–{data.contentData.year}</span>
                        </div>
                        <div className='description-section'>
                            <h4 className='subtitle'>{data.contentData.subtitle}</h4>
                            <div className='paragraphs'>
                                {data.contentData.paragraphs.map( paragraph => {
                                    return (
                                        <Fragment key={paragraph.title}>
                                            <div><strong>{paragraph.title}</strong></div>
                                            <div>{paragraph.content}</div>
                                        </Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </section>        
                </div>
                

                <section className='project-gallery'>
                    {data.contentData.gallery.map((photos, i) => {
                        if (photos.length === 1) {
                            return (
                                <div className='one-photo' key={photos}>
                                    <img src={photos} alt={data.title + i}/>
                                </div>
                            )
                        } else if (photos.length === 2) {
                            return (
                                <div className='two-photos' key={photos}>
                                    {photos.map((photo, j) => {
                                        return (
                                            <div className='photo' key={photo}>
                                                <img src={photo} alt={data.title + j}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        } else if (photos.length === 4) {
                            return (
                                <div className='four-photos' key={photos}>
                                    {photos.map((photo, j) => {
                                        return (
                                            <div className='photo' key={photo}>
                                                <img src={photo} alt={data.title + j}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }
                        return null;
                    })}
                </section>

            </div>
        </Layout>
    )
}





// // scrollowanie ze stackoverflow
// function SmoothVerticalScrolling(e, time, where) {
//     var eTop = e.getBoundingClientRect().top;
//     var eAmt = eTop / 100;
//     var curTime = 0;
//     while (curTime <= time) {
//         window.setTimeout(SVS_B, curTime, eAmt, where);
//         curTime += time / 100;
//     }
// }

// function SVS_B(eAmt, where) {
//     if(where == "center" || where == "")
//         window.scrollBy(0, eAmt / 2);
//     if (where == "top")
//         window.scrollBy(0, eAmt);
// }