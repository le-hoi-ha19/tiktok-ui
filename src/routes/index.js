// Layouts
import { HeaderOnly } from '~/components/Layout'

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';



// dùng cho cái routes không cần đăng nhập
const publicRoutes = [
    {path:'/',component: Home},
    {path:'/following',component: Following},
    {path:'/profile',component: Profile},
    {path:'/upload',component: Upload, layout: HeaderOnly},
    {path:'/search',component: Search, layout: null},

]
// dùng cho cái routes phải đăng nhập 
// nếu không đăng nhập nó sẽ lái sang trang login
const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }