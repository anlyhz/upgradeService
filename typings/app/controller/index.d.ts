// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportServiceInfo from '../../../app/controller/serviceInfo';
import ExportServiceType from '../../../app/controller/serviceType';
import ExportServiceUpgrade from '../../../app/controller/serviceUpgrade';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    serviceInfo: ExportServiceInfo;
    serviceType: ExportServiceType;
    serviceUpgrade: ExportServiceUpgrade;
  }
}
