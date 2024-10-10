import { FaUser, FaBook, FaPen, FaCertificate } from 'react-icons/fa'; 
import Skills from './skills'; // Import your Skills component
import Projects from './projects'; // Import your Projects component
import Certificates from './certificates';

type List = {
  name: string;
  isOpen: boolean;
  icon: React.ElementType;
  component: React.ReactNode; 
};

const list: List[] = [
  {
    name: "About Me",
    isOpen: false,
    icon: FaUser,
    component: <div className='animate-slidein'>I&apos;m a passionate web developer and designer with over three years of experience in creating user-friendly, responsive websites. I love bringing ideas to life through innovative design and functionality.</div>,
  },
  {
    name: "Skills",
    isOpen: false,
    icon: FaBook,
    component: <Skills />, 
  },
  {
    name: "Projects",
    isOpen: false,
    icon: FaPen,
    component: <Projects />, 
  },
  {
    name: "Certifications",
    isOpen: false,
    icon: FaCertificate,
    component: <Certificates />, 
  }
];

export default list;
