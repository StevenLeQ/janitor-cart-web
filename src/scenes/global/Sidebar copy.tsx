import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from "react-pro-sidebar";


const SidebarFinal = () => {
  return (
    <Sidebar 
    rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#FFFFFF',
        },
      }}
      >
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarFinal;
