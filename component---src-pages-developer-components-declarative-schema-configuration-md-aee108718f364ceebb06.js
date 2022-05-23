"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[2850],{79445:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return p}});var a,l=t(87462),m=t(63366),i=(t(15007),t(64983)),d=t(91515),r=["components"],o={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),c={_frontmatter:o},u=d.Z;function p(e){var n=e.components,t=(0,m.Z)(e,r);return(0,i.mdx)(u,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Before Adobe Commerce and Magento Open Source 2.3, extension developers were required to write code (PHP scripts) to change the database schema. The following types of scripts existed before 2.3:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"InstallData and InstallSchema scripts, which are executed the first time a module is installed."),(0,i.mdx)("li",{parentName:"ul"},"UpgradeData and UpgradeSchema incremental scripts, which supplement an existing module schema."),(0,i.mdx)("li",{parentName:"ul"},"Recurring scripts, which are executed each time you install or upgrade Magento.")),(0,i.mdx)("p",null,"Each script iteratively adds changes. During the installation process, upgrade scripts apply only those changes that have not been applied yet. For example, if you have a module with version 2.1.8 installed and the latest version is 2.1.11, then the upgrade script changes for 2.1.9, 2.1.10, and 2.1.11 will be applied, in order, when you upgrade to 2.1.11. Each upgrade script is responsible for checking the required version for each change to apply. The Adobe Commerce or Magento Open Source installation only knows that a module has an upgrade script, not what versions it affected. That procedure is called ",(0,i.mdx)("em",{parentName:"p"},"migration setup")," or ",(0,i.mdx)("em",{parentName:"p"},"migration scripts"),"."),(0,i.mdx)("p",null,"The main disadvantage of this approach is that the application applies changes blindly. For example, in one version a new database column might be introduced, only to be removed in the next. ",(0,i.mdx)("em",{parentName:"p"},"Declarative setup")," eliminates this type of unnecessary work."),(0,i.mdx)("p",null,"Declarative setup is based on database structure declarations, and is used in projects such as ",(0,i.mdx)("a",{parentName:"p",href:"http://www.doctrine-project.org/"},"Doctrine"),". Schema files declare what the database structure should be,\nand the application determines the differences between the current table structure and what it should be. These differences can be represented with atomic SQL operations."),(0,i.mdx)("p",null,"The application prioritizes the declarative schema and executes the declarative install schemas before the ",(0,i.mdx)("a",{parentName:"p",href:"patches.md"},"data and schema patches"),"."),(0,i.mdx)("p",null,"The following example, extracted from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Catalog/etc/db_schema.xml")," file, defines the ",(0,i.mdx)("inlineCode",{parentName:"p"},"catalog_product_entity_datetime")," table:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<table name="catalog_product_entity_datetime" resource="default" engine="innodb"\n           comment="Catalog Product Datetime Attribute Backend Table">\n    <column xsi:type="int" name="value_id" unsigned="false" nullable="false" identity="true" comment="Value ID"/>\n    <column xsi:type="smallint" name="attribute_id" unsigned="true" nullable="false" identity="false" default="0" comment="Attribute ID"/>\n    <column xsi:type="smallint" name="store_id" unsigned="true" nullable="false" identity="false" default="0" comment="Store ID"/>\n    <column xsi:type="int" name="entity_id" unsigned="true" nullable="false" identity="false" default="0" comment="Entity ID"/>\n    <column xsi:type="datetime" name="value" on_update="false" nullable="true" comment="Value"/>\n    <constraint xsi:type="primary" referenceId="PRIMARY">\n        <column name="value_id"/>\n    </constraint>\n    <constraint xsi:type="foreign" referenceId="CAT_PRD_ENTT_DTIME_ATTR_ID_EAV_ATTR_ATTR_ID" table="catalog_product_entity_datetime" column="attribute_id" referenceTable="eav_attribute" referenceColumn="attribute_id" onDelete="CASCADE"/>\n    <constraint xsi:type="foreign" referenceId="CAT_PRD_ENTT_DTIME_ENTT_ID_CAT_PRD_ENTT_ENTT_ID" table="catalog_product_entity_datetime" column="entity_id" referenceTable="catalog_product_entity" referenceColumn="entity_id" onDelete="CASCADE"/>\n    <constraint xsi:type="foreign" referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_STORE_ID_STORE_STORE_ID" table="catalog_product_entity_datetime" column="store_id" referenceTable="store" referenceColumn="store_id" onDelete="CASCADE"/>\n    <constraint xsi:type="unique" referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_ENTITY_ID_ATTRIBUTE_ID_STORE_ID">\n        <column name="entity_id"/>\n        <column name="attribute_id"/>\n        <column name="store_id"/>\n    </constraint>\n    <index referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_ATTRIBUTE_ID" indexType="btree">\n        <column name="attribute_id"/>\n    </index>\n    <index referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_STORE_ID" indexType="btree">\n        <column name="store_id"/>\n    </index>\n</table>\n')),(0,i.mdx)("h2",{id:"db_schema-structure"},(0,i.mdx)("inlineCode",{parentName:"h2"},"db_schema")," structure"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Module_Vendor>/<Module_Name>/etc/db_schema.xml")," file declares a module's database structure."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"If you have enabled ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-urn.html"},"URN highlighting"),", you can use the PhpStorm autocomplete feature after choosing a node's ",(0,i.mdx)("inlineCode",{parentName:"p"},"xsi:type"),". This will also allow you to view which attributes are available on each line of your ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema.xml")," file"),(0,i.mdx)("h3",{id:"top-level-node"},"Top-level node"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema")," node defines the location of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"schema.xsd"),"  file."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">')),(0,i.mdx)("h3",{id:"table-node"},(0,i.mdx)("inlineCode",{parentName:"h3"},"table")," node"),(0,i.mdx)("p",null,"Each ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema.xml")," file should contain one or more ",(0,i.mdx)("inlineCode",{parentName:"p"},"table")," nodes. Each table node represents a table in the database.\nA table node can contain the following attributes:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"name")),(0,i.mdx)("td",{parentName:"tr",align:null},"The name of the table")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"engine")),(0,i.mdx)("td",{parentName:"tr",align:null},"SQL engine. This value must be ",(0,i.mdx)("inlineCode",{parentName:"td"},"innodb")," or ",(0,i.mdx)("inlineCode",{parentName:"td"},"memory"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"resource")),(0,i.mdx)("td",{parentName:"tr",align:null},"The database shard on which to install the table. This value must be ",(0,i.mdx)("inlineCode",{parentName:"td"},"default"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"checkout"),", or ",(0,i.mdx)("inlineCode",{parentName:"td"},"sales"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"comment")),(0,i.mdx)("td",{parentName:"tr",align:null},"Table comment")))),(0,i.mdx)("p",null,"A ",(0,i.mdx)("inlineCode",{parentName:"p"},"table")," node can contain three types of subnodes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"column")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"constraint")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"index"))),(0,i.mdx)("h4",{id:"column-subnode"},(0,i.mdx)("inlineCode",{parentName:"h4"},"column")," subnode"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"column")," subnode defines a column in a table. Each column requires its own declaration."),(0,i.mdx)("p",null,"A column can have the following attributes:"),(0,i.mdx)("table",null,(0,i.mdx)("tr",null,(0,i.mdx)("th",null,"Attribute"),(0,i.mdx)("th",null,"Description")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"xsi:type")),(0,i.mdx)("td",null,(0,i.mdx)("p",null,"Specifies the column type. Must be one of the following:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",null,(0,i.mdx)("code",null,"blob"),"  (includes blob, mediumblob, longblob)"),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"boolean")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"date")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"datetime")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"decimal")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"float")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"int")," (includes smallint, bigint, tinyint)"),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"json")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"real")," (includes decimal, float, double, real)"),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"smallint")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"text")," (includes text, mediumtext, longtext)"),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"timestamp")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"varbinary")),(0,i.mdx)("li",null,(0,i.mdx)("code",null,"varchar"))))),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"default")),(0,i.mdx)("td",null,"Initializes the column with the specified default value. The default value should have the same datatype defined in ",(0,i.mdx)("code",null,"xsi:type"),".")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"disabled")),(0,i.mdx)("td",null,"Disables or deletes the declared table, column, constraint, or index.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"identity")),(0,i.mdx)("td",null,"Indicates whether a column is auto incremented.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"length")),(0,i.mdx)("td",null,"Specifies the length of a column. Can be used for `char`, `varchar`, and `varbinary` types.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"nullable")),(0,i.mdx)("td",null,"Indicates whether column can be nullable.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"onCreate")),(0,i.mdx)("td",null,"This is a DDL trigger that allows you to move data from an existing column to a newly created column. This trigger works only when a column is created.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"padding")),(0,i.mdx)("td",null,"The size of an integer column.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"precision")),(0,i.mdx)("td",null,"The number of allowed digits in a real data type.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"scale")),(0,i.mdx)("td",null,"The number of digits after the decimal in a real data type.")),(0,i.mdx)("tr",null,(0,i.mdx)("td",null,(0,i.mdx)("code",null,"unsigned")),(0,i.mdx)("td",null,"For numeric data types, specifies whether the column can contain positive and negative values or only positive values."))),(0,i.mdx)("p",null,"For more information about each type, refer to the annotations in the corresponding XSD file."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/composer.html"},"Composer")," or ",(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/dev_install.html"},"GitHub")," installation: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<Application_root_directory/lib/internal/Magento/Framework/Setup/Declaration/Schema/etc"))),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<column xsi:type="int" name="entity_id" unsigned="true" nullable="false" identity="true" comment="Credit ID"/>\n')),(0,i.mdx)("h4",{id:"constraint-subnode"},(0,i.mdx)("inlineCode",{parentName:"h4"},"constraint")," subnode"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"constraint")," subnode always contains the following attributes:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"type")),(0,i.mdx)("td",{parentName:"tr",align:null},"One of ",(0,i.mdx)("inlineCode",{parentName:"td"},"primary"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"unique"),", or ",(0,i.mdx)("inlineCode",{parentName:"td"},"foreign"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"referenceId")),(0,i.mdx)("td",{parentName:"tr",align:null},"A custom identifier that is used only for relation mapping in the scope of ",(0,i.mdx)("inlineCode",{parentName:"td"},"db_schema.xml")," files. The real entity in the database has a system-generated name. The most convenient way to set the value of this attribute is to use the value that is written in the module's ",(0,i.mdx)("inlineCode",{parentName:"td"},"db_schema_whitelist.json"),"  file when you ",(0,i.mdx)("a",{parentName:"td",href:"migration-scripts.md#create-a-schema-whitelist"},"run the ",(0,i.mdx)("inlineCode",{parentName:"a"},"generate-whitelist")," command"),".")))),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"primary")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"unique"),' constraints are called "internal" constraints, because they can be applied only to the scope of the table where they are created. Internal constraints define one or more ',(0,i.mdx)("inlineCode",{parentName:"p"},"column")," subnodes. Each subnode defines a constrained column."),(0,i.mdx)("p",null,"The following example shows the format of an internal constraint."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<constraint xsi:type="primary" referenceId="PRIMARY">\n    <column name="entity_id"/>\n</constraint>\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"foreign")," constraint is similar to foreign keys in SQL. This type of constraint connects two tables with each other. The following attributes define a foreign constraint:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"table")),(0,i.mdx)("td",{parentName:"tr",align:null},"The name of the current table")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"column")),(0,i.mdx)("td",{parentName:"tr",align:null},"A column in the current table that refers to a specific column in another table")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"referenceTable")),(0,i.mdx)("td",{parentName:"tr",align:null},"The table being referenced")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"referenceColumn")),(0,i.mdx)("td",{parentName:"tr",align:null},"A column in the ",(0,i.mdx)("inlineCode",{parentName:"td"},"referenceTable"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"onDelete")),(0,i.mdx)("td",{parentName:"tr",align:null},"Foreign key trigger. The value must be ",(0,i.mdx)("inlineCode",{parentName:"td"},"CASCADE"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"SET NULL"),", or ",(0,i.mdx)("inlineCode",{parentName:"td"},"NO ACTION"))))),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"To keep entity identifiers as immutable values, the declarative schema does not support ",(0,i.mdx)("inlineCode",{parentName:"p"},"ON UPDATE")," action for ",(0,i.mdx)("inlineCode",{parentName:"p"},"constraint"),"."),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<constraint xsi:type="foreign" referenceId="COMPANY_CREDIT_COMPANY_ID_COMPANY_ENTITY_ID" table="company_credit" column="company_id" referenceTable="company" referenceColumn="entity_id" onDelete="CASCADE"/>\n')),(0,i.mdx)("h4",{id:"index-subnode"},(0,i.mdx)("inlineCode",{parentName:"h4"},"index")," subnode"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"index")," subnode has the same structure as internal constraints but contains different logic. While constraints are used for defining limitations, indexes are used for speeding up DQL operations. The following attributes define an index:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"referenceId")),(0,i.mdx)("td",{parentName:"tr",align:null},"A custom identifier that is used only for relation mapping in the scope of ",(0,i.mdx)("inlineCode",{parentName:"td"},"db_schema.xml")," files. The real entity in the database has a system-generated name. The most convenient way to set the value of this attribute is to use the value that is written in the module's ",(0,i.mdx)("inlineCode",{parentName:"td"},"db_schema_whitelist.json"),"  file when you ",(0,i.mdx)("a",{parentName:"td",href:"migration-scripts.md#create-a-schema-whitelist"},"run the ",(0,i.mdx)("inlineCode",{parentName:"a"},"generate-whitelist")," command"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"indexType")),(0,i.mdx)("td",{parentName:"tr",align:null},"The value must be ",(0,i.mdx)("inlineCode",{parentName:"td"},"btree"),", ",(0,i.mdx)("inlineCode",{parentName:"td"},"fulltext"),", or ",(0,i.mdx)("inlineCode",{parentName:"td"},"hash"))))),(0,i.mdx)("p",null,"Example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<index referenceId="NEWSLETTER_SUBSCRIBER_CUSTOMER_ID" indexType="btree">\n    <column name="customer_id"/>\n</index>\n')),(0,i.mdx)("h2",{id:"perform-common-database-operations"},"Perform common database operations"),(0,i.mdx)("p",null,"This section shows how to perform common database operations using declarative schema. The screen captures use ",(0,i.mdx)("inlineCode",{parentName:"p"},"git diff")," to illustrate how to perform these tasks."),(0,i.mdx)("h3",{id:"create-a-table"},"Create a table"),(0,i.mdx)("p",null,"The following example creates the ",(0,i.mdx)("inlineCode",{parentName:"p"},"declarative_table")," table with four columns. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"id_column")," column is the primary key."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n+    <table name="declarative_table">\n+        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n+        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n+        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n+        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n+        <constraint xsi:type="primary" referenceId="PRIMARY">\n+            <column name="id_column"/>\n+        </constraint>\n+    </table>\n</schema>\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"When creating a new table, remember to ",(0,i.mdx)("a",{parentName:"p",href:"migration-scripts.md#create-a-schema-whitelist"},"generate")," the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file."),(0,i.mdx)("h3",{id:"drop-a-table"},"Drop a table"),(0,i.mdx)("p",null,"In the following example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"declarative_table")," table was completely removed from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema.xml")," file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n-    <table name="declarative_table">\n-        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n-        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n-        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n-        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n-        <constraint xsi:type="primary" referenceId="PRIMARY">\n-            <column name="id_column"/>\n-        </constraint>\n-    </table>\n</schema>\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"When dropping a table, do not remove it from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file, otherwise it will not be dropped."),(0,i.mdx)("h3",{id:"rename-a-table"},"Rename a table"),(0,i.mdx)("p",null,"Table renaming is supported. The declarative schema will create a new table with the new name and drop the table with the old name.\nRenaming a table via ",(0,i.mdx)("inlineCode",{parentName:"p"},"RENAME TABLE")," is ",(0,i.mdx)("em",{parentName:"p"},"NOT")," supported.\nTo migrate data from another table, specify the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreate")," attribute on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"table")," declaration, and add specify the source table name:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'onCreate="migrateDataFromAnotherTable(catalog_category_entity)"\n')),(0,i.mdx)("p",null,"Please note that migrating data from another table and renaming columns at the same time is not supported."),(0,i.mdx)("p",null,"This declarative process of renaming a table is not fast. If you need to migrate lots of data quickly you can create a CSV table dump using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--safe-mode=1")," and add the data manually by using data/recurring patches."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n+    <table name="new_declarative_table" onCreate="migrateDataFromAnotherTable(declarative_table)">\n-    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n    </table>\n</schema>\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"When renaming a table, remember to regenerate the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file so it contains the new name in addition to the old one."),(0,i.mdx)("h3",{id:"add-a-column-to-table"},"Add a column to table"),(0,i.mdx)("p",null,"The following example adds the ",(0,i.mdx)("inlineCode",{parentName:"p"},"date_closed")," column."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n+       <column xsi:type="timestamp" name="date_closed" comment="Time of event"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n    </table>\n</schema>\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"When adding a new column into table, remember to ",(0,i.mdx)("a",{parentName:"p",href:"migration-scripts.md#create-a-schema-whitelist"},"generate")," the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file."),(0,i.mdx)("h3",{id:"drop-a-column-from-a-table"},"Drop a column from a table"),(0,i.mdx)("p",null,"The following example removes the  ",(0,i.mdx)("inlineCode",{parentName:"p"},"date_closed")," column by deleting its ",(0,i.mdx)("inlineCode",{parentName:"p"},"column")," node. To drop a column declared in another module, redeclare it with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"disabled")," attribute set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n-       <column xsi:type="timestamp" name="date_closed" comment="Time of event"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n    </table>\n</schema>\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"It is possible to drop a column only if it exists in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file."),(0,i.mdx)("h3",{id:"change-the-column-type"},"Change the column type"),(0,i.mdx)("p",null,"The following example changes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"type")," of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," column from ",(0,i.mdx)("inlineCode",{parentName:"p"},"varchar")," to  ",(0,i.mdx)("inlineCode",{parentName:"p"},"text"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n-       <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n+       <column xsi:type="text" name="title" nullable="false" comment="Title"/>\n        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n    </table>\n</schema>\n')),(0,i.mdx)("h3",{id:"rename-a-column"},"Rename a column"),(0,i.mdx)("p",null,"To rename a column, delete the original column declaration and create a new one. In the new column declaration, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreate")," attribute to specify which column to migrate data from. Use the following construction to migrate data from the same table."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'onCreate="migrateDataFrom(entity_id)"\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"When renaming a column, remember to regenerate the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file so it contains the new name in addition to the old one."),(0,i.mdx)("h3",{id:"add-an-index"},"Add an index"),(0,i.mdx)("p",null,"The following example adds the ",(0,i.mdx)("inlineCode",{parentName:"p"},"INDEX_SEVERITY")," index to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"declarative_table")," table."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n        <column xsi:type="text" name="title" nullable="false" length="255" comment="Title"/>\n        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n+       <index referenceId="INDEX_SEVERITY" indexType="btree">\n+           <column name="severity"/>\n+       </index>\n    </table>\n</schema>\n')),(0,i.mdx)("h3",{id:"create-a-foreign-key"},"Create a foreign key"),(0,i.mdx)("p",null,"In the following example, the selected ",(0,i.mdx)("inlineCode",{parentName:"p"},"constraint")," node defines the characteristics of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FL_ALLOWED_SEVERITIES")," foreign key."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n+       <constraint xsi:type="foreign" referenceId="FL_ALLOWED_SEVERITIES" table="declarative_table"\n+               column="severity" referenceTable="severities" referenceColumn="severity_identifier"\n+               onDelete="CASCADE"/>\n    </table>\n</schema>\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Foreign keys can only be added to tables when both tables were created using a declarative schema (",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema.xml"),")."),(0,i.mdx)("h3",{id:"drop-a-foreign-key"},"Drop a foreign key"),(0,i.mdx)("p",null,"The following example removes the  ",(0,i.mdx)("inlineCode",{parentName:"p"},"FL_ALLOWED_SEVERITIES")," foreign key by deleting its ",(0,i.mdx)("inlineCode",{parentName:"p"},"constraint")," node. To drop a constraint declared in another module, redeclare it with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"disabled")," attribute set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <column xsi:type="int" name="severity" unsigned="true" nullable="false" comment="Severity code"/>\n        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>\n        <column xsi:type="timestamp" name="time_occurred" comment="Time of event"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n-       <constraint xsi:type="foreign" referenceId="FL_ALLOWED_SEVERITIES" table="declarative_table"\n-               column="severity" referenceTable="severities" referenceColumn="severity_identifier"\n-               onDelete="CASCADE"/>\n    </table>\n</schema>\n')),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"It is possible to drop a foreign key only if it exists in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file."),(0,i.mdx)("h3",{id:"recreate-a-foreign-key"},"Recreate a foreign key"),(0,i.mdx)("p",null,"In this example, Module A defines a new table with primary key ",(0,i.mdx)("inlineCode",{parentName:"p"},"id_column"),". Module B declares its own schema, in which it creates a new column (",(0,i.mdx)("inlineCode",{parentName:"p"},"new_id_column"),") and changes the primary index to this column.\nModule B disables the original primary key and sets a new primary key with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"referenceId")," value that is different from PRIMARY. Although this value is different, the real name of the primary key in the database remains PRIMARY."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Module A declaration:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="id_column" unsigned="true" nullable="false" comment="Entity Id"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY">\n            <column name="id_column"/>\n        </constraint>\n    </table>\n</schema>\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Module B declaration:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">\n    <table name="declarative_table">\n        <column xsi:type="int" name="new_id_column" unsigned="true" nullable="false"\n                comment="New Entity Id"/>\n        <constraint xsi:type="primary" referenceId="PRIMARY" disabled="true"/>\n        <constraint xsi:type="primary" referenceId="NEW_PRIMARY">\n            <column name="new_id_column"/>\n        </constraint>\n    </table>\n</schema>\n')),(0,i.mdx)("h2",{id:"other-tasks"},"Other tasks"),(0,i.mdx)("h3",{id:"disable-a-module"},"Disable a module"),(0,i.mdx)("p",null,"When a module is disabled in ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php"),", its database schema configuration is no longer read on upgrade or install. As a result, subsequent system upgrades rebuild the database schema without the module's tables, columns, or other elements.\nPlease note that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file of disabled modules is still read during upgrades of installs, so the declarative schema system can perform the necessary operations.\nPractically, this means that if you disable a module which uses declarative schema and run ",(0,i.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:upgrade"),", ",(0,i.mdx)("em",{parentName:"p"},"its database tables will be dropped")," (see more details and discussion at  ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/issues/24926"},"https://github.com/magento/magento2/issues/24926"),"). Please consider using ",(0,i.mdx)("inlineCode",{parentName:"p"},"setup:upgrade --safe-mode=1")," in order to create a database backup after disabling a module and then eventually ",(0,i.mdx)("inlineCode",{parentName:"p"},"setup:upgrade --data-restore=1")," if you enable the module back and wish to restore from that backup."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-declarative-schema-configuration-md-aee108718f364ceebb06.js.map