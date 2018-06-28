var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor\';\n    src:  url(', ');\n    src:  url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', '\n  /* @import \'harbor-icons\'; */\n'], ['\n  /**\n  *  Harbor Icons\n  */\n  @font-face {\n    font-family: \'harbor\';\n    src:  url(', ');\n    src:  url(', ') format(\'embedded-opentype\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'svg\');\n    font-weight: normal;\n    font-style: normal;\n  }\n  ', '\n  /* @import \'harbor-icons\'; */\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import Style from './Style';
import font1 from './fontFiles/harbor.eot';
import fontTTF from './fontFiles/harbor.ttf';
import fontWOFF from './fontFiles/harbor.woff';
import fontSVG from './fontFiles/harbor.svg';

var HarborIcon = css(_templateObject, font1, font1, fontTTF, fontWOFF, fontSVG, Style);

export default HarborIcon;