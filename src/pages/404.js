import React, { useEffect } from 'react'
import { navigate, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'

const NotFoundPage = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])

  return (
    <Layout>
      <Section centered>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>
          You just hit a page that doesn't exist and will be redirected back to
          the home page in five seconds.
        </p>
        <p>
          If you are not redirected, <Link to="/">click here</Link>.
        </p>
      </Section>
    </Layout>
  )
}

export default NotFoundPage
