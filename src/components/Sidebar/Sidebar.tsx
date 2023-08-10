// Library Imports
import React from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  // SubMenu,
  menuClasses,
  MenuItemStyles
} from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

// Components for sidebar
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

// Icons used in Sidebar
import {
  BuildingOfficeIcon,
  Squares2X2Icon,
  FolderIcon,
  FilmIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

type Theme = 'light' | 'dark';

const themes = {
  light: {
    sidebar: {
      backgroundColor: '#ffffff',
      color: '#607489'
    },
    menu: {
      menuContent: '#fbfcfd',
      icon: '#4F494F',
      hover: {
        backgroundColor: '#E6EAF9',
        color: '#00376f'
      },
      active: {
        backgroundColor: '#c1ccf0'
      },
      disabled: {
        color: '#9fb6cf'
      }
    }
  },
  dark: {
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7'
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9'
      },
      active: {
        backgroundColor: '#002953'
      },
      disabled: {
        color: '#3e5e7e'
      }
    }
  }
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const SidebarFinal: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [theme] = React.useState<Theme>('light');
  const location = useLocation();

  // // TODO handle on theme change event
  // const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTheme(e.target.checked ? 'dark' : 'light');
  // };

  const handleLogoClick = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '0.95rem',
      fontWeight: 500,
      color: '#4F494F'
    },
    icon: {
      // Hacky Margin Stuff
      marginRight: 4,
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      }
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9'
    },
    subMenuContent: () => ({
      backgroundColor: 'transparent'
    }),
    button: {
      // Hacky Margin Stuff
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 1),
        color: 'themes[theme].menu.hover.color'
      },
      '&:active': {
        backgroundColor: hexToRgba(
          themes[theme].menu.active.backgroundColor,
          1
        ),
        borderRight: '0.2em solid blue',
        color: themes[theme].menu.hover.color
      },
      [`&.${menuClasses.active}`]: {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 1),
        borderRight: '0.2em solid blue',
        color: themes[theme].menu.hover.color
      },
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      }
    },
    label: () => ({
      fontWeight: collapsed ? 600 : undefined,
      opacity: collapsed ? 0 : 1,
      transition: 'opacity 0.2s ease-in-out'
    })
  };

  return (
    <div className="flex h-full">
      <Sidebar
        collapsed={collapsed}
        breakPoint="md"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes[theme].sidebar.color
        }}
      >
        <div className="flex h-screen flex-col">
          <button
            onClick={handleLogoClick}
            className="my-10 flex flex-col text-left"
          >
            <Header collapsed={collapsed} />
          </button>

          <div className="mb-8 flex-1">
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem
                component={<Link to={'/superadmin'} />}
                aria-label="dashboard-icon"
                icon={<Squares2X2Icon className="h-6 w-6" />}
                active={location.pathname === '/'}
              >
                Dashboard
              </MenuItem>

              <MenuItem
                component={<Link to={'/superadmin/companies'} />}
                aria-label="companies-icon"
                icon={<BuildingOfficeIcon className="h-6 w-6" />}
                active={location.pathname.startsWith('/companies')}
              >
                Companies
              </MenuItem>

              <MenuItem
                component={<Link to={'/superadmin/rights'} />}
                aria-label="work-rights-files-icon"
                icon={<FolderIcon className="h-6 w-6" />}
                active={location.pathname.startsWith('/rights')}
              >
                Work Rights Files
              </MenuItem>

              <MenuItem
                component={<Link to={'/superadmin/videos'} />}
                aria-label="videos-icon"
                icon={<FilmIcon className="h-6 w-6" />}
                active={location.pathname.startsWith('/videos')}
              >
                Videos
              </MenuItem>
            </Menu>
          </div>

          {/* Have this area at bottom of screen */}
          <hr className="border-1 mx-6 h-px border-gray-200" />
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              className="my-2"
              icon={<ArrowLeftOnRectangleIcon className="h-6 w-6" />}
            >
              Log out
            </MenuItem>
          </Menu>

          <Footer collapsed={collapsed} />
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarFinal;
