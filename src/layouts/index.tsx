import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lottery">包中</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
