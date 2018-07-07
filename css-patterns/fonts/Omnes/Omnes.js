var _templateObject = _taggedTemplateLiteral(['\n  /**\n  *  Omnes Regular\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'OmnesRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Regular Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'OmnesRegularI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'OmnesBold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 900;\n    src: local(\'OmnesBoldI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n'], ['\n  /**\n  *  Omnes Regular\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'OmnesRegular\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Regular Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 400;\n    src: local(\'OmnesRegularI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: normal;\n    font-weight: 900;\n    src: local(\'OmnesBold\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n\n  /**\n  *  Omnes Bold Italic\n  */\n  @font-face {\n    font-family: \'Omnes\';\n    font-style: italic;\n    font-weight: 900;\n    src: local(\'OmnesBoldI\'), url(', ') format(\'woff2\'),\n      url(', ') format(\'woff\'),\n      url(', ') format(\'truetype\'),\n      url(', ') format(\'embedded-opentype\');\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

import fontRegularEOT from './fontFiles/Omnes-Regular/Omnes-Regular.eot';
import fontRegularTTF from './fontFiles/Omnes-Regular/Omnes-Regular.ttf';
import fontRegularWOFF from './fontFiles/Omnes-Regular/Omnes-Regular.woff';
import fontRegularWOFF2 from './fontFiles/Omnes-Regular/Omnes-Regular.woff';

import fontRegularIEOT from './fontFiles/Omnes-Italic/Omnes-Italic.eot';
import fontRegularITTF from './fontFiles/Omnes-Italic/Omnes-Italic.ttf';
import fontRegularIWOFF from './fontFiles/Omnes-Italic/Omnes-Italic.woff';
import fontRegularIWOFF2 from './fontFiles/Omnes-Italic/Omnes-Italic.woff';

import fontBoldEOT from './fontFiles/Omnes-Bold/Omnes-Bold.eot';
import fontBoldTTF from './fontFiles/Omnes-Bold/Omnes-Bold.ttf';
import fontBoldWOFF from './fontFiles/Omnes-Bold/Omnes-Bold.woff';
import fontBoldWOFF2 from './fontFiles/Omnes-Bold/Omnes-Bold.woff';

import fontBoldIEOT from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.eot';
import fontBoldITTF from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.ttf';
import fontBoldIWOFF from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.woff';
import fontBoldIWOFF2 from './fontFiles/Omnes-BoldItalic/Omnes-BoldItalic.woff';

var Omnes = css(_templateObject, fontRegularWOFF2, fontRegularWOFF, fontRegularTTF, fontRegularEOT, fontRegularIWOFF2, fontRegularIWOFF, fontRegularITTF, fontRegularIEOT, fontBoldWOFF2, fontBoldWOFF, fontBoldTTF, fontBoldEOT, fontBoldIWOFF2, fontBoldIWOFF, fontBoldITTF, fontBoldIEOT);

export default Omnes;