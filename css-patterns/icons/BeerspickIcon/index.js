var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'beerspick\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'beerspick.eot-icons\'; */;\n'], ['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'beerspick\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'beerspick.eot-icons\'; */;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import Style from './Style';
import font1 from './fontFiles/beerspick.eot';
import fontTTF from './fontFiles/beerspick.ttf';
import fontWOFF from './fontFiles/beerspick.woff';
import fontSVG from './fontFiles/beerspick.svg';

var BeerspickIcon = css(_templateObject, font1, font1, fontTTF, fontWOFF, fontSVG, Style);

export default BeerspickIcon;