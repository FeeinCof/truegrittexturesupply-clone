import classNames from 'classnames/bind';
import style from './DefaultLayout.module.css';
import { ReactNode } from 'react';
const cx = classNames.bind(style);

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <div>Layout{children}</div>;
};

export default DefaultLayout;
