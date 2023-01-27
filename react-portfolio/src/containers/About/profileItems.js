import { HiUserCircle } from 'react-icons/hi';
import { TbGps } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export const profileItems = [
  {
    id: 1,
    title: 'eun-hye park, 박은혜',
    icon: <HiUserCircle className="content-text" />,
  },
  {
    id: 2,
    title: 'Incheon, Republic of Korea',
    url: 'https://www.google.com/maps?q=incheon&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiGrvHCmOL8AhUSyGEKHXeYDcUQ_AUoAXoECAEQAw',
    icon: <TbGps className="content-text" />,
  },
  {
    id: 3,
    title: 'hyeun9991@gmail.com',
    url: 'mailto:hyeun9991@gmail.com',
    icon: <AiFillGithub className="content-text" />,
  },
  {
    id: 4,
    title: 'github.com/Hyeun9991',
    url: 'https://github.com/Hyeun9991',
    icon: <MdEmail className="content-text" />,
  },
];
