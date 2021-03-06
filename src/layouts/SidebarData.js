import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdIcons.MdSpaceDashboard/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Actividad',
    path: '/activity',
    icon: <FaIcons.FaChartLine/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Rendimiento',
    path: '/performance',
    icon: <AiIcons.AiFillPieChart />
  },
  {
    title: 'Estadisticas',
    path: '/statistics',
    icon: <AiIcons.AiOutlineBarChart/>
  },
  {
    title: 'Carga / Meta',
    path: '/goal',
    icon: <AiIcons.AiOutlineTrophy />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Soporte',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];