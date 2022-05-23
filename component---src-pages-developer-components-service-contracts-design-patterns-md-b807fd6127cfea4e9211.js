"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[6743],{97725:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n,r=a(87462),d=a(63366),i=(a(15007),a(64983)),m=a(91515),o=["components"],s={},l=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:s},c=m.Z;function u(e){var t=e.components,a=(0,d.Z)(e,o);return(0,i.mdx)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In the programming community, a ",(0,i.mdx)("em",{parentName:"p"},"design pattern")," is a recommended way of writing code that includes when to use, or not use, the pattern. Think of a ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/design-pattern"},"design pattern")," as a best practice with conditions."),(0,i.mdx)("p",null,"Design patterns for service contracts tell you which types of interfaces to define, and how and where to define and implement those interfaces."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Service contract data interfaces are now mutable."),(0,i.mdx)("h2",{id:"interface-types-and-locations-top-level-msc"},"Interface types and locations {#top-level-msc}"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/service-contract"},"service contract")," must define data interfaces, which preserve data integrity, and service interfaces, which hide business logic from service requestors."),(0,i.mdx)("p",null,"Data interfaces define functions that return information about data entities, return search results, and set validation rules and return validation results. You must define the data interfaces for a service contract in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Api/Data")," subdirectory for a ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module"),"."),(0,i.mdx)("p",null,"Service interfaces include management, repository, and ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/metadata"},"metadata")," interfaces.\nYou must define the service interfaces for a service contract in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Api")," subdirectory for a module."),(0,i.mdx)("h2",{id:"data-interfaces"},"Data interfaces"),(0,i.mdx)("p",null,"Define data interfaces in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Api/Data")," subdirectory for a module."),(0,i.mdx)("p",null,"For example, the data interfaces for the Customer module are in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"/app/code/Magento/Customer/Api/Data")," subdirectory."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SimpleDataObjectConverter.php"},"SimpleDataObjectConverter")," follows a strict 'camel case' to 'snake case' conversion of data keys (table columns). You should not use ",(0,i.mdx)("inlineCode",{parentName:"p"},"underscores (_)")," between alphanumerical characters in column names.\nFor example, use ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_shipping1")," instead of ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_shipping_1"),", as the Data Interface method ",(0,i.mdx)("inlineCode",{parentName:"p"},"defaultShipping1")," will be converted into ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_shipping1"),"."),(0,i.mdx)("h3",{id:"data-search-results-interfaces-search-results-interfaces"},"Data search results interfaces {#search-results-interfaces}"),(0,i.mdx)("p",null,"When you pass search criteria to a ",(0,i.mdx)("inlineCode",{parentName:"p"},"getList()")," call, a search results interface is returned with the search results."),(0,i.mdx)("p",null,"You must define one interface for each data ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/entity"},"entity")," for type hinting purposes. That is, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getItems()")," function in the\n",(0,i.mdx)("inlineCode",{parentName:"p"},"CustomerSearchResultsInterface")," returns an array of ",(0,i.mdx)("inlineCode",{parentName:"p"},"CustomerInterface")," data entities.\nIn ",(0,i.mdx)("inlineCode",{parentName:"p"},"GroupSearchResultsInterface"),", the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getItems()")," function returns an array of ",(0,i.mdx)("inlineCode",{parentName:"p"},"GroupInterface")," data entities."),(0,i.mdx)("h2",{id:"service-interfaces"},"Service interfaces"),(0,i.mdx)("p",null,"Service interfaces include several interface subtypes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Repository interfaces"),(0,i.mdx)("li",{parentName:"ul"},"Management interfaces"),(0,i.mdx)("li",{parentName:"ul"},"Metadata interfaces")),(0,i.mdx)("p",null,"For file names and coding standards, follow the defined ",(0,i.mdx)("a",{parentName:"p",href:"../../../coding-standards/php.md"},"PHP coding standards"),"."),(0,i.mdx)("p",null,"Place service interfaces in the top-level ",(0,i.mdx)("inlineCode",{parentName:"p"},"Api")," directory for a module."),(0,i.mdx)("h3",{id:"repository-interfaces-repository-interfaces"},"Repository interfaces {#repository-interfaces}"),(0,i.mdx)("p",null,"Repository interfaces provide access to persistent data entities."),(0,i.mdx)("p",null,"For example, persistent data entities for the Customer module include Customer, Address, and Group. Consequently, repository interfaces for the Customer module are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"CustomerRepositoryInterface")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"AddressRepositoryInterface")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"GroupRepositoryInterface"))),(0,i.mdx)("p",null,"Repository interfaces must provide these functions:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Method"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"save(data entity interface)")),(0,i.mdx)("td",{parentName:"tr",align:null},"If entity ID is not specified, creates a record. If entity ID is specified, updates the record for the specified ID.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"get(id)")),(0,i.mdx)("td",{parentName:"tr",align:null},"Performs a database lookup by ID and returns a data entity interface, such as ",(0,i.mdx)("inlineCode",{parentName:"td"},"CustomerInterface")," or ",(0,i.mdx)("inlineCode",{parentName:"td"},"AddressInterface"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"getList(search criteria)")),(0,i.mdx)("td",{parentName:"tr",align:null},"Performs a search for all data entities that match specified search criteria and returns a search result interface that gives access to the set of matches.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"delete(data entity interface)")),(0,i.mdx)("td",{parentName:"tr",align:null},"Deletes a specified entity. The entity contains the key (ID).")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"deleteById(id)")),(0,i.mdx)("td",{parentName:"tr",align:null},"Deletes a specified entity by key (ID).")))),(0,i.mdx)("p",null,"Each data entity has a corresponding interface. Consequently, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"getById()")," function in the corresponding interface, for example, can return the exact type."),(0,i.mdx)("h3",{id:"management-interfaces-management-interfaces"},"Management interfaces {#management-interfaces}"),(0,i.mdx)("p",null,"Management interfaces provide management functions that are not related to repositories. For example:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Interface"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"AccountManagementInterface")),(0,i.mdx)("td",{parentName:"tr",align:null},"Defines the ",(0,i.mdx)("inlineCode",{parentName:"td"},"createAccount()"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"changePassword()"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"activate()"),", and ",(0,i.mdx)("inlineCode",{parentName:"td"},"isEmailAvailable()")," functions.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"AddressManagementInterface")),(0,i.mdx)("td",{parentName:"tr",align:null},"Defines the ",(0,i.mdx)("inlineCode",{parentName:"td"},"validate()")," function that validates an address.")))),(0,i.mdx)("h3",{id:"metadata-interfaces-metadata-interfaces"},"Metadata interfaces {#metadata-interfaces}"),(0,i.mdx)("p",null,"Metadata interfaces provide methods for retrieving metadata, the interfaces are not related to repositories. For example:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Interface"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"AttributeMetadataInterface")),(0,i.mdx)("td",{parentName:"tr",align:null},"Provides customer attribute metadata and defines the constants used as keys of data array and methods. See more ",(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Customer/Api/Data/AttributeMetadataInterface.php"},"AttributeMetadataInterface"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"ProductMetadataInterface")),(0,i.mdx)("td",{parentName:"tr",align:null},"Provides application product metadata. Defines the ",(0,i.mdx)("inlineCode",{parentName:"td"},"getVersion()"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"getEdition()"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"getName()")," methods.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"CustomerMetadataManagementInterface")),(0,i.mdx)("td",{parentName:"tr",align:null},"Interface for managing customer attributes metadata. Defines the constant ",(0,i.mdx)("inlineCode",{parentName:"td"},"ENTITY_TYPE_CUSTOMER"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"AddressMetadataInterface")),(0,i.mdx)("td",{parentName:"tr",align:null},"Interface for retrieving information about customer address attributes metadata. Defines the constants ",(0,i.mdx)("inlineCode",{parentName:"td"},"ATTRIBUTE_SET_ID_ADDRESS"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"ENTITY_TYPE_ADDRESS"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"DATA_INTERFACE_NAME"),".")))),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Related topics:")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"index.md"},"Service contracts")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../web-api/services.md"},"Configure services as web APIs"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-service-contracts-design-patterns-md-b807fd6127cfea4e9211.js.map