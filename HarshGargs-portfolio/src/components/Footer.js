import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Harsh Garg</h1>
          <PText>
            I am a Full Stack Developer and Competitive Programmer . I develop
            and create new web application using Mern stack technology and
            contribute to open source projects.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91-90566671910',
                path: 'tel:+91-90566671910',
              },
              {
                title: 'harshgargthapar@gmail.com',
                path: 'mailto:harshgargthapar@gmail.com',
              },
              {
                title: 'Thapar University Patiala',
                path:
                  'https://www.google.com/maps/place/Thapar+Institute+of+Engineering+%26+Technology+(TIET),+Patiala/@30.3564288,76.3625072,17z/data=!3m1!4b1!4m5!3m4!1s0x391028ab86533db5:0x93cc1f72eae1c9a8!8m2!3d30.3564242!4d76.3647012',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/harsh-garg-tiet',
              },
              {
                title: '  GitHub',
                path: 'https://github.com/harshgargtiet',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com/hgarg__hg?utm_medium=copy_link',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Developed By ❤️ Harsh Garg </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
