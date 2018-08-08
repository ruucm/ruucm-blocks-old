var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  NimbusSan Light\n  */\n  @font-face {\n    font-family: \'NimbusSanWeb\';\n    font-style: normal;\n    font-weight: 300;\n    src: local(\'NimbusSan-Lig\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NimbusSan Regular\n  */\n  @font-face {\n    font-family: \'NimbusSanWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'NimbusSan-Reg\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NimbusSan Bold\n  */\n  @font-face {\n    font-family: \'NimbusSanWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'NimbusSan-Bol\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n'], ['\n  /**\n  *  NimbusSan Light\n  */\n  @font-face {\n    font-family: \'NimbusSanWeb\';\n    font-style: normal;\n    font-weight: 300;\n    src: local(\'NimbusSan-Lig\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NimbusSan Regular\n  */\n  @font-face {\n    font-family: \'NimbusSanWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'NimbusSan-Reg\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  NimbusSan Bold\n  */\n  @font-face {\n    font-family: \'NimbusSanWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'NimbusSan-Bol\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

import fontLightEOT from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.eot';
import fontLightTTF from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.ttf';
import fontLightWOFF from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.woff';
import fontLightWOFF2 from './fontFiles/NimbusSan-Lig/NimbusSan-Lig.woff2';

import fontRegularEOT from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.eot';
import fontRegularTTF from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.ttf';
import fontRegularWOFF from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.woff';
import fontRegularWOFF2 from './fontFiles/NimbusSan-Reg/NimbusSan-Reg.woff2';

import fontBoldEOT from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.eot';
import fontBoldTTF from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.ttf';
import fontBoldWOFF from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.woff';
import fontBoldWOFF2 from './fontFiles/NimbusSan-Bol/NimbusSan-Bol.woff2';

var NimbusSan = css(_templateObject, fontLightWOFF2, fontLightWOFF, fontLightTTF, fontLightEOT, fontRegularWOFF2, fontRegularWOFF, fontRegularTTF, fontRegularEOT, fontBoldWOFF2, fontBoldWOFF, fontBoldTTF, fontBoldEOT);

export default NimbusSan;