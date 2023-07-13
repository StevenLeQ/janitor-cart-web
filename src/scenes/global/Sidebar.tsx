import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  // SubMenu,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";
// import { Switch } from "./components/Switch";
import { SidebarHeader } from "../../components/Sidebar/SidebarHeader.tsx";
import { BuildingIcon } from "../../assets/BuildingIcon.tsx";
import { SquareIcon } from "../../assets/SquareIcon.tsx";
import { FileIcon } from "../../assets/FileIcon.tsx";
import { VideoIcon } from "../../assets/VideoIcon.tsx";
import { SidebarFooter } from "../../components/Sidebar/SidebarFooter.tsx";
import { LogoutIcon } from "../../assets/LogoutIcon.tsx";

type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#4F494F",
      hover: {
        backgroundColor: "#E6EAF9",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const SidebarFinal: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>("light");


  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "0.95rem",
      fontWeight: 500,
      color: "#4F494F"
    },
    icon: {
      // Hacky Margin Stuff
      marginRight: 4,
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      // Hacky Margin Stuff
      marginLeft: collapsed ? 0 : 10,

      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        borderRight: "0.2em solid blue",
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div className="flex h-full"
    >
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        breakPoint="md"
        backgroundColor={hexToRgba(
          themes[theme].sidebar.backgroundColor,
          hasImage ? 0.9 : 1
        )}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <div className="flex flex-col h-screen">
          
          <SidebarHeader
            style={{ marginBottom: "24px", marginTop: "16px" }}
            collapsed={collapsed}
          />

          <div className="flex-1 mb-8">
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<SquareIcon />}>Dashboard</MenuItem>
              <MenuItem icon={<BuildingIcon />}>Companies</MenuItem>
              <MenuItem icon={<FileIcon />}>Work Rights Files</MenuItem>
              <MenuItem icon={<VideoIcon />}>Videos</MenuItem>
            </Menu>
          </div>

          {/* Have this area at bottom of screen */}
          <hr className="h-px mx-6 border-1 border-gray-200" />
          <Menu menuItemStyles={menuItemStyles}>
              <MenuItem className="my-2" icon={<LogoutIcon />}>Logout</MenuItem>
            </Menu>

          <SidebarFooter collapsed={collapsed} />
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarFinal;
