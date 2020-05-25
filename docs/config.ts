import { DocumentationConfiguration } from './_internal/config.interface';

import Home from './app/home/index.md';
import Installation from './app/home/install.md';

import Components from './app/components/index.md';
import Buttons from './app/components/Buttons.md';

export default {

    title: 'Kro UI',
    description: 'Documentation for',


    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/installation',
            component: Installation, 
        },
        {
            path: '/components',
            component: Components,
        },
        {
            path: '/components/buttons',
            component: Buttons,
        }
    ],

    sidebar: [
        {
            title: 'Installation',
            path: '/installation',
        },
        {
            title: 'Introduction',
            path: '/',
        },
        {
            title: 'Components',
            path: '/components',
            children: [
                {
                    title: 'Buttons',
                    path: '/components/buttons',
                },
                {
                    title: 'Button Groups',
                    path: '/components/button-groups'
                },
                {
                    title: 'Textfields',
                    path: '/components/textfields'
                },
                {
                    title: 'Icons',
                    path: '/components/icons'
                },
            ]
        }
    ]
    

} as DocumentationConfiguration;