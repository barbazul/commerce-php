"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[2556],{57284:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return m},default:function(){return l}});var t=n(87462),r=n(63366),o=(n(15007),n(64983)),i=n(91515),p=["components"],m={},d={_frontmatter:m},s=i.Z;function l(e){var a=e.components,n=(0,r.Z)(e,p);return(0,o.mdx)(s,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"Adapter classes follow the ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Adapter_pattern"},"adapter pattern")," and wrap around classes from third-party libraries.\nThese classes allow you to use functionality from third-party libraries in your code by converting the third-party class interfaces into an interface that is expected by your native code."),(0,o.mdx)("h2",{id:"when-to-use"},"When to use"),(0,o.mdx)("p",null,"You should always use ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/adapter"},"adapter")," classes instead of directly using classes from third-party libraries.\nThis reduces the change impact on your code when the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/api"},"API")," changes in a third-party ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/library"},"library"),"."),(0,o.mdx)("p",null,"We recommend using adapter classes for ",(0,o.mdx)("a",{parentName:"p",href:"dependency-injection.md"},"dependency injection")," to get access to the functionality provided by third-party classes."),(0,o.mdx)("h2",{id:"how-to-write"},"How to write"),(0,o.mdx)("p",null,"A common approach in developing an adapter is to create an interface named ",(0,o.mdx)("inlineCode",{parentName:"p"},"AdapterInterface")," to describe the functionality the third-party class provides.\nThis class is typically found in a directory labeled ",(0,o.mdx)("inlineCode",{parentName:"p"},"Adapter"),".\nClasses implementing this adapter interface use the third-party class directly to provide indirect functionality."),(0,o.mdx)("p",null,"This approach allows you to update or substitute different implementations provided by other third-party classes without the need to update code that uses your adapter."),(0,o.mdx)("h2",{id:"examples-of-adapters-in-magento"},"Examples of adapters in Magento"),(0,o.mdx)("h3",{id:"magentoframeworkcodeminifier"},(0,o.mdx)("inlineCode",{parentName:"h3"},"Magento/Framework/Code/Minifier")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Code/Minifier"},"minifier")," functionality provided by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento/Framework/Code")," library involves the use of third-party libraries for code compression."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Code/Minifier/AdapterInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"AdapterInterface"))," for this class contains a ",(0,o.mdx)("inlineCode",{parentName:"p"},"minify($content)")," function that the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Code/Minifier/Adapter/Css/CSSmin.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"CSSmin"))," and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Code/Minifier/Adapter/Js/JShrink.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"JShrink"))," implementation class define."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/tedious/JShrink"},"jshrink"),"(tedivm/jshrink) and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/tubalmartin/YUI-CSS-compressor-PHP-port"},"cssmin"),"(tubalmartin/cssmin) libraries registered in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/composer.json"},(0,o.mdx)("inlineCode",{parentName:"a"},"composer.json"))," file provide the functionalities for the implementation classes."),(0,o.mdx)("h3",{id:"magentoframeworkimage"},(0,o.mdx)("inlineCode",{parentName:"h3"},"Magento/Framework/Image")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Image"},(0,o.mdx)("inlineCode",{parentName:"a"},"Magento/Framework/Image"))," library uses adapters to access functionality provided by GD(php-gd2) and ImageMagick(php-imagick) third-party libraries."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Image/Adapter/AdapterInterface.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"AdapterInterface"))," class defines the available functionality, and the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Image/Adapter/Gd2.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"Gd2"))," and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Image/Adapter/ImageMagick.php"},(0,o.mdx)("inlineCode",{parentName:"a"},"ImageMagick"))," adapter classes provides the concrete implementation using the third-party libraries."),(0,o.mdx)("h2",{id:"example-code"},"Example Code"),(0,o.mdx)("p",null,"The code below describes an interface for an adapter that parses ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/markdown"},"markdown"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Interface for markdown library adapters\n */\nnamespace MyCompany\\MyModule\\Markdown\\Parser\\Adapter;\n\ninterface AdapterInterface\n{\n    /**\n     * Converts markdown text into another format\n     *\n     * @param string $text\n     * @return string\n     */\n    public function parse($text);\n}\n")),(0,o.mdx)("br",null),(0,o.mdx)("p",null,"The code below is an implementation class of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AdapterInterface")," that uses the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/michelf/php-markdown"},"php-markdown")," library to convert markdown into ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/html"},"HTML"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"namespace MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\PhpMarkdown;\n\nuse \\Michelf\\Markdown;\nuse MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\AdapterInterface;\n\n/**\n * Adapter for php-markdown library\n */\nclass PhpMarkdown implements AdapterInterface\n{\n    /**\n     * Convert markdown into HTML\n     *\n     * @param string $text\n     * @return string\n     */\n    public function parse($text)\n    {\n        return Markdown::defaultTransform($text);\n    }\n}\n")),(0,o.mdx)("br",null),(0,o.mdx)("p",null,"To configure the ObjectManager to use the PhpMarkdown implementation when the AdapterInterface class is requested as a dependency, add the following code in your di.xml file."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},'<preference for="MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\AdapterInterface" type="MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\PhpMarkdown\\PhpMarkdown" />\n')),(0,o.mdx)("br",null),(0,o.mdx)("p",null,"The code below is an alternate implementation class of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"AdapterInterface")," that uses the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/kzykhys/Ciconia"},"Ciconia")," library to parse markdown into HTML.\nThis code differs from the previous implementations in that an instance of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Ciconia")," class is a constructor dependency."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"namespace MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\Ciconia;\nuse Ciconia\\Ciconia;\nuse MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\AdapterInterface;\n\n/**\n * Adapter for the Ciconia library\n */\nclass CiconiaParser implements AdapterInterface\n{\n    /**\n     * @var Ciconia\n     */\n     protected $parser;\n\n    /**\n     * @param Ciconia\n     */\n    public function __construct(Ciconia $parser)\n    {\n        $this->parser = $parser;\n    }\n\n    /**\n     * Convert markdown into HTML\n     *\n     * @param string $text\n     * @return string\n     */\n    public function parse($text)\n    {\n        return $this->parser->render($text);\n    }\n}\n")),(0,o.mdx)("br",null),(0,o.mdx)("p",null,"The following ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/dependency-injection"},"dependency injection")," entries belong in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"di.xml")," file.\nThey describe to the ObjectManager how to create the third-party and adapter classes."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<virtualType name="defaultCiconia" type="Ciconia\\Ciconia" shared="false">\n   <arguments>\n       <argument name="renderer" xsi:type="null"/>\n   </arguments>\n</virtualType>\n<type name="MyCompany\\MyModule\\Markdown\\Parser\\Adapter\\Ciconia\\CiconiaParser">\n   <arguments>\n       <argument name="parser" xsi:type="object">defaultCiconia</argument>\n   </arguments>\n</type>\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-adapters-md-1bcde11ceacc6765f5f4.js.map