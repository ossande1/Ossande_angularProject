import { Routes } from '@angular/router';
import { Noteone } from './components/noteone/noteone';
import { Notetwo } from './components/notetwo/notetwo';
import { Notethree } from './components/notethree/notethree';
import { Notefour } from './components/notefour/notefour';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'note1',
        pathMatch: 'full'
    },
    {
        path:'note1',
        component: Noteone
    },
    {
        path:'note2',
        component: Notetwo
    },
    {
        path:'note3',
        component: Notethree
    },
    {
        path:'note4',
        component: Notefour
    },
    {
        path:'**',
        component: Notfound
    }
    
];
