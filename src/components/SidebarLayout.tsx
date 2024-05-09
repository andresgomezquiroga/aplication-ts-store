import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Outlet, useNavigate } from "react-router-dom";
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { TbCategory } from "react-icons/tb";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

export const SidebarLayout = () => {
  const { collapseSidebar } = useProSidebar();

  const navegate = useNavigate()

  const handleClickCreate = () => {
    navegate('/Crear_products')
  }

  const handleClickList = () => {
    navegate('/board_products')
  }

  const handleClickLayout = ()=>{
    navegate('/')
  }

  return (
    <div id="app" style={({ display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Tienda virtual</h2>
          </MenuItem>
          <MenuItem icon={<DashboardOutlinedIcon/>} onClick={() => handleClickLayout()}>Pagina principal</MenuItem>
          <SubMenu icon={<AddShoppingCartIcon />} label="Productos">
            <MenuItem icon={<AddIcon />} onClick={() => handleClickCreate()}>Crear Producto</MenuItem>
            <MenuItem icon={<ListAltIcon />} onClick={() => handleClickList()}>Listar Productos</MenuItem>
          </SubMenu>
          <SubMenu icon={<TbCategory />} label='Categoria'>
            <MenuItem icon={<AddCircleOutlineOutlinedIcon />}>Crear categoria</MenuItem>
            <MenuItem icon={<FactCheckOutlinedIcon />}>Listar categoria</MenuItem>
          </SubMenu>

        </Menu>
      </Sidebar>
      <main>
        <h1>
          <Outlet />
        </h1>
      </main>
    </div>
  )
}
