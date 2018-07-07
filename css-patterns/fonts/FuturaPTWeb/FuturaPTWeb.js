var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  FuturaPT Light\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 100;\n    src: local(\'FuturaPTWeb-Light\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'FuturaPTMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium Italic\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'FuturaPTMediumI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Heavy\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'FuturaPTHeavy\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  FuturaPT Light\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 100;\n    src: local(\'FuturaPTWeb-Light\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'FuturaPTMedium\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Medium Italic\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'FuturaPTMediumI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  FuturaPT Heavy\n  */\n  @font-face {\n    font-family: \'FuturaPTWeb\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'FuturaPTHeavy\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';
import fontLightEOT from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.eot';
import fontLightTTF from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.ttf';
import fontLightWOFF from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.woff';
import fontLightWOFF2 from './fontFiles/FuturaPTWeb-Light/FuturaPTWeb-Light.woff';

import fontMediumEOT from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.eot';
import fontMediumTTF from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.ttf';
import fontMediumWOFF from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.woff';
import fontMediumWOFF2 from './fontFiles/FuturaPTWeb-Medium/FuturaPTWeb-Medium.woff';

import fontMediumIEOT from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.eot';
import fontMediumITTF from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.ttf';
import fontMediumIWOFF from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.woff';
import fontMediumIWOFF2 from './fontFiles/FuturaPTWeb-MediumObl/FuturaPTWeb-MediumObl.woff';

import fontHeavyEOT from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.eot';
import fontHeavyTTF from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.ttf';
import fontHeavyWOFF from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.woff';
import fontHeavyWOFF2 from './fontFiles/FuturaPTWeb-Heavy/FuturaPTWeb-Heavy.woff';

var FuturaPT = css(_templateObject, fontLightWOFF2, fontLightWOFF, fontLightTTF, fontLightEOT, fontMediumWOFF2, fontMediumWOFF, fontMediumTTF, fontMediumEOT, fontMediumIWOFF2, fontMediumIWOFF, fontMediumITTF, fontMediumIEOT, fontHeavyWOFF2, fontHeavyWOFF, fontHeavyTTF, fontHeavyEOT);

export default FuturaPT;