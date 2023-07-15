import slide01 from '../static/slide01.png'
import slide02 from '../static/slide02.png'
import slide03 from '../static/slide03.png'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import "../App.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


const Home = () => {
  return (
  <div className="row">
    <h1 className="center marg">WELCOME CREATORS !!!</h1><br/>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={slide01}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide03}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <h4 className=" marg">About us</h4>
    <h5>We, MakeIn made this fully free blogging site for public use. 
      We tried give all possible features to the users in this 
      blogging system. If you have any issue or need to help to 
      improve this site, you can contact us using below contact details.
      This site majorly developed for sharing the people's knowledge 
      in best way.</h5>
      <h4 className=" marg"><br/>About Site</h4>
    <h5>This Blogging system is developed using two strong and familiar frameworks 
      , ReactJs and Django. React is used for frontend development and 
      Django is used for backend development. Also used Bootstrap to designing.
      We build it with minimal level. But we will regularly update it with new features.
    </h5>

    <h4 className=" marg"><br/>Contact Details</h4>
    <MDBContainer className='p-4 pb-0 '>
        <section className='mb-4'>
          

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <h4><br/><span className=" mar">CREATOR : </span> Ranjith S</h4>
    </div>
  );
};

export default Home;