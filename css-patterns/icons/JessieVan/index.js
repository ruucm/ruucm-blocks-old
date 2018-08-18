var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'jessievan\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'jessievan.eot-icons\'; */;\n'], ['\n  /**\n  *  Beerspick Icons\n  */\n  @font-face {\n    font-family: \'jessievan\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'jessievan.eot-icons\'; */;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import Style from './Style';
import font1 from './fontFiles/jessievan.eot';
import fontTTF from './fontFiles/jessievan.ttf';
import fontWOFF from './fontFiles/jessievan.woff';
import fontSVG from './fontFiles/jessievan.svg';

var JessieVanIcon = css(_templateObject, font1, font1, fontTTF, fontWOFF, fontSVG, Style);

export default JessieVanIcon;