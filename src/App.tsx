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
import { ProductType } from './types/Products';
import { addPro, getAll, removePr } from './api/product';
import { message } from 'antd';
import Signin from './pages/views/Signin';
import Signup from './pages/views/Signup';
import ProductDetail from './pages/views/ProductDetail';
import Cart from './pages/views/cart/Cart';

function App() {
  const [count, setCount] = useState(0)
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);


  //products
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      setProducts(data)
    }
    getProducts();
  }, [])
  const removeProduct = (id: number) => {
    try {
      const confirm = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
      if (confirm) {
        removePr(id);
        setProducts(products.filter(item => item.id !== id));
        toastr.success("Xóa thành công!");
      }
    } catch (error) {
      console.log(error);
      toastr.error("Xóa thất bại!");
    }
  }
  const addProduct = async (product: ProductType) => {
    const { data } = await addPro(product);
    return setProducts([...products, data])
  }

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
      // toastr.success("Bạn đã xóa thành công");
      message.success("Bạn đã xóa thành công.");
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
          <Route path='/product'>
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
        </Route>
        {/* router admin */}
        <Route path='admin' element={<LayoutAdmin />} >
          <Route index element={<HomeAdmin />} />
          {/* router products */}
          <Route path='products' >
            <Route index element={<ProductList product={products} onRemove={removeProduct} />} />
            <Route path='add' element={<ProductAdd onAdd={addProduct} />} />
            <Route path=':id/edit' element={<ProductEdit />} />
          </Route>
          {/* router category */}
          <Route path='categorys'>
            <Route index element={<ListCategory removeCate={onHandleRemove} categorys={categorys} />} />
            <Route path='add' element={<AddCategory onAdd={onHandleCreate} />} />
            <Route path=':id/edit' element={<EditCategory />} />
          </Route>
        </Route>
        {/* 404 */}
        <Route path='*' element={<Errors404 />} />
        {/* Signin Signup */}
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
