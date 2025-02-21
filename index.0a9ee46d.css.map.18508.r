{"mappings":"ACEA,uCAMA,qBAKA,kHAOA,0DASA,0CAOA,sBAKA,6CAUA,gCAKA,yBAEI,oFAKA,gFC/DJ,qHASI,yNAcJ,8ICrBA,8CAII,gIAQI,wFAKI,+MAeJ,+BAIJ,oPAeI,qEAIA,oFAII,4EC7DZ,mMAYI","sources":["index.0a9ee46d.css","src/scss/base/_reset.scss","src/scss/components/_header.scss","src/scss/components/_nav.scss","src/scss/components/_footer.scss"],"sourcesContent":["*, :before, :after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  background-color: #fdfcfa;\n  font-family: Raleway, sans-serif;\n  line-height: 1.333;\n}\n\nimg, picture, video, canvas, svg {\n  max-width: 100%;\n  display: block;\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\nol, ul {\n  list-style: none;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n#root, #__next {\n  isolation: isolate;\n}\n\n.scrollbar {\n  overflow: auto;\n}\n\n.scrollbar::-webkit-scrollbar {\n  background-color: #f3f3f3;\n  border-radius: 50px;\n  width: 8px;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  background-color: #d7d7d7;\n  border-radius: 50px;\n}\n\n.header {\n  z-index: 99;\n  background-color: #fdfcfa;\n  width: 100%;\n  padding: 20px 0 0;\n  position: fixed;\n  top: 0;\n  left: 50%;\n  translate: -50%;\n}\n\n.header-wrapper {\n  background-color: #fff;\n  border-radius: 50px;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 1220px;\n  margin: auto;\n  padding: 16px 48px;\n  display: flex;\n  box-shadow: 0 4px 2.5rem #00000014;\n}\n\n.logo {\n  color: #303030;\n  outline: none;\n  font-family: Playfair Display, sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n  line-height: 42px;\n  text-decoration: none;\n}\n\n.nav {\n  align-items: center;\n  gap: 36px;\n  display: flex;\n}\n\n.nav__item {\n  color: #303030;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 20px;\n  text-decoration: none;\n  transition: all .3s;\n}\n\n.nav__item__cnt {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n\n.nav__item__cnt__num {\n  color: #fff;\n  background-color: #d8232a;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  display: flex;\n  position: absolute;\n  top: -7px;\n  right: -10px;\n}\n\n.nav__item:hover {\n  color: #c1121f;\n}\n\n.nav__button {\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n  background-color: #d8232a;\n  border: 1px solid #d8232a;\n  border-radius: 50px;\n  min-width: 94px;\n  padding: 0 20px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 40px;\n  text-decoration: none;\n  transition: all .3s;\n}\n\n.nav__button:hover {\n  background-color: #c31f25;\n  border: 1px solid #c31f25;\n}\n\n.nav__button.logout {\n  color: #303030;\n  background-color: #f3f3f3;\n  border: 1px solid #f3f3f3;\n}\n\n.nav__button.logout:hover {\n  background-color: #e8e8e8;\n  border: 1px solid #e8e8e8;\n}\n\n.footer {\n  color: #606060;\n  background-color: #d7d7d7;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 36px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  display: flex;\n}\n\n.footer.fixed {\n  position: fixed;\n  bottom: 0;\n}\n/*# sourceMappingURL=index.0a9ee46d.css.map */\n","// CSS RESET\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Raleway, sans-serif;\r\n    line-height: 1.333;\r\n    -webkit-font-smoothing: antialiased;\r\n    background-color: #FDFCFA;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n#root,\r\n#__next {\r\n    isolation: isolate;\r\n}\r\n\r\n.scrollbar {\r\n    overflow: auto;\r\n    &::-webkit-scrollbar {\r\n        width: 8px;\r\n        background-color: #f3f3f3;\r\n        border-radius: 50px;\r\n    }\r\n    &::-webkit-scrollbar-thumb {\r\n        background-color: #d7d7d7;\r\n        border-radius: 50px;\r\n    }\r\n}",".header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 50%;\r\n    translate: -50% 0;\r\n    width: 100%;\r\n    padding: 20px 0 0;\r\n    background-color: #FDFCFA;\r\n    z-index: 99;\r\n    &-wrapper {\r\n        width: 100%;\r\n        max-width: 1220px;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        border-radius: 50px;\r\n        background-color: #fff;\r\n        box-shadow: 0 4px 2.5rem rgba(0,0,0,.08);\r\n        padding: 16px 48px;\r\n        margin: auto;\r\n    }\r\n}\r\n\r\n.logo {\r\n    font-family: 'Playfair Display', sans-serif;\r\n    font-size: 32px;\r\n    line-height: 42px;\r\n    font-weight: 700;\r\n    color: #303030;\r\n    text-decoration: none;\r\n    outline: none;\r\n}","@use '../base/variables' as *;\r\n\r\n.nav {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 36px;\r\n    &__item {\r\n        font-size: 12px;\r\n        line-height: 20px;\r\n        font-weight: 600;\r\n        color: #303030;\r\n        text-decoration: none;\r\n        transition: 0.3s all ease;\r\n        cursor: pointer;\r\n        &__cnt {\r\n            position: relative;\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            &__num {\r\n                position: absolute;\r\n                width: 20px;\r\n                height: 20px;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                font-size: 10px;\r\n                color: $white;\r\n                background-color: $red-900;\r\n                border-radius: 50%;\r\n                top: -7px;\r\n                right: -10px;\r\n            }\r\n        }\r\n        &:hover {\r\n            color: #c1121f;\r\n        }\r\n    }\r\n    &__button {\r\n        min-width: 94px;\r\n        font-size: 14px;\r\n        line-height: 40px;\r\n        font-weight: 600;\r\n        color: #fff;\r\n        border: none;\r\n        background-color: #d8232a;\r\n        border: 1px solid #d8232a;\r\n        border-radius: 50px;\r\n        padding: 0 20px;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n        transition: 0.3s all ease;\r\n        &:hover {\r\n            background-color: #c31f25;\r\n            border: 1px solid #c31f25;\r\n        }\r\n        &.logout {\r\n            color: #303030;\r\n            border: 1px solid #f3f3f3;\r\n            background-color: #f3f3f3;\r\n            &:hover {\r\n                border: 1px solid #e8e8e8;\r\n                background-color: #e8e8e8;\r\n            }\r\n        }\r\n    }\r\n}",".footer {\r\n    width: 100%;\r\n    height: 36px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    font-weight: 600;\r\n    background-color: #d7d7d7;\r\n    color: #606060;\r\n    &.fixed {\r\n        position: fixed;\r\n        bottom: 0;\r\n    }\r\n}"],"names":[],"version":3,"file":"index.0a9ee46d.css.map"}