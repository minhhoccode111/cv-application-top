export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  isHidden: boolean;
  id: string;
};

export type ExperienceItem = {
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  isHidden: boolean;
  id: string;
};
