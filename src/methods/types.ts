export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  endDate: string;
  location: string;
  startDate: string;
  isHidden: boolean;
};

export type ExperienceItem = {
  id: string;
  company: string;
  endDate: string;
  position: string;
  location: string;
  isHidden: boolean;
  startDate: string;
  description: string;
};
