var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor-school\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n'], ['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor-school\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import Style from './Style';
import font1 from './fontFiles/harbor-school.eot';
import fontTTF from './fontFiles/harbor-school.ttf';
import fontWOFF from './fontFiles/harbor-school.woff';
import fontSVG from './fontFiles/harbor-school.svg';

var HarborMagazineIcon = css(_templateObject, font1, font1, fontTTF, fontWOFF, fontSVG, Style);

export default HarborMagazineIcon;