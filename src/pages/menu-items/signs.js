import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const signs = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'signin',
            title: 'Sign In',
            type: 'item',
            url: '/signin',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'signup',
            title: 'Sign Up',
            type: 'item',
            url: '/signup',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export default signs;
