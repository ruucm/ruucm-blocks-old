var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Raleway Bold\n  */\n  @font-face {\n    font-family: \'RalewayWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Raleway-Bold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  Raleway Bold\n  */\n  @font-face {\n    font-family: \'RalewayWeb\';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\'Raleway-Bold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

import fontBoldEOT from './fontFiles/Raleway-Bold/Raleway-Bold.eot';
import fontBoldTTF from './fontFiles/Raleway-Bold/Raleway-Bold.ttf';
import fontBoldWOFF from './fontFiles/Raleway-Bold/Raleway-Bold.woff';
import fontBoldWOFF2 from './fontFiles/Raleway-Bold/Raleway-Bold.woff2';

var Raleway = css(_templateObject, fontBoldWOFF2, fontBoldWOFF, fontBoldTTF, fontBoldEOT);

export default Raleway;