import { Link, Outlet } from 'react-router-dom';
import style from './layout.module.css';
import { useSelector } from 'react-redux';

const Layout = () => {
  const Baskert = useSelector((state) => state.basketCount.length);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Продуты</Link>

          <Link to="Basket">
            Корзинка <span>{Baskert}</span>
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
