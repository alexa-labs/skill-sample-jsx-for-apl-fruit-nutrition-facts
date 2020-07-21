// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react';
import * as Utils from '../utils';
import * as FruitSkillMetadata from '../data/fruit_skill_metadata.json';
import * as FruitInfo from '../data/fruit_info.json';
import { APL, Container, MainTemplate, Image, Sequence } from 'ask-sdk-jsx-for-apl';
import { AlexaHeader } from 'ask-sdk-jsx-for-apl/alexa-layouts'
import { FruitsRow } from './FruitsRow';

class FruitsMainPageApl extends React.Component {
    constructor(props) {
        super();
        this.pageProperties = Utils.getPageProperties(props.viewportProfile);
        this.fruitRows = Utils.splitArray(FruitInfo.data, this.pageProperties.listRowCount);
    }
    render() {
        const isViewportSmall = this.pageProperties.size === "small";
        return (
            <APL theme="dark">
                <MainTemplate>
                    <Container width="100vw" height="100vh">
                        <Image
                            width="100vw" height="100vh"
                            position="absolute" scale="best-fill"
                            source={FruitSkillMetadata.properties.backgroundImageSourceUrl}>
                        </Image>
                        <Sequence width="100%" height="100%" scrollDirection="vertical">
                            {isViewportSmall ? null : <AlexaHeader headerTitle={FruitSkillMetadata.properties.headerTitle} />}
                            {
                                this.fruitRows.map((fruitRow) => {
                                    return (
                                        <FruitsRow fruitRowData={fruitRow} pageProperties={this.pageProperties} />
                                    );
                                }
                                )
                            }
                        </Sequence>
                    </Container>
                </MainTemplate>
            </APL>
        );
    }
}
module.exports = {
    FruitsMainPageApl
}