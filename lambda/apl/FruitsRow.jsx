// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react';
import { Container, Text, Image, TouchWrapper } from 'ask-sdk-jsx-for-apl';

class FruitsRow extends React.Component {
    constructor(props) {
        super();
        this.fruitRowData = props.fruitRowData;
        this.pageProperties = props.pageProperties;
    }
    render() {
        return (
            <Container direction="row" width="100vw"
                height={this.pageProperties.rowHeight}>
                {
                    this.fruitRowData.map((fruit) => {
                        const touchCommand = {
                            type: "SendEvent",
                            arguments: [
                                fruit.name
                            ]
                        };
                        return (
                            <Container width={`${100 / this.fruitRowData.length}vw`}
                                top={this.pageProperties.rowTopMargin} height="100%" alignItems="center"
                                paddingLeft="16dp" paddingBottom="16dp" paddingRight="16dp">
                                <Text width="100%" height="52dp"
                                    paddingBottom="12dp"
                                    textAlign="center" textAlignVertical="center"
                                    fontSize="22dp" text={fruit.name} />
                                <TouchWrapper onPress={touchCommand}>
                                    <Image width={this.pageProperties.imageWidth}
                                        height={this.pageProperties.imageHeight}
                                        borderRadius="100vw"
                                        scale="best-fill" align="center"
                                        source={fruit.sourceUrl} />
                                </TouchWrapper>
                            </Container>
                        );
                    }
                    )
                }
            </Container>
        );
    }
}
module.exports = {
    FruitsRow
}