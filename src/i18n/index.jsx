import arMessages from './messages/ar.json';
// no need to import en messages-- they are in the defaultMessage field
import es419Messages from './messages/es_419.json';
import esesMessages from './messages/es_es.json';
import frMessages from './messages/fr.json';
import zhcnMessages from './messages/zh_CN.json';

const messages = {
  ar: arMessages,
  'es-419': es419Messages,
  'es-es': esesMessages,
  fr: frMessages,
  'zh-cn': zhcnMessages,
};

export default messages;
