var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'magharbor\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n'], ['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'magharbor\';\n    src: url(', ');\n    src: url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'), url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', ' /* @import \'harbor-icons\'; */;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import Style from './Style';
import font1 from './fontFiles/magharbor.eot';
import fontTTF from './fontFiles/magharbor.ttf';
import fontWOFF from './fontFiles/magharbor.woff';
import fontSVG from './fontFiles/magharbor.svg';

var HarborMagazineIcon = css(_templateObject, font1, font1, fontTTF, fontWOFF, fontSVG, Style);

export default HarborMagazineIcon;