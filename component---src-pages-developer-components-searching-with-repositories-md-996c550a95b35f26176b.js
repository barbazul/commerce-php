"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[4179],{62939:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return u}});var n,r=a(87462),o=a(63366),i=(a(15007),a(64983)),l=a(91515),s=["components"],c={},m=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:c},d=l.Z;function u(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.mdx)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"what-is-a-repository-m2devgde-repository-intro"},"What is a repository? {#m2devgde-repository-intro}"),(0,i.mdx)("p",null,"Repositories give service requestors the ability to perform create, read, update, and delete (CRUD) operations on entities or a list of entities.\nA repository is an example of a ",(0,i.mdx)("a",{parentName:"p",href:"service-contracts/design-patterns.md"},"service contract"),", and its implementation is part of the domain layer."),(0,i.mdx)("h3",{id:"repository-state"},"Repository state"),(0,i.mdx)("p",null,"A repository should be stateless after instantiation.\nThis means that every method call should not rely on previous calls nor should it affect later method calls.\nAny field contained in the repository class must also be stateless."),(0,i.mdx)("p",null,"If your repository needs to provide functionality that requires state, such as for caching,  use the registry pattern.\nA good example that uses this pattern is the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Customer/Model/ResourceModel/CustomerRepository.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"CustomerRepository"))," class."),(0,i.mdx)("h2",{id:"search-criteria-m2devgde-search-criteria"},"Search Criteria {#m2devgde-search-criteria}"),(0,i.mdx)("p",null,"A Search Criteria is an implementation of the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteriaInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"SearchCriteriaInterface"))," class that allows you to build custom requests with different conditions."),(0,i.mdx)("p",null,"Repositories use this class to retrieve entities based on a matching criteria."),(0,i.mdx)("h3",{id:"filter"},"Filter"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/Filter.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"Filter"))," class is the smallest part of a Search Criteria.\nIt allows you to add a custom field, value, and condition type to the criteria."),(0,i.mdx)("p",null,"Example of how to define a Filter:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},'$filter\n    ->setField("url")\n    ->setValue("%magento.com")\n    ->setConditionType("like");\n')),(0,i.mdx)("p",null,'This filter will find all urls with the suffix of "magento.com".'),(0,i.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"A full list of condition types can be found in the ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/rest/performing-searches.html"},"Rest API Reference"),"."),(0,i.mdx)("h3",{id:"filter-group"},"Filter Group"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/Search/FilterGroup.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"FilterGroup"))," class acts like a collection of Filters that apply one or more criteria to a search."),(0,i.mdx)("p",null,"The boolean ",(0,i.mdx)("inlineCode",{parentName:"p"},"OR")," statement joins Filters inside a single ",(0,i.mdx)("strong",{parentName:"p"},"Filter Group"),".\nThe boolean ",(0,i.mdx)("inlineCode",{parentName:"p"},"AND")," statement joins Filter Groups inside a ",(0,i.mdx)("strong",{parentName:"p"},"Search Criteria"),"."),(0,i.mdx)("p",null,"For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},'$filter1\n    ->setField("url")\n    ->setValue("%magento.com")\n    ->setConditionType("like");\n\n$filter2\n    ->setField("store_id")\n    ->setValue("1")\n    ->setConditionType("eq");\n\n$filterGroup1->setFilters([$filter1, $filter2]);\n\n$filter3\n    ->setField("url_type")\n    ->setValue(1)\n    ->setConditionType("eq");\n\n$filterGroup2->setFilters([$filter3]);\n\n$searchCriteria->setFilterGroups([$filterGroup1, $filterGroup2]);\n')),(0,i.mdx)("p",null,"The code above creates a Search Criteria with the Filters put together in the following way: ",(0,i.mdx)("inlineCode",{parentName:"p"},"(url like %magento.com OR store_id eq 1) AND (url_type eq 1)")),(0,i.mdx)("h3",{id:"sorting"},"Sorting"),(0,i.mdx)("p",null,"To apply sorting to the Search Criteria, use the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SortOrder.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"SortOrder"))," class."),(0,i.mdx)("p",null,"Field and direction make up the two parameters that define a Sort Order object.\nThe field is the name of the field to sort.\nThe direction is the method of sorting whose value can be ",(0,i.mdx)("inlineCode",{parentName:"p"},"ASC")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"DESC"),"."),(0,i.mdx)("p",null,"The example below defines a Sort Order object that will sort the customer email in ascending order:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},'$sortOrder\n    ->setField("email")\n    ->setDirection("ASC");\n\n$searchCriteria->setSortOrders([$sortOrder]);\n')),(0,i.mdx)("h3",{id:"pagination"},"Pagination"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"setPageSize")," function paginates the Search Criteria by limiting the amount of entities it retrieves:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$searchCriteria->setPageSize(20); //retrieve 20 or less entities\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"setCurrentPage")," function sets the current page:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$searchCriteria\n    ->setPageSize(20)\n    ->setCurrentPage(2); //show the 21st to 40th entity\n")),(0,i.mdx)("h2",{id:"search-result"},"Search Result"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"getList(SearchCriteria $searchCriteria)")," method defined in your repository should return a Search Result object.\nThis object is an instance of a class that implements the interface ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchResultsInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"SearchResultInterface")),"."),(0,i.mdx)("p",null,"Search Result objects hold the Search Criteria object and the retrieved entities along with information about the total count of found entities regardless of any limitations set in the criteria."),(0,i.mdx)("p",null,"The search engine determines the maximum number of results that a query can return. For Elasticsearch, the default value of 10000 is defined in the module's ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/di.xml")," file."),(0,i.mdx)("p",null,"The example below uses ",(0,i.mdx)("strong",{parentName:"p"},"getList")," with the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Api/ProductRepositoryInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"ProductRepositoryInterface")),".\nWe use the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/FilterBuilder.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"FilterBuilder"))," and the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteriaBuilder.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"SearchCriteriaBuilder"))," to avoid shared instances."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"$filter = $this->filterBuilder\n    ->setField(ProductInterface::NAME)\n    ->setConditionType('like')\n    ->setValue('%hoodie%')\n    ->create();\n\n$this->searchCriteriaBuilder->addFilters([$filter]);\n$this->searchCriteriaBuilder->setPageSize(20);\n\n$searchCriteria = $this->searchCriteriaBuilder->create();\n$productsItems  = $this->productRepository->getList($searchCriteria)->getItems();\n")),(0,i.mdx)("h2",{id:"search-criteria-unify-processing-m2devgde-searchcriteria-unify-processing"},"Search Criteria Unify Processing {#m2devgde-searchcriteria-unify-processing}"),(0,i.mdx)("p",null,"A Collection Processor is an implementation of the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessorInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"CollectionProcessorInterface"))," interface that unifies the application of custom filters, sorting, and paginating.\nIt contains a one method process that applies a Search Criteria object to an abstract database collection."),(0,i.mdx)("p",null,"You can use ",(0,i.mdx)("a",{parentName:"p",href:"dependency-injection.md#dependency-types"},"virtual typing")," in your ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file to specify the processors used in the Collection Processor."),(0,i.mdx)("h3",{id:"filter-processor"},"Filter Processor"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/FilterProcessor.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"FilterProcessor"))," class applies Filter Groups and their filters to a collection."),(0,i.mdx)("p",null,"Below is the code that applies filters to a collection.\nThe method applies custom filters for some fields, otherwise it applies ",(0,i.mdx)("inlineCode",{parentName:"p"},"$collection->addFieldToFilter($fields, $conditions)"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Add FilterGroup to the collection\n *\n * @param FilterGroup $filterGroup\n * @param AbstractDb $collection\n */\nprivate function addFilterGroupToCollection(\n    FilterGroup $filterGroup,\n    AbstractDb $collection\n) {\n    $fields = [];\n    $conditions = [];\n    foreach ($filterGroup->getFilters() as $filter) {\n        $isApplied = false;\n        $customFilter = $this->getCustomFilterForField($filter->getField());\n        if ($customFilter) {\n            $isApplied = $customFilter->apply($filter, $collection);\n        }\n\n        if (!$isApplied) {\n            $condition = $filter->getConditionType() ? $filter->getConditionType() : 'eq';\n            $fields[] = $this->getFieldMapping($filter->getField());\n            $conditions[] = [$condition => $filter->getValue()];\n        }\n    }\n\n    if ($fields) {\n        $collection->addFieldToFilter($fields, $conditions);\n    }\n}\n")),(0,i.mdx)("p",null,"You can configure this class to use a specific custom field mapping and custom filter in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file.\nThe example below uses ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/dependency-injection"},"dependency injection")," to create a ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/virtual-type"},"virtual type")," from a Filter Processor that applies the module-specific ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Model/Api/SearchCriteria/CollectionProcessor/FilterProcessor/ProductCategoryFilter.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"ProductCategoryFilter"))," on a particular field mapping."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'    <virtualType name="Magento\\Customer\\Model\\Api\\SearchCriteria\\CollectionProcessor\\GroupFilterProcessor" type="Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\FilterProcessor">\n        <arguments>\n            <argument name="customFilters" xsi:type="array">\n                <item name="category_id" xsi:type="object">Magento\\Catalog\\Model\\Api\\SearchCriteria\\CollectionProcessor\\FilterProcessor\\ProductCategoryFilter</item>\n            </argument>\n            <argument name="fieldMapping" xsi:type="array">\n                <item name="code" xsi:type="string">main_table.customer_group_code</item>\n                <item name="id" xsi:type="string">main_table.customer_group_id</item>\n                <item name="tax_class_name" xsi:type="string">tax_class_table.class_name</item>\n            </argument>\n        </arguments>\n    </virtualType>\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"namespace Magento\\Catalog\\Model\\Api\\SearchCriteria\\CollectionProcessor\\FilterProcessor;\n\nuse Magento\\Catalog\\Model\\ResourceModel\\Product\\Collection;\nuse Magento\\Framework\\Api\\Filter;\nuse Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\FilterProcessor\\CustomFilterInterface;\nuse Magento\\Framework\\Data\\Collection\\AbstractDb;\n\nclass ProductCategoryFilter implements CustomFilterInterface\n{\n    /**\n     * Apply category_id Filter to Product Collection\n     *\n     * @param Filter $filter\n     * @param AbstractDb $collection\n     * @return bool Whether the filter is applied\n     */\n    public function apply(Filter $filter, AbstractDb $collection)\n    {\n        $value = $filter->getValue();\n        $conditionType = $filter->getConditionType() ?: 'in';\n        $filterValue = [$value];\n        if (($conditionType === 'in' || $conditionType === 'nin') && is_string($value)) {\n            $filterValue = explode(',', $value);\n        }\n        $categoryFilter = [$conditionType => $filterValue];\n\n        /** @var Collection $collection */\n        $collection->addCategoriesFilter($categoryFilter);\n\n        return true;\n    }\n}\n")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Argument"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"customFilters")),(0,i.mdx)("td",{parentName:"tr",align:null},"An array of filters implementing the ",(0,i.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/FilterProcessor/CustomFilterInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"CustomFilterInterface")),". These filters allow you to apply custom logic to a particular abstract database collection.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"fieldMapping")),(0,i.mdx)("td",{parentName:"tr",align:null},"Maps field names defined in the search Criteria to the names in an abstract database collection")))),(0,i.mdx)("h3",{id:"sorting-processor"},"Sorting Processor"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/SortingProcessor.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"SortingProcessor"))," class applies the sorting order of a search criteria to an abstract database collection."),(0,i.mdx)("p",null,"Below is an example of how you can configure a Sorting Processor virtual type in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," file to use a custom field mapping and default sorting orders."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="Magento\\Customer\\Model\\Api\\SearchCriteria\\CollectionProcessor\\GroupSortingProcessor" type="Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\SortingProcessor">\n    <arguments>\n        <argument name="fieldMapping" xsi:type="array">\n            <item name="code" xsi:type="string">customer_group_code</item>\n            <item name="id" xsi:type="string">customer_group_id</item>\n            <item name="tax_class_name" xsi:type="string">class_name</item>\n        </argument>\n        <argument name="defaultOrders" xsi:type="array">\n            <item name="id" xsi:type="string">ASC</item>\n        </argument>\n    </arguments>\n</virtualType>\n')),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Argument"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"fieldMapping")),(0,i.mdx)("td",{parentName:"tr",align:null},"Maps field names defined in the search Criteria to the names in an abstract database collection")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"defaultOrders")),(0,i.mdx)("td",{parentName:"tr",align:null},"The ordering applied when there are none defined in a search criteria.")))),(0,i.mdx)("h3",{id:"pagination-processor"},"Pagination Processor"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/PaginationProcessor.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"PaginationProcessor"))," class applies the current page and page size of the search criteria to an abstract database collection."),(0,i.mdx)("h3",{id:"join-processor"},"Join Processor"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/JoinProcessor.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"JoinProcessor"))," class allows you to join fields from other tables into an abstract database collection.\nTo join a table, implement ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\JoinProcessor\\CustomJoinInterface::apply(AbstractDb $collection)"),". Inside the class, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"$collection->join(…)")," method."),(0,i.mdx)("p",null,"Below is an example of creating a Join Processor:\nThe virtual type in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," class named ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Tax\\Model\\Api\\SearchCriteria\\CollectionProcessor\\TaxRuleJoinProcessor"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="Magento\\Tax\\Model\\Api\\SearchCriteria\\CollectionProcessor\\TaxRuleJoinProcessor" type="Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\JoinProcessor">\n  <arguments>\n    <argument name="customJoins" xsi:type="array">\n      <item name="rate.tax_calculation_rate_id" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\Rate</item>\n      <item name="rc.code" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\RateCode</item>\n      <item name="ctc.customer_tax_class_id" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\CustomerTaxClass</item>\n      <item name="ptc.product_tax_class_id" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\ProductTaxClass</item>\n      <item name="cd.customer_tax_class_id" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\CalculationData</item>\n      <item name="cd.product_tax_class_id" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\CalculationData</item>\n    </argument>\n    <argument name="fieldMapping" xsi:type="array">\n      <item name="id" xsi:type="string">tax_calculation_rule_id</item>\n      <item name="tax_rate_ids" xsi:type="string">tax_calculation_rate_id</item>\n      <item name="customer_tax_class_ids" xsi:type="string">cd.customer_tax_class_id</item>\n      <item name="product_tax_class_ids" xsi:type="string">cd.product_tax_class_id</item>\n      <item name="tax_calculation_rate_id" xsi:type="string">rate.tax_calculation_rate_id</item>\n    </argument>\n  </arguments>\n</virtualType>\n')),(0,i.mdx)("p",null,"The Join Processor aggregates the Custom Joins objects, implementing the interface ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/JoinProcessor/CustomJoinInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"CustomJoinInterface")),".\nBelow is ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\Rate")," as a Custom Join:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"namespace Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor;\n\nuse Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\JoinProcessor\\CustomJoinInterface;\nuse Magento\\Framework\\Data\\Collection\\AbstractDb;\n\n/**\n * Class Rate\n * @package Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\n **/\nclass Rate implements CustomJoinInterface\n{\n    /**\n     * @param \\Magento\\Tax\\Model\\ResourceModel\\Calculation\\Rule\\Collection $collection\n     * @return true\n     **/\n    public function apply(AbstractDb $collection)\n    {\n        $collection->joinCalculationData('rate');\n        return true;\n    }\n}\n")),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("inlineCode",{parentName:"p"},"apply")," method the object calls ",(0,i.mdx)("inlineCode",{parentName:"p"},"joinCalculationData")," method of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Tax\\Model\\ResourceModel\\Calculation\\Rule\\Collection")," class."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Join calculation data to result\n *\n * @param string $alias table alias\n * @return \\Magento\\Tax\\Model\\ResourceModel\\Calculation\\Rule\\Collection\n */\npublic function joinCalculationData($alias)\n{\n    $this->getSelect()->joinLeft(\n        [$alias => $this->getTable('tax_calculation')],\n        \"main_table.tax_calculation_rule_id = {$alias}.tax_calculation_rule_id\",\n        []\n    );\n    $this->getSelect()->group('main_table.tax_calculation_rule_id');\n\n    return $this;\n}\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"rate")," is alias of table, the alias is used in the Join.\nIn this case the ",(0,i.mdx)("inlineCode",{parentName:"p"},"joinCalculationData(...)")," is LEFT JOIN on ",(0,i.mdx)("inlineCode",{parentName:"p"},"tax_calculation_rule_id")," and group by ",(0,i.mdx)("inlineCode",{parentName:"p"},"tax_calculation_rule_id")),(0,i.mdx)("p",null,"The other case ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Tax\\Model\\Api\\SearchCriteria\\JoinProcessor\\RateCode")," class\nprovides additional LEFT JOIN except ",(0,i.mdx)("inlineCode",{parentName:"p"},"joinCalculationData")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * @param AbstractDb $collection\n * @return true\n */\npublic function apply(AbstractDb $collection)\n{\n    $taxCalculationTableAlias = 'tc';\n\n    $collection->joinCalculationData($taxCalculationTableAlias);\n\n    $collection->getSelect()->joinLeft(\n        ['rc' => $collection->getTable('tax_calculation_rate')],\n        \"{$taxCalculationTableAlias}.tax_calculation_rate_id = rc.tax_calculation_rate_id\",\n        []\n    );\n\n    return true;\n}\n")),(0,i.mdx)("p",null,"As result the processors will be used in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Tax\\Model\\TaxRuleRepository"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Tax\\Model\\TaxRuleRepository">\n    <arguments>\n        <argument name="collectionProcessor" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\TaxRuleCollectionProcessor</argument>\n    </arguments>\n</type>\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\Tax\\Model\\Api\\SearchCriteria\\TaxRuleCollectionProcessor"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="Magento\\Tax\\Model\\Api\\SearchCriteria\\TaxRuleCollectionProcessor" type="Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor">\n    <arguments>\n        <argument name="processors" xsi:type="array">\n            <item name="joins" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\CollectionProcessor\\TaxRuleJoinProcessor</item>\n            <item name="filters" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\CollectionProcessor\\TaxRuleFilterProcessor</item>\n            <item name="sorting" xsi:type="object">Magento\\Tax\\Model\\Api\\SearchCriteria\\CollectionProcessor\\TaxRuleSortingProcessor</item>\n            <item name="pagination" xsi:type="object">Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\PaginationProcessor</item>\n        </argument>\n    </arguments>\n</virtualType>\n')),(0,i.mdx)("h2",{id:"using-collection-processors-in-repositories"},"Using Collection Processors in Repositories"),(0,i.mdx)("p",null,"Below is an example of how the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Customer/Model/ResourceModel/CustomerRepository.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"CustomerRepositoryInterface"))," repository class uses a Collection Processor."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"    namespace Magento\\Customer\\Model\\ResourceModel;\n    ...\n    /**\n     * Customer repository.\n     * @SuppressWarnings(PHPMD.CouplingBetweenObjects)\n     **/\n    class CustomerRepository implements \\Magento\\Customer\\Api\\CustomerRepositoryInterface\n    {\n        ...\n        /**\n         * @var \\Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessorInterface\n         **/\n        private $collectionProcessor;\n        ...\n        public function __construct(\n            ...\n            CollectionProcessorInterface $collectionProcessor = null\n        ) {\n            ...\n            $this->collectionProcessor = $collectionProcessor ?: $this->getCollectionProcessor();\n        }\n        ...\n        /**\n         * {@inheritdoc}\n         **/\n        public function getList(SearchCriteriaInterface $searchCriteria)\n        {\n            ...\n            $this->getCollectionProcessor()->process($searchCriteria, $collection);\n            ...\n        }\n        ...\n        /**\n         * Retrieve collection processor\n         *\n         * @deprecated\n         * @return \\Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessorInterface\n         **/\n        private function getCollectionProcessor()\n        {\n            if (!$this->collectionProcessor) {\n                $this->collectionProcessor = \\Magento\\Framework\\App\\ObjectManager::getInstance()->get(\n                    'Magento\\Eav\\Model\\Api\\SearchCriteria\\CollectionProcessor'\n                );\n            }\n            return $this->collectionProcessor;\n        }\n    }\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," configuration file excerpt below shows how you can create a virtual type for the Collection Processor by passing in a custom Filter Processor and a custom Sorting Processor."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'  <virtualType name="Magento\\Customer\\Model\\Api\\SearchCriteria\\CollectionProcessor\\CustomerFilterProcessor" type="Magento\\Eav\\Model\\Api\\SearchCriteria\\CollectionProcessor\\FilterProcessor">\n      <arguments>\n          <argument name="customFilters" xsi:type="array">\n              <item name="category_id" xsi:type="object">Magento\\Customer\\Model\\Api\\SearchCriteria\\CollectionProcessor\\FilterProcessor\\CustomerCategoryFilter</item>\n          </argument>\n          <argument name="fieldMapping" xsi:type="array">\n              <item name="code" xsi:type="string">customer_group_code</item>\n              <item name="id" xsi:type="string">customer_group_id</item>\n              <item name="tax_class_name" xsi:type="string">class_name</item>\n          </argument>\n      </arguments>\n  </virtualType>\n  <virtualType name="Magento\\Customer\\Model\\Api\\SearchCriteria\\CollectionProcessor\\CustomerSortingProcessor" type="Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\SortingProcessor">\n      <arguments>\n          <argument name="fieldMapping" xsi:type="array">\n              <item name="code" xsi:type="string">customer_group_code</item>\n              <item name="id" xsi:type="string">customer_group_id</item>\n              <item name="tax_class_name" xsi:type="string">class_name</item>\n          </argument>\n          <argument name="defaultOrders" xsi:type="array">\n              <item name="id" xsi:type="string">ASC</item>\n          </argument>\n      </arguments>\n  </virtualType>\n  <virtualType name="Magento\\Customer\\Model\\Api\\SearchCriteria\\CustomerCollectionProcessor" type="Magento\\Eav\\Model\\Api\\SearchCriteria\\CollectionProcessor">\n      <arguments>\n          <argument name="processors" xsi:type="array">\n              <item name="filters" xsi:type="object">Magento\\Customer\\Model\\Api\\SearchCriteria\\CollectionProcessor\\CustomerFilterProcessor</item>\n              <item name="sorting" xsi:type="object">Magento\\Customer\\Model\\Api\\SearchCriteria\\CollectionProcessor\\CustomerSortingProcessor</item>\n              <item name="pagination" xsi:type="object">Magento\\Framework\\Api\\SearchCriteria\\CollectionProcessor\\PaginationProcessor</item>\n          </argument>\n      </arguments>\n  </virtualType>\n  <type name="Magento\\Customer\\Model\\ResourceModel\\CustomerRepository">\n      <arguments>\n          <argument name="collectionProcessor" xsi:type="object">Magento\\Customer\\Model\\Api\\SearchCriteria\\CustomerCollectionProcessor</argument>\n      </arguments>\n  </type>\n')),(0,i.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"When building an EAV Model that needs to implement the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Repository::getList")," method, use the EAV Filter Processor; otherwise the custom filters will not be added to the collection."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-searching-with-repositories-md-996c550a95b35f26176b.js.map