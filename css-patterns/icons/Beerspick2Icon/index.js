var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'beerspick-2\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'beerspick-2.eot-icons\'; */;\n'], ['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'beerspick-2\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'beerspick-2.eot-icons\'; */;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import Style from './Style';
import font1 from './fontFiles/beerspick-2.eot';
import fontTTF from './fontFiles/beerspick-2.ttf';
import fontWOFF from './fontFiles/beerspick-2.woff';
import fontSVG from './fontFiles/beerspick-2.svg';

var BeerspickIcon = css(_templateObject, font1, font1, fontTTF, fontWOFF, fontSVG, Style);

export default BeerspickIcon;