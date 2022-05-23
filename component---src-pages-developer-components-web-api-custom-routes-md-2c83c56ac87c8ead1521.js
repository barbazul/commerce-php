"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[986],{53898:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a=t(87462),d=t(63366),r=(t(15007),t(64983)),l=t(91515),i=["components"],m={},o={_frontmatter:m},s=l.Z;function u(e){var n=e.components,t=(0,d.Z)(e,i);return(0,r.mdx)(s,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"You can configure REST endpoints in your module to use custom routes (aliases) for URLs instead of the default URLs. For example, you can define the alias ",(0,r.mdx)("inlineCode",{parentName:"p"},"createWidget")," to represent ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST V1/widgets"),". However, you cannot create an alias for a route that contains one or more variables, such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"PUT V1/widgets/:widgetId"),"."),(0,r.mdx)("p",null,"To define custom routes, create an ",(0,r.mdx)("inlineCode",{parentName:"p"},"etc/webapi_async.xml")," file in your module that contains the following structure:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<services xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_WebapiAsync:etc/webapi_async.xsd">\n    <route url="V1/widgets" method="POST" alias="createWidget" />\n    <route url="async/bulk/V1/widget" method="PUT" alias="asyncBulkUpdateWidgets"/>\n    .........\n</services>\n')),(0,r.mdx)("p",null,"This example redefines two routes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"All requests made on endpoint ",(0,r.mdx)("inlineCode",{parentName:"li"},"POST /createWidget")," will be forwarded to ",(0,r.mdx)("inlineCode",{parentName:"li"},"POST V1/widgets")),(0,r.mdx)("li",{parentName:"ul"},"All requests made on endpoint ",(0,r.mdx)("inlineCode",{parentName:"li"},"PUT /asyncBulkUpdateWidgets")," will be forwarded to ",(0,r.mdx)("inlineCode",{parentName:"li"},"PUT async/bulk/V1/widget"))),(0,r.mdx)("p",null,"The following table defines the ",(0,r.mdx)("inlineCode",{parentName:"p"},"route")," node attributes:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Attribute name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"url")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"An existing REST endpoint. The route can be defined in the module's ",(0,r.mdx)("inlineCode",{parentName:"td"},"webapi.xml")," file, or derived, such as those for asynchronous and bulk endpoints.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"method")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"The HTTP request method. One of ",(0,r.mdx)("inlineCode",{parentName:"td"},"GET"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"PUT"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"POST")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"DELETE"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"alias")),(0,r.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:null},"A string that defines the custom route for the route defined in ",(0,r.mdx)("inlineCode",{parentName:"td"},"url"),".")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-web-api-custom-routes-md-2c83c56ac87c8ead1521.js.map