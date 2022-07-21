import { useEffect, useState } from 'react'
import './App.css'
import 'antd/dist/antd.css';
import Home from './components/views/Home';
import { Route, Routes } from 'react-router-dom'
import LayoutHome from './components/views/LayoutHome';
import LayoutAdmin from './components/views/admin/LayoutAdmin';
import HomeAdmin from './components/views/admin/HomeAdmin';
import ProductList from './components/admin/products/ProductList';
import ProductAdd from './components/admin/products/ProductAdd';
import ProductEdit from './components/admin/products/ProductEdit';
import Errors404 from './404/404';
import ListCategory from './components/admin/categorys/ListCategory';
import AddCategory from './components/admin/categorys/AddCategory';
import EditCategory from './components/admin/categorys/EditCategory';
import { CategoryType } from './types/Category';
import { add, getAllCate, remove } from './api/category';

// toastr
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

function App() {
  const [count, setCount] = useState(0)
  const [categorys, setCategorys] = useState<CategoryType[]>([]);

  // Category
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await getAllCate();
      setCategorys(data)
    }
    getCategory();
  }, [])

  const onHandleRemove = async (id: any) => {
    const confirm = window.confirm("Bạn có chắc muỗn xóa?");
    if (confirm) {
      const { data } = await remove(id);
      toastr.success("Bạn đã xóa thành công");
      return setCategorys(categorys.filter(item => item.id !== id));
    }
  }

  const onHandleCreate = async (cate: CategoryType) => {
    const { data } = await add(cate);
    return setCategorys([...categorys, data]);
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutHome />}>
          <Route index element={<Home />} />
        </Route>
        {/* router admin */}
        <Route path='admin' element={<LayoutAdmin />} >
          <Route index element={<HomeAdmin />} />
          {/* router products */}
          <Route path='products' >
            <Route index element={<ProductList />} />
            <Route path='add' element={<ProductAdd />} />
            <Route path=':id/edit' element={<ProductEdit />} />
          </Route>
          {/* router category */}
          <Route path='categorys'>
            <Route index element={<ListCategory removeCate={onHandleRemove} categorys={categorys} />} />
            <Route path='add' element={<AddCategory onAdd={onHandleCreate} />} />
            <Route path=':id/edit' element={<EditCategory />} />
          </Route>
        </Route>
        <Route path='*' element={<Errors404 />} />
      </Routes>
    </div>
  )
}

export default App
