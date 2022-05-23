"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[1314],{17331:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return u}});var a=n(87462),r=n(63366),m=(n(15007),n(64983)),i=n(91515),d=["components"],o={},l={_frontmatter:o},p=i.Z;function u(e){var t=e.components,n=(0,r.Z)(e,d);return(0,m.mdx)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("p",null,"The DateTime library provides utilities to work with date and time formatting. Provided methods in this library are described below."),(0,m.mdx)("h2",{id:"usage"},"Usage"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Method"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"formatDate")),(0,m.mdx)("td",{parentName:"tr",align:null},"Format the date to the internal format")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"isEmptyDate")),(0,m.mdx)("td",{parentName:"tr",align:null},"Check whether provided date value is empty or null")))),(0,m.mdx)("h3",{id:"example"},"Example"),(0,m.mdx)("p",null,"The following example shows how to format the current date and time into the internal format."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Magento\\Framework\\Stdlib\\DateTime;\n\n...\n    /**\n     * @var DateTime\n     */\n    private $dateTime;\n\n    /**\n     * SomeClass constructor.\n     *\n     * @param DateTime $dateTime\n     */\n    public function __construct(DateTime $dateTime)\n    {\n        $this->dateTime = $dateTime;\n    }\n\n    /**\n     * display current date to internal format time zone\n     *\n     * @return string\n     */\n    public function getFormatDate(): string\n    {\n    return $this->dateTime->formatDate(time());\n    }\n...\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-framework-datetime-library-md-a3f7aea2e6aaab20f02f.js.map