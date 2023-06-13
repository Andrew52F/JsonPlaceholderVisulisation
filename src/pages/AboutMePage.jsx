import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, ListGroup, Badge,
} from 'react-bootstrap';
import UserImage from '../components/UserImage';
import CardSection from '../components/CardSection';

const BadgesCard = ({ title, badges }) => (
  <CardSection title={title}>
    <div className='d-flex gap-2 flex-wrap'>
      {badges.map((text) => (
        <Badge
          key={text}
          pill
          bg='primary'
          className='fs-6'
        >
          {text}
        </Badge>
      ))}
    </div>
  </CardSection>
);
BadgesCard.propTypes = {
  title: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

const AboutMePage = () => {
  const shortInfo = [
    ['Возввраст', '22 года'],
    ['Город', 'Нижний Новгород'],
    ['Телефон', '+7 (904) 785-05-99'],
    ['Электронная почта', 'andrew.petvic@gmail.com'],
    ['Телеграмм', '@Andrew52F'],
  ];

  const mainTechnologies = ['HTML', 'CSS/SCSS', 'JavaScript', 'React', 'Redux (Toolkit, Saga)', 'Socket IO', 'Styled Clomponents', 'Bootstrap', 'Tailwind', 'Typescript', 'Webpack', 'React Testing Library'];
  const familiarTechnologies = ['Node JS', 'Express', 'Mongo DB (mongoose)'];
  const aboutMeParagraph = 'Я начинающий Frontend разработчик из Нижнего Новгорода. Ищу компанию профессионалов, в которой мог бы стать полезным Frontend-разработчиком и развиваться в этой сфере. Закончил обучение в онлайн-школе Hexlet по профессии «Frontend-разработчик». Хотел бы присоединиться к команде профессионалов, набраться опыта и привнести свой вклад в общее дело!';
  const skills = [
    'Знание JavaScript (ES6+)',
    'Знание CSS/SCSS', 'Знание HTML',
    'Адаптивная и кроссбраузерная верстка',
    'Проектирование архитектуры веб-приложений',
    'Тестирование и отладка веб-сайтов',
    'Исправление проблем в пользовательском интерфейсе',
  ];
  const education = [
    {
      institution: 'Нижегородский институт управления Российской академии государственной службы при Президенте Российской Федерации',
      faculty: 'Факультет управления',
      name: 'Прикладная информатика: корпоративные информационные системы управления',
      graduationYear: '2026',
    },
    {
      institution: 'Нижегородский институт управления Российской академии государственной службы при Президенте Российской Федерации',
      faculty: 'Среднего профессионального образования',
      name: 'Прикладная информатика (по отраслям)',
      graduationYear: '2021',
    },
  ];

  return (
    <Container>
      <h1 className='my-4'>Обо мне</h1>
      <Row className='row-col-1 row-col-md-2 mb-3'>
        <Col className='col-12 col-md-auto'>
          <div className='d-flex justify-content-md-start justify-content-center'>
            <UserImage
              imageLink='https://res.cloudinary.com/deufljem3/image/upload/v1677510682/users/upk8wrl09cmxx6thpnnb.png'
              options={{
                width: '250px', height: '250px',
              }}
            />
          </div>
        </Col>
        <Col>
          <div className='py-2 py-md-0 text-center text-md-start'>
            <h2 className='fw-semibold'>Петраков Андрей Викторович</h2>
          </div>
          <ListGroup>
            {shortInfo.map(([title, value]) => (
              <ListGroup.Item key={title}>
                <span className='fw-semibold'>{`${title}:`}</span>
                {` ${value}`}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
          <BadgesCard title='Основной стэк' badges={mainTechnologies} />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
          <BadgesCard title='Знаком с' badges={familiarTechnologies} />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
          <CardSection title='О себе'>
            <p>{aboutMeParagraph}</p>
          </CardSection>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
          <CardSection title='Ключевые навыки' options={skills} />
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col>
          <CardSection title='Образование'>
            <ListGroup className='list-group-flush'>
              {education.map(({
                institution, faculty, name, graduationYear,
              }) => (
                <ListGroup.Item key={graduationYear} className='py-2 px-0'>
                  <h5 className='fw-semibold'>{institution}</h5>
                  <p>{name}</p>
                  <p>{`Факультет: ${faculty}`}</p>
                  <p>{`Год окончания: ${graduationYear}`}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </CardSection>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMePage;
