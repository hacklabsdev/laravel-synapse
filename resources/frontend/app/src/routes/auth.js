import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Password from '../components/Auth/Password'
import Reset from '../components/Auth/Reset'

const authRoutes = [
    {
        name: 'auth.login',
        path: '/login',
        component: Login
    },
    {
        name: 'auth.register',
        path: '/register',
        component: Register
    },
    {
        name: 'auth.password',
        path: '/password',
        component: Password
    },
    {
        name: 'auth.reset',
        path: '/password/reset',
        component: Reset
    }
]

export default authRoutes