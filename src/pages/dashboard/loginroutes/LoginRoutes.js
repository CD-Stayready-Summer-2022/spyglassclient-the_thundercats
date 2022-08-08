const AuthLogin = Loadable(lazy(() => import('signs/signin')));
const AuthRegister = Loadable(lazy(() => import('signs/signup')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'signin',
            element: <AuthLogin />
        },
        {
            path: 'signup',
            element: <AuthRegister />
        }
    ]
};

export default LoginRoutes;
