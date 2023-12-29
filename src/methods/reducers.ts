import { defaultPersonalInfo, defaultEducationItems, defaultExperienceItems } from './default-values';

export const personalReducer = (state, action) => {
  if (action.type === 'name') return { ...state, name: action.value };
  if (action.type === 'phone') return { ...state, phone: action.value };
  if (action.type === 'email') return { ...state, email: action.value };
  if (action.type === 'address') return { ...state, address: action.value };
  if (action.type === 'clear') return { name: '', phone: '', email: '', address: '' };
  if (action.type === 'load') return defaultPersonalInfo;

  throw new Error('Invalid action type');
};

export const educationReducer = (state, action) => {
  if (action.type === 'school') return { ...state, school: action.value };
  if (action.type === 'degree') return { ...state, degree: action.value };
  if (action.type === 'startDate') return { ...state, startDate: action.value };
  if (action.type === 'endDate') return { ...state, endDate: action.value };
  if (action.type === 'location') return { ...state, location: action.value };
  if (action.type === 'clear') return { school: '', degree: '', startDate: '', endDate: '', location: '' };
  // if (action.type === 'load') return defaultEducationItems;
  throw new Error('Invalid action type');
};

export const experienceReducer = (state, action) => {
  if (action.type === 'company') return { ...state, company: action.value };
  if (action.type === 'position') return { ...state, position: action.value };
  if (action.type === 'startDate') return { ...state, startDate: action.value };
  if (action.type === 'endDate') return { ...state, endDate: action.value };
  if (action.type === 'location') return { ...state, location: action.value };
  if (action.type === 'description') return { ...state, description: action.value };
  if (action.type === 'clear') return { company: '', position: '', startDate: '', endDate: '', location: '', description: '' };
  // if (action.type === 'load') return defaultExperienceItems;
  throw new Error('Invalid action type');
};
