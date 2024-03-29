// ==UserScript==
// @name          Wikipedia Clean Dark
// @namespace     http://userstyles.org
// @description	  A clean dark theme for Wikipedia.
// @author        Jidril
// @homepage      https://userstyles.org/styles/154881
// @include       http://wikipedia.org/*
// @include       https://wikipedia.org/*
// @include       http://*.wikipedia.org/*
// @include       https://*.wikipedia.org/*
// @include       https://*.wikivoyage.org/*
// @include       https://wikivoyage.org/*
// @run-at        document-end
// @version       0.20180128185147
// ==/UserScript==
(function() {var css = [
	"    /* latin-ext */",
	"    @font-face {",
	"    font-family: \'Source Code Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Code Pro\'), local(\'SourceCodePro-Regular\'), url(https://fonts.gstatic.com/s/sourcecodepro/v7/mrl8jkM18OlOQN8JLgasDy2Q8seG17bfDXYR_jUsrzg.woff2) format(\'woff2\');",
	"    }",
	"    /* latin */",
	"    @font-face {",
	"    font-family: \'Source Code Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Code Pro\'), local(\'SourceCodePro-Regular\'), url(https://fonts.gstatic.com/s/sourcecodepro/v7/mrl8jkM18OlOQN8JLgasD9V_2ngZ8dMf8fLgjYEouxg.woff2) format(\'woff2\');",
	"    }",
	"    /* latin */",
	"    @font-face {",
	"    font-family: \'Source Code Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Code Pro Bold\'), local(\'SourceCodePro-Bold\'), url(https://fonts.gstatic.com/s/sourcecodepro/v7/leqv3v-yTsJNC7nFznSMqUo0As1BFRXtCDhS66znb_k.woff2) format(\'woff2\');",
	"    }",
	"    /* cyrillic */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: italic;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Italic\'), local(\'SourceSansPro-Italic\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/M2Jd71oPJhLKp0zdtTvoMywVDUTj8DgJRSuHEKdySfs.woff2) format(\'woff2\');",
	"    }",
	"    /* greek */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: italic;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Italic\'), local(\'SourceSansPro-Italic\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/M2Jd71oPJhLKp0zdtTvoM2qPyaMejTZ925Ro5CnyJwc.woff2) format(\'woff2\');",
	"    }",
	"    /* latin-ext */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: italic;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Italic\'), local(\'SourceSansPro-Italic\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/M2Jd71oPJhLKp0zdtTvoM40tgx99jmYGv_xzYuwd1rU.woff2) format(\'woff2\')",
	"    }",
	"    /* latin */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: italic;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Italic\'), local(\'SourceSansPro-Italic\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/M2Jd71oPJhLKp0zdtTvoMxgy2Fsj5sj3EzlXpqVXRKo.woff2) format(\'woff2\');",
	"    }",
	"    /* cyrillic */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Regular\'), local(\'SourceSansPro-Regular\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlMgmx_L9kV4w6g8dYQOLFUI.woff2) format(\'woff2\');",
	"    }",
	"    /* greek */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Regular\'), local(\'SourceSansPro-Regular\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlFjqPhnWKseBf12Mt9_m7kc.woff2) format(\'woff2\');",
	"    }",
	"    /* vietnamese */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Regular\'), local(\'SourceSansPro-Regular\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlNOAHFN6BivSraYkjhveRHY.woff2) format(\'woff2\');",
	"    }",
	"    /* latin-ext */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Regular\'), local(\'SourceSansPro-Regular\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlC2Q8seG17bfDXYR_jUsrzg.woff2) format(\'woff2\');",
	"    }",
	"    /* latin */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Sans Pro Regular\'), local(\'SourceSansPro-Regular\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlNV_2ngZ8dMf8fLgjYEouxg.woff2) format(\'woff2\');",
	"    }",
	"    /* cyrillic-ext */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Sans Pro Bold\'), local(\'SourceSansPro-Bold\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGH2tx1iQUBYLA4fTJZSoO3U.woff2) format(\'woff2\');",
	"    }",
	"    /* cyrillic */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Sans Pro Bold\'), local(\'SourceSansPro-Bold\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGJaoTU19aO7Bfv-FLfOt5YM.woff2) format(\'woff2\');",
	"    }",
	"    /* greek */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Sans Pro Bold\'), local(\'SourceSansPro-Bold\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGO4f2SQTi4oYi3kh3bYmG2Y.woff2) format(\'woff2\');",
	"    }",
	"    /* vietnamese */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Sans Pro Bold\'), local(\'SourceSansPro-Bold\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGDovqjS_dXPZszO_XltPdNg.woff2) format(\'woff2\');",
	"    }",
	"    /* latin-ext */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Sans Pro Bold\'), local(\'SourceSansPro-Bold\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGFxe-GPfKKFmiXaJ_Q0GFr8.woff2) format(\'woff2\');",
	"    }",
	"    /* latin */",
	"    @font-face {",
	"    font-family: \'Source Sans Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Sans Pro Bold\'), local(\'SourceSansPro-Bold\'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/toadOcfmlt9b38dHJxOBGEo0As1BFRXtCDhS66znb_k.woff2) format(\'woff2\');",
	"    }",
	"    /* latin-ext */",
	"    @font-face {",
	"    font-family: \'Source Serif Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Serif Pro\'), local(\'SourceSerifPro-Regular\'), url(https://fonts.gstatic.com/s/sourceserifpro/v5/CeUM4np2c42DV49nanp55Q_BUM40eMa9-jBVStC9wY0.woff2) format(\'woff2\');",
	"    }",
	"    /* latin */",
	"    @font-face {",
	"    font-family: \'Source Serif Pro\';",
	"    font-style: normal;",
	"    font-weight: 400;",
	"    src: local(\'Source Serif Pro\'), local(\'SourceSerifPro-Regular\'), url(https://fonts.gstatic.com/s/sourceserifpro/v5/CeUM4np2c42DV49nanp55fETq2ZMMnErnN6OL83eMrU.woff2) format(\'woff2\');",
	"    }",
	"    /* latin-ext */",
	"    @font-face {",
	"    font-family: \'Source Serif Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Serif Pro Bold\'), local(\'SourceSerifPro-Bold\'), url(https://fonts.gstatic.com/s/sourceserifpro/v5/yd5lDMt8Sva2PE17yiLarKwVIEQt96q_HGoOJQzfwxw.woff2) format(\'woff2\');",
	"    }",
	"    /* latin */",
	"    @font-face {",
	"    font-family: \'Source Serif Pro\';",
	"    font-style: normal;",
	"    font-weight: 700;",
	"    src: local(\'Source Serif Pro Bold\'), local(\'SourceSerifPro-Bold\'), url(https://fonts.gstatic.com/s/sourceserifpro/v5/yd5lDMt8Sva2PE17yiLarPgHLTi6vdOOFgNDwEC6JgI.woff2) format(\'woff2\');",
	"    }",
	"    ",
	"    ",
	"    body {",
	"    border: none !important;",
	"    font-family: \'Source Sans Pro\', sans-serif !important;",
	"    font-size: 18px !important;",
	"    background: #2c2f33 !important;",
	"    }",
	"    #content {",
	"    margin: 0 auto !important;",
	"    border: none !important;",
	"    font-family: \'Source Sans Pro\' !important;",
	"    font-size: 1rem !important;",
	"    line-height: 80% !important;",
	"    max-width: 920px !important;",
	"    background: #2c2f33 !important;",
	"    color: #ccc !important;",
	"    }",
	"    .vevent {",
	"    background: #2c2f33 !important;",
	"    }",
	"    div[role=\"region\"] {",
	"    background: #2c2f33 !important;",
	"    }",
	"    .mw-collapsible-content {",
	"    background: #2c2f33 !important;",
	"    }",
	"    a {",
	"    text-decoration: none !important;",
	"    }",
	"    a:hover {",
	"    text-decoration: underline !important;",
	"    }",
	"    /* top nav */",
	"    #mw-page-base {",
	"    height: 90px !important;",
	"    margin: 0 auto !important;",
	"    background: #23272a !important;",
	"    /* background: #CAC8C4 !important; */",
	"    }",
	"    #mw-navigation {",
	"    position: absolute !important;",
	"    top: 0 !important;",
	"    left: 0 !important;",
	"    right: 0 !important;",
	"    }",
	"    #mw-head {",
	"    position: relative !important;",
	"    max-width: 870px !important;",
	"    height: 90px !important;",
	"    margin: 0 auto !important;",
	"    }",
	"    #mw-head a,",
	"    #mw-head ul,",
	"    #mw-head li,",
	"    #mw-head span,",
	"    #mw-head .vectorTabs {",
	"    background: none !important;",
	"    border: none !important;",
	"    }",
	"    #mw-head > * {",
	"    position: absolute !important;",
	"    font-size: 16px !important;",
	"    margin: 0 !important;",
	"    padding: 0 !important;",
	"    }",
	"    #mw-head #left-navigation {",
	"    top: 50px !important;",
	"    left: -30px !important;",
	"    padding: 0 !important;",
	"    }",
	"    #mw-head #right-navigation {",
	"    top: 50px !important;",
	"    right: 0px !important;",
	"    padding: 0 !important;",
	"    }",
	"    #mw-head #p-personal {",
	"    top: 0px !important;",
	"    right: -30px !important;",
	"    padding: 5px 0px 0 0 !important;",
	"    font-size: 14px !important;",
	"    }",
	"    #mw-head li {",
	"    opacity: 0 !important;",
	"    transition: all 0.45s ease-out !important;",
	"    }",
	"    #mw-head:hover li {",
	"    opacity: 1 !important;",
	"    transition: all 0.13s ease-in !important;",
	"    }",
	"    #mw-head a,",
	"    #mw-head a:visited {",
	"    color: #f0f0f0 !important;",
	"    }",
	"    #mw-head #searchform > div {",
	"    position: absolute !important;",
	"    top: -32px !important;",
	"    right: -30px !important;",
	"    margin-top: 13px !important;",
	"    margin-left: 15px !important;",
	"    border: none !important;",
	"    width: 345px !important;",
	"    padding: 0 0 7px !important;",
	"    }",
	"    #mw-head #searchform > div input#searchInput {",
	"    padding: 4px 0 6px 8px !important;",
	"    font-size: 1rem;",
	"    color: #ccc !important;",
	"    }",
	"    #mw-head #p-cactions,",
	"    #mw-head #ca-watch {",
	"    display: none !important;",
	"    }",
	"    /* logo */",
	"    #mw-head:before {",
	"    position: relative !important;",
	"    width: 120px !important;",
	"    height: 120px !important;",
	"    top: 30px !important;",
	"    left: -25px !important;",
	"    content: \'Wikipedia\' !important;",
	"    font-family: \'Source Serif Pro\', serif !important;",
	"    /*font-style: italic !important;*/",
	"    font-weight: normal !important;",
	"    font-size: 28px !important;",
	"    text-transform: uppercase !important;",
	"    letter-spacing: 0px !important;",
	"    color: #eee !important;",
	"    }",
	"    /* left nav */",
	"    #mw-navigation #mw-panel {",
	"    position: fixed !important;",
	"    font-size: 18px !important;",
	"    top: 0px !important;",
	"    left: -255px !important;",
	"    width: 160px !important;",
	"    height: 100% !important;",
	"    overflow-y: auto !important;",
	"    padding: 0 0 0 100px !important;",
	"    background: #23272a !important;",
	"    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.25) !important;",
	"    transition: all 0.66s ease-in-out !important;",
	"    opacity: 0 !important;",
	"    }",
	"    #mw-navigation #mw-panel:hover {",
	"    left: -100px !important;",
	"    transition: all 0.2s ease-in-out !important;",
	"    opacity: 1 !important;",
	"    }",
	"    #mw-navigation #mw-panel a {",
	"    color: #eee !important;",
	"    }",
	"    #mw-navigation #p-navigation,",
	"    #mw-navigation .first {",
	"    margin-bottom: 0 !important;",
	"    margin-top: 7px !important;",
	"    }",
	"    #mw-navigation #p-lang:before {",
	"    content: \"\" !important;",
	"    font-size: 0 !important;",
	"    display: inline-block !important;",
	"    height: 0px !important;",
	"    width: 100% !important;",
	"    border-top: 1px solid rgba(0, 0, 0, 0.2) !important;",
	"    border-bottom: 1px solid rgba(255, 255, 255, 0.75) !important;",
	"    }",
	"    #mw-navigation #p-lang {",
	"    margin-top: -15px !important;",
	"    }",
	"    #mw-navigation #p-lang-label {",
	"    color: #fff;",
	"    font-size: 1.2rem;",
	"    }",
	"    #mw-navigation #p-lang .uls-settings-trigger {",
	"    margin-right: 8px !important;",
	"    margin-top: 6px !important;",
	"    }",
	"    #mw-navigation > #mw-panel > div:not(#p-lang):not(#p-navigation):not(.first),",
	"    #mw-navigation #p-lang .wbc-editpage {",
	"    display: none !important;",
	"    }",
	"    ",
	"    span.mwe-math-element, img.mwe-math-fallback-image-display {",
	"    filter: invert(100%);",
	"    }",
	"    ",
	"    div.equation-box {",
	"    background: #23272a !important;",
	"    }",
	"    ",
	"    /* article */",
	"    /* headlines */",
	"    #firstHeading {",
	"    font-family: \'Source Serif Pro\', sans-serif !important;",
	"    font-size: 2.7em !important;",
	"    margin-top: 40px !important;",
	"    padding-bottom: 5px !important;",
	"    font-weight: normal !important;",
	"    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) !important;",
	"    color: #eee;",
	"    }",
	"    #bodyContent h1,",
	"    #bodyContent h2,",
	"    #bodyContent h3,",
	"    #bodyContent h4,",
	"    #bodyContent h5,",
	"    #bodyContent h6 {",
	"    margin-top: 40px !important;",
	"    margin-bottom: 10px !important;",
	"    font-weight: normal !important;",
	"    font-family: \'Source Serif Pro\', sans-serif !important;",
	"    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) !important;",
	"    color: #eee;",
	"    }",
	"    #bodyContent h1 span.mw-editsection,",
	"    #bodyContent h2 span.mw-editsection,",
	"    #bodyContent h3 span.mw-editsection,",
	"    #bodyContent h4 span.mw-editsection,",
	"    #bodyContent h5 span.mw-editsection,",
	"    #bodyContent h6 span.mw-editsection {",
	"    float: right !important;",
	"    margin-top: 12px !important;",
	"    font-family: \'Source Sans Pro\', sans-serif !important;",
	"    text-shadow: none !important;",
	"    }",
	"    span.mw-editsection span.mw-editsection-bracket {",
	"    display: none !important;",
	"    }",
	"    #bodyContent h2 {",
	"    font-size: 33px !important;",
	"    }",
	"    #bodyContent h3 {",
	"    font-size: 30px !important;",
	"    }",
	"    #bodyContent h4 {",
	"    font-size: 26px !important;",
	"    }",
	"    #bodyContent h5 {",
	"    font-size: 22px !important;",
	"    }",
	"    #bodyContent h6 {",
	"    font-size: 20px !important;",
	"    }",
	"    /* numbering of the headings */",
	"    /* via http://userstyles.org/styles/56739/wikipedia-readable-hyphenation */",
	"    body {",
	"    counter-reset: headingOne;",
	"    }",
	"    #toctitle h2:before {",
	"    content: \"\" !important;",
	"    counter-reset: headingOne;",
	"    padding-right: 0 !important;",
	"    }",
	"    #bodyContent h2:before,",
	"    #bodyContent h3:before,",
	"    #bodyContent h4:before,",
	"    #bodyContent h5:before,",
	"    #bodyContent h6:before {",
	"    padding-right: 9px;",
	"    font-family: \'Lora\', serif !important;",
	"    text-shadow: none !important;",
	"    }",
	"    #bodyContent h2 {",
	"    counter-reset: headingTwo;",
	"    }",
	"    #bodyContent h2:before {",
	"    counter-increment: headingOne;",
	"    content: counter(headingOne);",
	"    font-size: 16px !important;",
	"    }",
	"    #bodyContent h3 {",
	"    counter-reset: headingThree;",
	"    }",
	"    #bodyContent h3:before {",
	"    counter-increment: headingTwo;",
	"    content: counter(headingOne) \".\" counter(headingTwo);",
	"    font-size: 15px !important;",
	"    }",
	"    #bodyContent h4 {",
	"    counter-reset: headingFour;",
	"    }",
	"    #bodyContent h4:before {",
	"    counter-increment: headingThree;",
	"    content: counter(headingOne) \".\" counter(headingTwo) \".\" counter(headingThree);",
	"    font-size: 14px !important;",
	"    }",
	"    #bodyContent h5 {",
	"    counter-reset: headingFive;",
	"    }",
	"    #bodyContent h5:before {",
	"    counter-increment: headingFour;",
	"    content: counter(headingOne) \".\" counter(headingTwo) \".\" counter(headingThree) \".\" counter(headingFour);",
	"    font-size: 13px !important;",
	"    }",
	"    #bodyContent h6 {",
	"    counter-reset: headingSix;",
	"    }",
	"    #bodyContent h6:before {",
	"    counter-increment: headingFive;",
	"    content: counter(headingOne) \".\" counter(headingTwo) \".\" counter(headingThree) \".\" counter(headingFour) \".\" counter(headingFive);",
	"    font-size: 12px !important;",
	"    }",
	"    /* article */",
	"    #bodyContent .infobox {",
	"    padding: 9px 16px 5px !important;",
	"    margin-left: 30px !important;",
	"    }",
	"    #bodyContent #siteSub,",
	"    /* hide Wikipedia byline */",
	"    #bodyContent #mw-fr-revisiontag,",
	"    /* hide revision thingie */",
	"    #bodyContent #tfd.boilerplate",
	"    /* hide template considered for deletion */",
	"    {",
	"    display: none !important;",
	"    }",
	"    #bodyContent #coordinates {",
	"    top: -3px !important;",
	"    padding: 4px 6px 3px !important;",
	"    background: #2c2f33 !important;",
	"    border-radius: 0px !important;",
	"    border: 1px solid #2c2f33 !important;",
	"    /* box-shadow: inset 0 1px 0 rgba(255,255,255,0.75), 0 1px 1px rgba(0,0,0,0.25) !important; */",
	"    }",
	"    html[lang=\"de\"] #bodyContent #coordinates",
	"    /* .de fix */",
	"    {",
	"    top: 53px !important;",
	"    right: 32px !important;",
	"    }",
	"    #bodyContent #protected-icon,",
	"    #bodyContent #good-star,",
	"    #bodyContent #spoken-icon,",
	"    #bodyContent #featured-star {",
	"    top: -45px !important;",
	"    }",
	"    /* text styles */",
	"    #bodyContent {",
	"    letter-spacing: -0.1px !important;",
	"    }",
	"    #bodyContent p,",
	"    #bodyContent li,",
	"    #bodyContent div.hatnote {",
	"    font-size: 18px !important;",
	"    line-height: 26px !important;",
	"    font-family: \'Source Sans Pro\' !important;",
	"    letter-spacing: -0.3px !important;",
	"    }",
	"    #bodyContent a:not(.new) {",
	"    color: #8ab5e5 !important;",
	"    }",
	"    #bodyContent a:not(.new):visited {",
	"    color: #dcb7ff !important;",
	"    }",
	"    #bodyContent .dablink,",
	"    #bodyContent .relarticle,",
	"    #bodyContent .rellink {",
	"    margin: 7px 0 9px !important;",
	"    padding: 0 !important;",
	"    font-size: 14px !important;",
	"    line-height: 22px !important;",
	"    color: #f0f0f0 !important;",
	"    }",
	"    #bodyContent #contentSub",
	"    /* redirected from msg */",
	"    {",
	"    margin: 5px 0 12px -5px !important;",
	"    padding: 0 !important;",
	"    font-size: 12px !important;",
	"    color: #ccc;",
	"    }",
	"    #bodyContent table.ambox,",
	"    #bodyContent #disambigbox {",
	"    margin: 0 !important;",
	"    font-size: 14px !important;",
	"    line-height: 22px !important;",
	"    }",
	"    #bodyContent #disambigbox {",
	"    margin: 25px 0 !important;",
	"    }",
	"    #bodyContent .references li {",
	"    color: #c0c0c0 !important;",
	"    font-size: 14px !important;",
	"    line-height: 17px !important;",
	"    }",
	"    /* boxes */",
	"    .messagebox,",
	"    #catlinks,",
	"    .infobox,",
	"    .infobox td,",
	"    table.infobox th,",
	"    #bodyContent div.thumb,",
	"    /* fix the thumbs backgrounds!!! */",
	"    .thumbinner,",
	"    div.thumb div,",
	"    code,",
	"    pre,",
	"    .thumbcaption,",
	"    .toccolours,",
	"    .NavFrame,",
	"    .toccolours th,",
	"    .toccolours tbody,",
	"    .NavHead,",
	"    .tright,",
	"    .tleft,",
	"    table,",
	"    .gallery,",
	"    .gallerybox,",
	"    .gallerytext,",
	"    table.gallery,",
	"    table.gallery td,",
	"    #toc,",
	"    .toc,",
	"    .mw-warning,",
	"    div.townBox,",
	"    table.diff,",
	"    td.diff-otitle,",
	"    td.diff-ntitle,",
	"    #imageLicense,",
	"    #filetoc,",
	"    .hintergrundfarbe1,",
	"    .hintergrundfarbe2,",
	"    #hauptseite h2,",
	"    .MainPageBG,",
	"    .noarticletext,",
	"    .quotebox,",
	"    #mp-topbanner,",
	"    .mw-code {",
	"    background-color: #23272a !important;",
	"    color: #ccc !important;",
	"    font-size: 0.9rem;",
	"    border-radius: 2px;",
	"    }",
	"    #mp-topbanner ul {",
	"    margin-top: -3.1em !important;",
	"    }",
	"    code {",
	"    font-family: \'Source Code Pro\', monospace;",
	"    border-color: #151819;",
	"    margin: auto 2px;",
	"    }",
	"    #content .thumbinner {",
	"    border-color: #b9b9b9 !important;",
	"    }",
	"    /* noborder test */",
	"    #toc,",
	"    .thumbinner,",
	"    .thumbinner .thumbimage,",
	"    .infobox,",
	"    .vertical-navbox,",
	"    .mergedtoprow,",
	"    table.infobox > tbody:first-child > tr:first-child > th,",
	"    .metadata:not(.ambox),",
	"    .mbox-small,",
	"    .quotebox,",
	"    .portal,",
	"    .catlinks,",
	"    .navbox,",
	"    .hintergrundfarbe1,",
	"    table",
	"    /* check this! i added this for \"roma\" on italian wikipedia */",
	"    {",
	"    border: none !important;",
	"    }",
	"    #content .thumbinner {",
	"    padding: 7px !important;",
	"    }",
	"    #bodyContent .ambox {",
	"    border-width: 0 0 0 5px !important;",
	"    }",
	"    .navbox + .navbox {",
	"    margin-top: 9px !important;",
	"    }",
	"    /* table of contents */",
	"    #toc {",
	"    padding: 1px 16px 5px !important;",
	"    font-size: 12px !important;",
	"    }",
	"    #toc #toctitle {",
	"    margin-top: 7px !important;",
	"    text-align: left !important;",
	"    padding-bottom: 0 !important;",
	"    }",
	"    #toc #toctitle h2 {",
	"    font-family: \"Source Sans Pro\", sans-serif !important;",
	"    font-size: 17px !important;",
	"    }",
	"    /* floating toc*/",
	"    #toc .toctoggle {",
	"    display: none !important;",
	"    }",
	"    #toc.toc {",
	"    padding: 0 !important;",
	"    font-size: 12px !important;",
	"    display: block !important;",
	"    position: fixed !important;",
	"    bottom: 0 !important;",
	"    height: 100% !important;",
	"    right: -200px !important;",
	"    width: 245px !important;",
	"    border: none !important;",
	"    transition: all 0.66s ease-in-out !important;",
	"    opacity: 0 !important;",
	"    overflow-y: auto!important;",
	"    z-index: 9999;",
	"    color: #ccc;",
	"    background: #23272a !important;",
	"    box-shadow: 1px 0 6px rgba(0, 0, 0, 0.25) !important;",
	"    }",
	"    #toc:hover {",
	"    right: 0px !important;",
	"    transition: all 0.15s ease-in-out !important;",
	"    opacity: 1 !important;",
	"    }",
	"    #bodyContent #toc ul,",
	"    #bodyContent #toc li {",
	"    padding: 0 !important;",
	"    margin: 0 !important;",
	"    }",
	"    #bodyContent #toc > ul > li {",
	"    border-top: 1px solid #797776 !important;",
	"    border-bottom: 1px solid #535251 !important;",
	"    }",
	"    #bodyContent #toc > ul > li:first-child {",
	"    border-top: none !important;",
	"    }",
	"    #bodyContent #toc > ul > li:last-child {",
	"    border-bottom: none !important;",
	"    }",
	"    #bodyContent #toc ul li a {",
	"    font-size: 18px !important;",
	"    line-height: 21px !important;",
	"    color: #EAE9E8 !important;",
	"    padding: 6px 0 4px !important;",
	"    }",
	"    #bodyContent #toc ul ul li a {",
	"    font-size: 13px !important;",
	"    line-height: 17px !important;",
	"    color: #eee !important;",
	"    padding: 4px 0 !important;",
	"    }",
	"    #bodyContent #toc ul li a .tocnumber {",
	"    font-size: 15px !important;",
	"    color: #eee !important;",
	"    margin-right: 0 !important;",
	"    }",
	"    #bodyContent #toc ul li a .tocnumber:after {",
	"    content: \".\" !important;",
	"    }",
	"    #bodyContent #toc ul ul li a .tocnumber {",
	"    display: none !important;",
	"    }",
	"    #bodyContent #toc ul > li {",
	"    padding: 0 3px 0 0 !important;",
	"    }",
	"    #bodyContent #toc ul ul ul > li {",
	"    padding: 0 3px 0 10px !important;",
	"    }",
	"    #bodyContent #toc > ul > li {",
	"    padding: 3px 3px 3px 13px !important;",
	"    }",
	"    #bodyContent #toc li a[href=\"#See_also\"],",
	"    #bodyContent #toc li a[href=\"#Notes\"],",
	"    #bodyContent #toc li a[href=\"#References\"],",
	"    #bodyContent #toc li a[href=\"#Bibliography\"],",
	"    #bodyContent #toc li a[href=\"#Further_reading\"],",
	"    #bodyContent #toc li a[href=\"#Documentaries\"],",
	"    #bodyContent #toc li a[href=\"#External_links\"] {",
	"    margin: -3px 0 !important;",
	"    font-size: 14px !important;",
	"    }",
	"    #bodyContent #toc li a[href=\"#See_also\"] .tocnumber,",
	"    #bodyContent #toc li a[href=\"#Notes\"] .tocnumber,",
	"    #bodyContent #toc li a[href=\"#References\"] .tocnumber,",
	"    #bodyContent #toc li a[href=\"#Bibliography\"] .tocnumber,",
	"    #bodyContent #toc li a[href=\"#Further_reading\"] .tocnumber,",
	"    #bodyContent #toc li a[href=\"#Documentaries\"] .tocnumber,",
	"    #bodyContent #toc li a[href=\"#External_links\"] .tocnumber {",
	"    display: none !important;",
	"    }",
	"    #bodyContent #toc li a {",
	"    display: block !important;",
	"    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;",
	"    }",
	"    #bodyContent #toc li a:hover {",
	"    text-decoration: none !important;",
	"    color: #fff !important;",
	"    }",
	"    #toc ul li {",
	"    transition: background 0.2s ease-in-out !important;",
	"    }",
	"    #toc ul li:hover {",
	"    background: #111 !important;",
	"    }",
	"    #toc #toctitle {",
	"    display: none !important;",
	"    }",
	"    table.wikitable > tr > th,",
	"    table.wikitable > tr > td,",
	"    table.wikitable > * > tr > th,",
	"    table.wikitable > * > tr > td {",
	"    font-size: 1rem;",
	"    color: #ccc !important;",
	"    border-color: #111 !important;",
	"    }",
	"    table.wikitable > tr > th,",
	"    table.wikitable > * > tr > th {",
	"    background-color: #111 !important;",
	"    }",
	"    .navbox th, .navbox title, div[role=\"heading\"], .plainlinks {",
	"    background-color: #3a4351 !important;",
	"    }",
	"    .navbox,",
	"    .navbox-subgroup {",
	"    background-color: #23272a;",
	"    }",
	"    .navbox-group,",
	"    .navbox-title,",
	"    .navbox-abovebelow {",
	"    background-color: #3a4351 !important;",
	"    }",
	"    tr + tr > .navbox-abovebelow,",
	"    tr + tr > .navbox-group,",
	"    tr + tr > .navbox-image,",
	"    tr + tr > .navbox-list {",
	"    border-color: #2c2f33;",
	"    }",
	"    .navbox-even {",
	"    background-color: #2c2f33;",
	"    }",
	"    .navbox-odd {",
	"    background-color: #202020;",
	"    }",
	"    /* footer */",
	"    #footer {",
	"    left: 0 !important;",
	"    right: 0 !important;",
	"    margin: 0 !important;",
	"    padding: 15px 0 !important;",
	"    background-color: #23272a !important;",
	"    }",
	"    #footer-info {",
	"    max-width: 860px !important;",
	"    margin: 0 auto !important;",
	"    font-size: 18px !important;",
	"    }",
	"    #footer li:not(#footer-info-lastmod) {",
	"    display: none !important;",
	"    }",
	"    ",
	"    ol.references li:target, sup.reference:target {",
	"    background-color: #4b3327;",
	"    }",
	"    ",
	"    .mw-parser-output blockquote.talkquote {",
	"    background-color: #444 !important;",
	"    }",
	"    ",
	"    .vector-menu-tabs {",
	"    background-image: none;",
	"    }",
	"    ",
	"    /* For maps on Wikivoyage */",
	"    ",
	"    div .leaflet-control-container .leaflet-top,",
	"    div .leaflet-control-container .leaflet-bottom,",
	"    div .leaflet-control-container .leaflet-right,",
	"    div .leaflet-control-container .leaflet-left {",
	"    background-color: transparent !important;",
	"    }",
	"    ",
	"    /* code formatting (highlight.js tomorrow night) */",
	"    ",
	"    ",
	"    /* Tomorrow Comment */",
	"    .mw-highlight .c,   /* Comment */",
	"    .mw-highlight .ch,  /* Comment.Hashbang */",
	"    .mw-highlight .cm,  /* Comment.Multiline */",
	"    .mw-highlight .c1,  /* Comment.Single */",
	"    .mw-highlight .cs   /* Comment.Special */",
	"    {",
	"    font-weight: normal;",
	"    color: #969896;",
	"    }",
	"    ",
	"    /* Tomorrow Red */",
	"    .mw-highlight .sr,  /* Literal.String.Regex */",
	"    .mw-highlight .nv,  /* Name.Variable */",
	"    .mw-highlight .nt   /* Name.Tag */",
	"    {",
	"    font-weight: normal;",
	"    color: #cc6666;",
	"    }",
	"    ",
	"    ",
	"    /* Tomorrow Orange */",
	"    .mw-highlight .m,   /* Literal.Number */",
	"    .mw-highlight .mb,  /* Literal.Number.Bin */",
	"    .mw-highlight .mf,  /* Literal.Number.Float */",
	"    .mw-highlight .mh,  /* Literal.Number.Hex */",
	"    .mw-highlight .mi,  /* Literal.Number.Integer */",
	"    .mw-highlight .mo,  /* Literal.Number.Oct */",
	"    .mw-highlight .nb,  /* Name.Builtin */",
	"    .mw-highlight .bp,  /* Name.Builtin.Pseudo */",
	"    .mw-highlight .kt,  /* Keyword.Type */",
	"    .mw-highlight .il,  /* Literal.Number.Integer.Long */",
	"    .mw-highlight .gp,  /* Generic.Prompt */",
	"    .mw-highlight .cp,  /* Comment.Preproc */",
	"    .mw-highlight .cpf, /* Comment.PreprocFile */",
	"    .mw-highlight .nf   /* Name.Function */",
	"    {",
	"    font-weight: normal;",
	"    color: #de935f;",
	"    }",
	"    ",
	"    /* Tomorrow Green */",
	"    .mw-highlight .dl,  /* Literal.String.Delimiter */",
	"    .mw-highlight .s,   /* Literal.String */",
	"    .mw-highlight .s1,  /* Literal.String.Single */",
	"    .mw-highlight .s2,  /* Literal.String.Double */",
	"    .mw-highlight .sa,  /* Literal.String.Affix */",
	"    .mw-highlight .sb,  /* Literal.String.Backtick */",
	"    .mw-highlight .sc,  /* Literal.String.Char */",
	"    .mw-highlight .sd,  /* Literal.String.Doc */",
	"    .mw-highlight .se,  /* Literal.String.Escape */",
	"    .mw-highlight .sh,  /* Literal.String.Heredoc */",
	"    .mw-highlight .si,  /* Literal.String.Interpol */",
	"    .mw-highlight .ss,  /* Literal.String.Symbol */",
	"    .mw-highlight .sx   /* Literal.String.Other */",
	"    {",
	"    font-weight: normal;",
	"    color: #b5bd68;",
	"    }",
	"    ",
	"    /* Tomorrow Purple */",
	"    .mw-highlight .k,  /* Keyword */",
	"    .mw-highlight .kc, /* Keyword.Constant */",
	"    .mw-highlight .kd, /* Keyword.Declaration */",
	"    .mw-highlight .kn, /* Keyword.Namespace */",
	"    .mw-highlight .kp, /* Keyword.Pseudo */",
	"    .mw-highlight .kr  /* Keyword.Reserved */",
	"    {",
	"    font-weight: normal;",
	"    color: #b294bb;",
	"    }",
	"    ",
	"    /* Tomorrow Blue */",
	"    .mw-highlight .nc /* Name.Class */",
	"    {",
	"    font-weight: normal;",
	"    color: #81a2be;",
	"    }",
	"    ",
	"    /* All Other */",
	"    .mw-highlight .o,  /* Operator */",
	"    .mw-highlight .ow, /* Operator.Word */",
	"    .mw-highlight .w,  /* Text.Whitespace */",
	"    .mw-highlight .nn /* Name.Namespace */",
	"    {",
	"    font-weight: normal;",
	"    color: #c5c8c6;",
	"    }",
	"    ",
	"    .mw-highlight .ge { /* Generic.Emph */",
	"    font-style: italic;",
	"    }",
	"    ",
	"    .mw-highlight .gs { /* Generic.Strong */",
	"    font-weight: bold",
	"    }",
	"    ",
	"    "
].join("\n");
	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			heads[0].appendChild(node);
		} else {
			// no head yet, stick it whereever
			document.documentElement.appendChild(node);
		}
	}
})();
