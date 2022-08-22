import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkedinOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <Link to='/contactus' style={{ textDecoration: 'none' }}>
              <h5 style={{ color: '#1881f0' }}>Contact Us</h5>
            </Link>
              <p  style={{ color: '#1881f0',cursor:'pointer' }} onClick={()=>{
                window.open('https://www.linkedin.com/in/sanjheev-r-505377198/','_blank','noopener','noreferrer')
              }}>
                <LinkedinOutlined />
              </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
