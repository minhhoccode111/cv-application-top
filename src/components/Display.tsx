import PropTypes from 'prop-types';
import * as Icon from './Icons';
import { EducationItem, ExperienceItem } from '../App';

type DisplayProps = {
  educationItems: EducationItem[];
  experienceItems: ExperienceItem[];
  personalStates: any;
};

const Display: React.FC<DisplayProps> = ({ educationItems, experienceItems, personalStates }) => {
  const { name, email, phone, address } = personalStates;
  const JSXEducation = educationItems.length !== 0 && educationItems.some((item) => !item.isHidden) && (
    <>
      <header className="bg-light m-2">
        <h2 className="text-center text-2xl p-2">Education</h2>
      </header>
      <div className="p-2">
        {educationItems.map((item) => {
          if (item.isHidden) return null;
          return (
            <table key={item.id} className="p-2">
              <tbody className="">
                <tr>
                  <td className="w-44">
                    {item.startDate} - {item.endDate}
                  </td>
                  <td>
                    <strong>{item.school}</strong>
                  </td>
                </tr>
                <tr>
                  <td>{item.location}</td>
                  <td>{item.degree}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
  const JSXExperience = experienceItems.length !== 0 && experienceItems.some((item) => !item.isHidden) && (
    <>
      <header className="bg-light m-2">
        <h2 className="text-center text-2xl p-2">Professional Experience</h2>
      </header>
      <div className="p-2">
        {experienceItems.map((item) => {
          if (item.isHidden) return null;
          return (
            <table key={item.id} className="p-2">
              <tbody className="">
                <tr>
                  <td className="w-44">
                    {item.startDate} - {item.endDate}
                  </td>
                  <td>
                    <strong>{item.companyName}</strong>
                  </td>
                </tr>
                <tr>
                  <td>{item.location}</td>
                  <td>{item.positionTitle}</td>
                </tr>
                <tr>
                  <td>{null}</td>
                  <td className="text-justify">{item.description}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
  return (
    <section id="display-cv" className="my-4 mx-auto max-w-4xl shadow-lg min-h-screen bg-white min-w-full">
      {/* header in display section is based on personal's info */}
      <header className={'px-4 bg-darker text-light' + ' ' + (name === '' ? 'py-11' : 'py-6')}>
        <h1 className="text-center text-4xl">{name}</h1>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {email !== '' ? <Icon.Email color={'#FDF0F0'} height={'24px'} width={'24px'} /> : null}
          {email}
        </h2>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {phone !== '' ? <Icon.Phone color={'#FDF0F0'} height={'24px'} width={'24px'} /> : null}
          {phone}
        </h2>
        <h2 className="py-2 flex items-center justify-center gap-2 text-xl">
          {address !== '' ? <Icon.Location color={'#FDF0F0'} height={'24px'} width={'24px'} /> : null}
          {address}
        </h2>
      </header>
      {/* display education section */}
      <article className={'pt-8 px-8 pb-2'}>{JSXEducation}</article>
      {/* display experience section */}
      <article className={'pt-2 pb-8 px-8'}>{JSXExperience}</article>
    </section>
  );
};

Display.propTypes = {
  personalStates: PropTypes.object.isRequired,
  educationItems: PropTypes.array.isRequired,
  experienceItems: PropTypes.array.isRequired,
};

export default Display;
