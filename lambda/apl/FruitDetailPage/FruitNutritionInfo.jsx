// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react';
import * as Utils from '../../utils';
import { Text } from 'ask-sdk-jsx-for-apl';

class FruitNutritionInfo extends React.Component {
    constructor(props) {
        super();
        this.fruitInfo = Utils.getFruitInfo(props.fruitName);
    }
    render() {
        return (
            Object.keys(this.fruitInfo.nutritionInfo).map((nutritionName) => {
                const nutritionValue = this.fruitInfo.nutritionInfo[nutritionName];
                return (
                    <Text width="100%" height="52dp" color="#F8F8FF"
                        paddingTop="12dp" paddingBottom="12dp"
                        textAlign="center" textAlignVertical="center"
                        fontSize="22dp" text={`${nutritionName}: ${nutritionValue}`} />
                );
            })
        );
    }
}
module.exports = {
    FruitNutritionInfo
}