// file routes này là chưá những tuyến đường
// Layouts
import { HeaderOnly } from '~/layouts';
import config from '~/config/';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// dùng cho cái routes không cần đăng nhập
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];
// dùng cho cái routes phải đăng nhập
// nếu không đăng nhập nó sẽ lái sang trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
