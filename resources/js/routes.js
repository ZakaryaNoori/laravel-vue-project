function loadView(view) {
    return () => import(`./components/${view}.vue`)
}

export const routes = [
    {
        name: 'home',
        path: '/home',
        meta: { auth: true },
        component: loadView('AllProduct')
    },
    {
        name: 'create',
        path: '/create',
        meta: { auth: true, },
        component: loadView('CreateProduct')
    },
    {
        name: 'edit',
        path: '/edit/:id',
        meta: { auth: true, },
        component: loadView('EditProduct')
    },
    {
        name: 'login',
        path: '/',
        component: loadView('Login')
    },
    {
        name: 'login',
        path: '/login',
        component: loadView('Login')
    },
    {
        name: 'logout',
        path: '/logout',
        component: loadView('Logout')
    }
];
