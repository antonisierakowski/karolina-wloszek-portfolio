import React, { Fragment } from 'react'
import '../../styles/global-styles.scss'
import '../../styles/project-template.scss'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Template({data, location}) {
    return (
        <Layout fontColor='inherit' location={location}>
            <SEO title={data.title} keywords={[`karolina włoszek`, `product design`, `design`, `portfolio`]} />
            <div id='project-page' className='background'>

                <section className='project-cover' style={{backgroundImage: `url(${data.contentData.coverImg})`}} />

                
                <div className='center'>
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
                            console.log('1')
                            return (
                                <div className='one-photo'>
                                    <img src={photos} alt={data.title + i}/>
                                </div>
                            )
                        } else if (photos.length === 2) {
                            console.log('2')
                            return (
                                <div className='two-photos'>
                                    {photos.map((photo, j) => {
                                        return (
                                            <div className='photo'>
                                                <img src={photo} alt={data.title + j}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        } else if (photos.length === 4) {
                            console.log('4')
                            return (
                                <div className='four-photos'>
                                    {photos.map((photo, j) => {
                                        return (
                                            <div className='photo'>
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
