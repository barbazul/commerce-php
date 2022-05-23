"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[7128],{86096:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return s}});var r=t(87462),n=t(63366),o=(t(15007),t(64983)),l=t(91515),m=["components"],i={},d={_frontmatter:i},p=l.Z;function s(e){var a=e.components,t=(0,n.Z)(e,m);return(0,o.mdx)(p,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Math/FloatComparator.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\Math\\FloatComparator"))," library provides methods to compare float values with an approriate epsilon value (",(0,o.mdx)("inlineCode",{parentName:"p"},"0.00001"),"). Floats usually have rounding errors while doing mathematical operations, so the conventional way of comparing two floats using the equality operator (",(0,o.mdx)("inlineCode",{parentName:"p"},"=="),"), may not always lead to expected results. For more information, please refer to this ",(0,o.mdx)("a",{parentName:"p",href:"https://floating-point-gui.de/errors/comparison/"},"article"),"."),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Method"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"equal")),(0,o.mdx)("td",{parentName:"tr",align:null},"Compares two given floats and returns a boolean value describing if they're equal.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"greaterThan")),(0,o.mdx)("td",{parentName:"tr",align:null},"Compares two given floats and returns a boolean value describing if the first float is greater than the second float.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"greaterThanOrEqual")),(0,o.mdx)("td",{parentName:"tr",align:null},"Compares two given floats and returns a boolean value describing if the first float is greater than or equal to the second float.")))),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)("p",null,"In the examples below, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"$this->floatComparator")," property is an instantiated object of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Math\\FloatComparator")," class."),(0,o.mdx)("h3",{id:"check-if-two-floats-are-equal"},"Check if two floats are equal"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"$isEqual = $this->floatComparator->equal(1.002, 1.002);\n")),(0,o.mdx)("h3",{id:"checks-if-the-first-float-is-greater-than-the-second-float"},"Checks if the first float is greater than the second float"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"$isGreater = $this->floatComparator->greaterThan(1.0004, 1.002);\n")),(0,o.mdx)("h3",{id:"checks-if-the-first-float-is-greater-than-or-equal-to-the-second-float"},"Checks if the first float is greater than or equal to the second float"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"$isGreaterOrEqual = $this->floatComparator->greaterThanOrEqual(1.0004, 1.0004);\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-framework-float-comparator-md-078da68121cd305cfe19.js.map