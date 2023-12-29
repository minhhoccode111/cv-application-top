import { v4 as uuid } from 'uuid';
import { PersonalInfo, EducationItem, ExperienceItem } from './types';

// default content with useMemo so that it won't be re-create from scratch every re-render
export const defaultPersonalInfo: PersonalInfo = {
  name: 'Dang Hoang Minh',
  email: 'minhhoccode111@gmail.com',
  phone: '+84 123123123',
  address: 'District 10, Ho Chi Minh city, Viet Nam',
};
export const defaultEducationItems: EducationItem[] = [
  {
    school: 'Hochiminh College Economy',
    degree: 'Bachelors in Economics',
    location: 'Ho Chi Minh, VN',
    startDate: '9/2019',
    endDate: '12/2023',
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
    companyName: 'Apple Corp',
    positionTitle: 'Backend Developer',
    startDate: '1/2025',
    endDate: 'Unknown',
    location: 'Silicon Valley, CA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
    isHidden: false,
    id: uuid(),
  },
  {
    companyName: 'Netflix Corp',
    positionTitle: 'Senior Backend Developer',
    startDate: '1/2026',
    endDate: 'Unknown',
    location: 'Seattle, WA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
    isHidden: false,
    id: uuid(),
  },
  {
    companyName: 'Google Corp',
    positionTitle: 'Backend Software Engineer',
    startDate: '1/2027',
    endDate: 'Unknown',
    location: 'San Francisco, CA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nobis consectetur quo nostrum iste dicta magni debitis. Deserunt ipsa quibusdam, voluptatum ea eius amet quas magnam est dolore vero odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolorum maiores repellendus accusantium molestias, ipsa sapiente minima expedita distinctio explicabo nam, rerum non modi. Distinctio optio maxime at neque excepturi! ',
    isHidden: true,
    id: uuid(),
  },
];
