import { DefaultConfig } from './config.default';
import * as moment from 'moment';
import * as path from 'path';

export default () => {
  const config: DefaultConfig = {};
  config.logrotator = {
    filesRotateBySize: [
      path.join(__dirname, `../logs/prod/app/web_${process.pid}_${moment().format('YYYY-MM-DD_hh-mm-ss')}.log`),
    ],
    maxFileSize: 2 * 1024 * 1024 * 1024,
  }
  return config;
};
