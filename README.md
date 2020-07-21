## License Note
The images linked to in this sample code are not included within the scope of the license grant for use of the code. These links are included only as a reference. Use of the sample code does not include rights to use the reference images. You must replace them with your own images.

## Sample Skill - Fruits Nutrition Facts

Welcome! Fruits Nutrition Facts is a sample created to demonstrate the usage of ask-sdk-jsx-for-apl package within the the Alexa Presentation Language (APL). This sample mainly focuses on using **ask-sdk-jsx-for-apl** which provides React APL components and combining these components with the help of using JSX. Basically, this sample's aim is to show another approach to create APL Documents rather than generating them through json documents.

* Ask Sdk Jsx For Apl (https://github.com/alexa-labs/ask-sdk-jsx-for-apl)

## Prerequisites

* An Alexa Developer Account (sign up here: https://developer.amazon.com/alexa-skills-kit)
* An AWS Account (sign up here: https://aws.amazon.com)
* ASK CLI (https://developer.amazon.com/en-US/docs/alexa/smapi/quick-start-alexa-skills-kit-command-line-interface.html)

## Used React APL Components

* Primitive Components (https://developer.amazon.com/en-US/docs/alexa/alexa-presentation-language/apl-component.html) - APL, MainTemplate, Container, Image, Text, Sequence, Touchwrapper.

* Responsive Components (https://developer.amazon.com/en-US/docs/alexa/alexa-presentation-language/apl-layouts-overview.html) - AlexaHeader.

These components are used inside the jsx files under **lambda/apl/** to generate more complex APL Components which forms APL Document pages. Meanwhile generating those APL Document pages, **ask-sdk-jsx-for-apl** gives power to divide each APL page into smaller parts(basically into components). For instance, gettering and viewing nutrition info is executed inside **FruitNutritionInfo** component and it is used by the components in need of nutrition info. Same logic exists for listing the fruits by using **FruitsRow** component.

## Brief Steps

1. Because this project is composed of jsx files, first they need to be transpiled into js files.
    ```sh
    $ cd lambda
    $ npm install
    $ npm run build
    $ cd ..
    ```
    > Note: After executing the commands, **build/** folder should be created inside the root project folder. It contains transpiled files as well as node_modules which will be pushed to Lambda.
1. Create skill using ASK CLI.
    > Note: First create a profile unless you already have one or login to the one you have. You should link your AWS Account.
    ```sh
    $ ask configure
    $ ask deploy
    ```
    > Note: Please note that the package content is CLI v2 format. Skill package is created as well.
1. After deploying the skill navigate to [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask). Under your skills **Fruit Nutrition Facts** should appear.
1. Click on the Test tab and start with phrase `open fruits nutrition facts` (or whatever invocation name you used)
    Phrases you can try:
    * `show me apple`
    * `pear`
    * `show me fruits`

## License

This library is licensed under the Amazon Software License.