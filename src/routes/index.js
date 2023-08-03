// file routes này là chưá những tuyến đường
// Layouts
import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// dùng cho cái routes không cần đăng nhập
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
// dùng cho cái routes phải đăng nhập
// nếu không đăng nhập nó sẽ lái sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
