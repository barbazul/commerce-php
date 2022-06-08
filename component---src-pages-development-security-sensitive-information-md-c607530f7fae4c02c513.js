"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[12033],{94628:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var a=t(87462),i=t(63366),o=(t(15007),t(64983)),r=t(91515),s=["components"],d={},l={_frontmatter:d},m=r.Z;function p(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.mdx)(m,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"sensitive-information"},"Sensitive information"),(0,o.mdx)("p",null,"Sensitive information is information that either requires additional permissions for read/write operations or is meant to be accessed only programmatically for various reasons. Examples of sensitive information include customer passwords, addresses, date of birth, and the number of orders for a product."),(0,o.mdx)("h2",{id:"exposing-sensitive-information-to-users-without-permissions"},"Exposing sensitive information to users without permissions"),(0,o.mdx)("p",null,"Let's focus on the case when an endpoint, or a page, is configured only for authenticated customers or\nadmin users with certain permissions, yet still exposes information that it shouldn't."),(0,o.mdx)("h3",{id:"customer-information-example"},"Customer information example"),(0,o.mdx)("p",null,"Imagine a page or an endpoint that allows admin users to read data of a customer with the specified ID.\nThe controller/endpoint is properly configured to be accessible only by admin users that have\n",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::read_customer")," permission for their role. When developing this functionality, a responsible service\nwould probably look something like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"interface CustomerQueryServiceInterface {\n    public function findById(string $id): CustomerInterface;\n}\n")),(0,o.mdx)("p",null,"The service is really abstract. Most likely, it's actively used in other places where there's a need to get customer\ndata by ID. However, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"dob")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"addresses")," properties also require the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::personal_info")," permission,\nwhich is intended for the most trusted admin users only. This creates a problem for the customer read endpoint/page:\n",(0,o.mdx)("inlineCode",{parentName:"p"},"CustomerQueryServiceInterface::findById()")," always returns the full set of customer info, including ",(0,o.mdx)("inlineCode",{parentName:"p"},"dob")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"addresses"),"."),(0,o.mdx)("p",null,"Here's how the sensitive information will be exposed through various interfaces."),(0,o.mdx)("h4",{id:"rest-web-api"},"REST web API"),(0,o.mdx)("p",null,"The application framework serializes all properties defined in ",(0,o.mdx)("inlineCode",{parentName:"p"},"CustomerInterface")," into JSON and exposes them. If the endpoint\nis configured to require ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::personal_info"),", then admin users without it won't be able to read basic\ncustomer data. If it is configured to require ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::read_customer"),", then admin users without\n",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::personal_info")," can see ",(0,o.mdx)("inlineCode",{parentName:"p"},"dob")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"addresses"),"."),(0,o.mdx)("h4",{id:"graphql"},"GraphQL"),(0,o.mdx)("p",null,"If there are ",(0,o.mdx)("inlineCode",{parentName:"p"},"dob")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"addresses")," nodes available in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"schema.graphqls"),", then these properties will be exposed to\nall admin users."),(0,o.mdx)("h4",{id:"html-page-using-blocks"},"HTML page using blocks"),(0,o.mdx)("p",null,"A block gets all customer data from ",(0,o.mdx)("inlineCode",{parentName:"p"},"CustomerQueryServiceInterface")," with a high chance that the necessary\nauthorization that occurs before rendering any HTML code that contains ",(0,o.mdx)("inlineCode",{parentName:"p"},"dob")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"addresses")," will be forgotten."),(0,o.mdx)("h4",{id:"html-page-using-ui-components"},"HTML page using UI components"),(0,o.mdx)("p",null,"UI components read data from a global JS object that contains all data retrieved from data providers.\nThe object is rendered into JS on the backend and is available in response HTML.\nThe data provider that uses ",(0,o.mdx)("inlineCode",{parentName:"p"},"CustomerQueryServiceInterface")," will expose full customer data inside the response HTML."),(0,o.mdx)("h3",{id:"a-solution-for-the-example"},"A solution for the example"),(0,o.mdx)("p",null,"The solution is to have operation-specific DTOs and a case-specific service."),(0,o.mdx)("p",null,"The first step is to make a case-specific service for customer data retrieval by admin users:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"interface AdminCustomerQueryServiceInterface {}\n")),(0,o.mdx)("p",null,"The second step is to define operation specific DTOs:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"interface ReadCustomerDataInterface {\n    public function getId(): string;\n    public function getName(): string;\n}\n\ninterface ReadPersonalCustomerDataInterface {\n    public function getId(): string;\n    public function getDob(): \\DateTime;\n    public function getAddresses(): array;\n}\n")),(0,o.mdx)("p",null,"The final step is to define case-specific operations:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"interface AdminCustomerQueryServiceInterface {\n    public function findById(string $id): ReadCustomerDataInterface;\n    public function findPersonalDataById(string $id): ReadPersonalCustomerDataInterface;\n}\n")),(0,o.mdx)("p",null,"This service belongs in the business logic layer, so inside both these methods, you might use the same repository::method\nfrom the persistence layer. To avoid redundant calls to the repository, consider having an identity-map with full customer info\nto reuse when ",(0,o.mdx)("inlineCode",{parentName:"p"},"findPersonalDataById()")," is executed after ",(0,o.mdx)("inlineCode",{parentName:"p"},"findById()")," with the same ID."),(0,o.mdx)("p",null,"With this approach, it is harder to expose the sensitive data accidentally. ",(0,o.mdx)("inlineCode",{parentName:"p"},"findPersonalDataById()")," will only be called\nwhen there's an explicit need to read sensitive data."),(0,o.mdx)("p",null,"Here's how it will work for different interfaces."),(0,o.mdx)("h4",{id:"html-rendered-with-backend-blocks"},"HTML rendered with backend blocks"),(0,o.mdx)("p",null,"The block will have a condition: when the user has ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::personal_info"),", call the",(0,o.mdx)("inlineCode",{parentName:"p"},"findPersonalDataById()")," method.\nOtherwise, leave the personal data empty."),(0,o.mdx)("h4",{id:"html-rendered-on-frontend"},"HTML rendered on frontend"),(0,o.mdx)("p",null,"Inside the data provider for the UI component, the same condition listed above is present."),(0,o.mdx)("h4",{id:"restsoap-web-api"},"REST/SOAP web API"),(0,o.mdx)("p",null,"Both ",(0,o.mdx)("inlineCode",{parentName:"p"},"findById()")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"findPersonalDataById()")," have their own endpoints. The first requires ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::read_customer"),",\nwhile the second requires ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::personal_info"),". A client that wants to render the customer info page will issue two requests:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Fetch basic customer data from the ",(0,o.mdx)("inlineCode",{parentName:"li"},"findById()")," endpoint"),(0,o.mdx)("li",{parentName:"ol"},"Fetch personal customer data from the  ",(0,o.mdx)("inlineCode",{parentName:"li"},"findPersonalDataById()")," endpoint")),(0,o.mdx)("p",null,"The second may fail with a 403 status. In this case, the client ignores the status and displays basic customer data only, assuming\nthe current admin user does not have access to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::personal_info"),"."),(0,o.mdx)("h4",{id:"graphql-1"},"GraphQL"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"dob")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"addresses")," fields have their own resolvers, which will validate access to ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento_Customer::personal_info"),". If successful,\nthe resolvers call ",(0,o.mdx)("inlineCode",{parentName:"p"},"findPersonalDataById()")," and return the results."),(0,o.mdx)("h2",{id:"exposing-sensitive-information-through-a-persistent-storage"},"Exposing sensitive information through a persistent storage"),(0,o.mdx)("p",null,"There is always a possibility of bad actors gaining access to persistent storage either through injection attacks,\nthrough misconfigured environment, or any other way. For that reason, you must protect sensitive information while\nit's in storage and while it's being transported by APIs or a HTML interface."),(0,o.mdx)("h3",{id:"hashed-sensitive-information"},"Hashed sensitive information"),(0,o.mdx)("p",null,"Sensitive information that is never exposed in plain text after creation and is only used for comparison can be safely\nstored in the form of a hash."),(0,o.mdx)("p",null,"Good examples include passwords, tokens, and secrets. After a password (or similar entity) is created, there is no need to ever\ndisplay it to a user again. Later on, there's only a need to compare user input to the existing password.\nA hash allows allows you to compare a value to a hashed one and to avoid exposing the original value. A salt is often used with\nhashes for passwords to prevent attacks using rainbow tables."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Encryption\\EncryptorInterface")," helps with hashes. Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"getHash()")," method to generate a hash with\nor without a salt, depending on the second argument. (Using a salt is recommended.) Subsequently, use ",(0,o.mdx)("inlineCode",{parentName:"p"},"isValidHash()")," to\ncompare the user-provided value to an existing hash. These methods handle salts, choose a secure algorithm, and\nwill work after the encryption key is updated by an admin user."),(0,o.mdx)("h3",{id:"encrypted-sensitive-information"},"Encrypted sensitive information"),(0,o.mdx)("p",null,"Extremely sensitive information that is only accessible to authorized users must be stored encrypted."),(0,o.mdx)("p",null,"Private information such as addresses are good candidates for encryption, depending on your application requirements.\nEncrypting such information involves having an encryption key that is not stored in the same storage as the encrypted\ninformation."),(0,o.mdx)("p",null,"The application handles encryption with ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Encryption\\EncryptorInterface"),". The ",(0,o.mdx)("inlineCode",{parentName:"p"},"encrypt()")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"decrypt()"),"\nmethods use the encryption key for encryption and choose the most secure algorithm with decent performance.\nIt also handles old and new encryption keys and emerging best practices to encryption with regards to the algorithm."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-security-sensitive-information-md-c607530f7fae4c02c513.js.map