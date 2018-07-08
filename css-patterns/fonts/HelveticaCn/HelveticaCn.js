var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Helvetica Regular\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'HelveticaRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Regular Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'HelveticaRegularO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: normal;\n    font-weight: 500;\n    src: local(\'HelveticaMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: italic;\n    font-weight: 500;\n    src: local(\'HelveticaMediumO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  Helvetica Regular\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'HelveticaRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Regular Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'HelveticaRegularO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: normal;\n    font-weight: 500;\n    src: local(\'HelveticaMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Helvetica Medium Oblique\n  */\n  @font-face {\n    font-family: \'HelveticaWeb\';\n    font-style: italic;\n    font-weight: 500;\n    src: local(\'HelveticaMediumO\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

import fontRegularEOT from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.eot';
import fontRegularTTF from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.ttf';
import fontRegularWOFF from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.woff';
import fontRegularWOFF2 from './fontFiles/HelveticaNeueLTPro-Cn/HelveticaNeueLTPro-Cn.woff';

import fontRegularOEOT from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.eot';
import fontRegularOTTF from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.ttf';
import fontRegularOWOFF from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.woff';
import fontRegularOWOFF2 from './fontFiles/HelveticaNeueLTPro-CnO/HelveticaNeueLTPro-CnO.woff';

import fontMediumEOT from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.eot';
import fontMediumTTF from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.ttf';
import fontMediumWOFF from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.woff';
import fontMediumWOFF2 from './fontFiles/HelveticaNeueLTPro-MdCn/HelveticaNeueLTPro-MdCn.woff';

import fontMediumOEOT from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.eot';
import fontMediumOTTF from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.ttf';
import fontMediumOWOFF from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.woff';
import fontMediumOWOFF2 from './fontFiles/HelveticaNeueLTPro-MdCnO/HelveticaNeueLTPro-MdCnO.woff';

var Helvetica = css(_templateObject, fontRegularWOFF2, fontRegularWOFF, fontRegularTTF, fontRegularEOT, fontRegularOWOFF2, fontRegularOWOFF, fontRegularOTTF, fontRegularOEOT, fontMediumWOFF2, fontMediumWOFF, fontMediumTTF, fontMediumEOT, fontMediumOWOFF2, fontMediumOWOFF, fontMediumOTTF, fontMediumOEOT);

export default Helvetica;