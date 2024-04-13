import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ValueConversionComponent } from './value-conversion/value-conversion.component';
import { WorkDescriptionComponent } from './work-description/work-description.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'value-conversion', component: ValueConversionComponent },
    { path: 'work-description', component: WorkDescriptionComponent },
    {path: '404', component: NotFoundComponent}, // for Not Found
    {path: '**', redirectTo: '/404'}
];
