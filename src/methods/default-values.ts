import { v4 as uuid } from 'uuid';
import { PersonalInfo, EducationItem, ExperienceItem } from './types';

// default content with useMemo so that it won't be re-create from scratch every re-render
export const defaultPersonalInfo: PersonalInfo = {
  name: 'hoang minh',
  email: 'minhhoccode111@gmail.com',
  phone: '+84 123123123',
  address: 'HCM, Viet Nam',
};
export const defaultEducationItems: EducationItem[] = [
  {
    degree: 'Bachelors in Computer Science',
    school: 'Hidden University',
    location: 'Hidden Location',
    startDate: 'Hidden',
    endDate: 'Hidden',
    isHidden: false,
    id: uuid(),
  },
  {
    degree: `Master's Degree in Computer Science`,
    location: 'Hidden Location',
    school: 'Hidden University',
    startDate: '1/2001',
    isHidden: false,
    endDate: 'now',
    id: uuid(),
  },
  {
    degree: `Master's Degree in Math`,
    school: 'Hidden University',
    location: 'Unknown Location',
    startDate: 'Unknown',
    endDate: 'Unknown',
    isHidden: true,
    id: uuid(),
  },
];

export const defaultExperienceItems: ExperienceItem[] = [
  {
    company: 'Apple',
    position: 'Full Stack Software Development Engineer',
    startDate: '1/2025',
    endDate: 'Unknown',
    location: 'Silicon Valley, CA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
    isHidden: false,
    id: uuid(),
  },
  {
    company: 'Netflix',
    position: 'Senior Full Stack Software Development Engineer',
    startDate: '1/2026',
    endDate: 'Unknown',
    location: 'Seattle, WA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
    isHidden: false,
    id: uuid(),
  },
  {
    company: 'Google',
    position: 'CTO',
    startDate: '1/2027',
    endDate: 'Unknown',
    location: 'San Francisco, CA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
    isHidden: true,
    id: uuid(),
  },
];
