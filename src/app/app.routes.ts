import { Routes } from '@angular/router';
import { Body } from './layout/body/body';

export const routes: Routes = [

    {path:'', component:Body , children:[
{
    path: '',
    title: 'Landlord Certificates London | Property Compliance Services',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
//   {
//     path: 'services',
//     title: 'Services | Landlord Certificate Services ',
//     loadComponent: () => import('./pages/service/service').then(m => m.Service)
//   },
  {
    path: 'electrical-certificates',
    title: 'Electrical Certificates | Landlord Certificate Services',
    loadComponent: () => import('./pages/electrical-certificates/electrical-certificates').then(m => m.ElectricalCertificates)
  },
  {
    path: 'gas-safety-certificates',
    title: 'Gas Safety Certificates | Landlord Certificate Services',
    loadComponent: () => import('./pages/gas-safety-certificates/gas-safety-certificates').then(m => m.GasSafetyCertificates)
  },
  {
    path: 'fire-safety-certificates',
    title: 'Fire Safety Certificates | Landlord Certificate Services',
    loadComponent: () => import('./pages/fire-safety-certificates/fire-safety-certificates').then(m => m.FireSafetyCertificates)
  },
  {
    path: 'fire-risk-assessment',
    title: 'Fire Risk Assessment | Landlord Certificate Services',
    loadComponent: () => import('./pages/fire-risk-assessment/fire-risk-assessment').then(m => m.FireRiskAssessment)
  },
  {
    path: 'epc',
    title: 'EPC | Landlord Certificate Services',
    loadComponent: () => import('./pages/epc/epc').then(m => m.Epc)
  },
  {
    path: 'asbestos-survey',
    title: 'Asbestos Survey | Landlord Certificate Services',
    loadComponent: () => import('./pages/asbestos-survey/asbestos-survey').then(m => m.AsbestosSurvey)
  },
  {
    path: 'legionella-risk-assessment',
    title: 'Legionella Risk Assessment | Landlord Certificate Services',
    loadComponent: () => import('./pages/legionella-risk-assessment/legionella-risk-assessment').then(m => m.LegionellaRiskAssessment)
  },
  {
    path: 'fire-doors-protection',
    title: 'Fire Doors Protection | Landlord Certificate Services',
    loadComponent: () => import('./pages/fire-doors-protection-page/fire-doors-protection-page').then(m => m.FireDoorsProtectionPage)
  },
  {
    path: 'contact',
    title: 'Contact Landlord Certificate Services | London Property Certificates',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }

    ]}
    
];
