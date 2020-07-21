// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react';
import { FruitDetailLargeViewport } from './FruitDetailLargeViewport';
import { FruitDetailSmallViewport } from './FruitDetailSmallViewport';

class FruitDetailPageApl extends React.Component {
    constructor(props) {
        super();
        this.fruitName = props.fruitName;
        this.pageInfo = props.pageInfo;
    }
    render() {  
        if (this.pageInfo.size === "small") {
            return (<FruitDetailSmallViewport fruitName={this.fruitName} />);
        }
        else {
            return (<FruitDetailLargeViewport fruitName={this.fruitName} />);
        }
    }
}
module.exports = {
    FruitDetailPageApl
}