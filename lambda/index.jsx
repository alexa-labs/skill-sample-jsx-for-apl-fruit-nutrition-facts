// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

import * as React from 'react';
import * as Alexa from 'ask-sdk';
import { AplDocument } from 'ask-sdk-jsx-for-apl';
import { FruitsMainPageApl } from './apl/FruitsMainPageApl';
import { FruitDetailPageApl } from './apl/FruitDetailPage/FruitDetailPageApl';
import * as Utils from './utils';

class LaunchIntentHandler {
    canHandle(handlerInput) {
        return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest');
    }
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        if (Utils.supportsAPL(handlerInput)) {
            const FruitsMainPageAPLDocument = getMainMenuAplDocument(handlerInput);
            return responseBuilder
                .addDirective(FruitsMainPageAPLDocument)
                .speak(Utils.getMessage("WELCOME_MESSAGE"))
                .getResponse();
        }
        else {
            return responseBuilder
                .speak(Utils.getMessage("NOT_SUPPORT_MESSAGE"))
                .getResponse();
        }
    }
}

class MainMenuIntentHandler {
    canHandle(handlerInput) {
        return ((Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MainMenuIntent')
        || (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent'
        && Alexa.getRequest(handlerInput.requestEnvelope).arguments.length > 0
        && Alexa.getRequest(handlerInput.requestEnvelope).arguments[0] === 'goBack'));
    }
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        if (Utils.supportsAPL(handlerInput)) {
            const FruitsMainPageAPLDocument = getMainMenuAplDocument(handlerInput);
            return responseBuilder
                .addDirective(FruitsMainPageAPLDocument)
                .speak(Utils.getMessage("MAIN_MENU_MESSAGE"))
                .getResponse();
        } else {
            return responseBuilder
                .speak(Utils.getMessage("NOT_SUPPORT_MESSAGE"))
                .getResponse();
        }
    }
}

class FruitSelectIntentHandler {
    canHandle(handlerInput) {
        return (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent'
            || (Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
                && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FruitSelectIntent'));
    }
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        let fruitName;
        if (Alexa.getRequestType(handlerInput.requestEnvelope) === 'Alexa.Presentation.APL.UserEvent') {
            const intentRequest = Alexa.getRequest(handlerInput.requestEnvelope);
            fruitName = intentRequest.arguments[0];
        }
        else {
            fruitName = Alexa.getSlotValue(handlerInput.requestEnvelope, "fruit");
        }
        if (Utils.supportsAPL(handlerInput)) {
            const viewportProfile = Alexa.getViewportProfile(handlerInput.requestEnvelope);
            const pageInfo = Utils.getPageProperties(viewportProfile);
            const FruitDetailPageAPLDocument = new AplDocument(
                <FruitDetailPageApl pageInfo={pageInfo} fruitName={fruitName}></FruitDetailPageApl>
            ).getDirective();
            return responseBuilder
                .addDirective(FruitDetailPageAPLDocument)
                .speak(Utils.getFruitSpeechDataSource(fruitName))
                .getResponse();
        }
        else {
            return responseBuilder
                .speak(Utils.getMessage("NOT_SUPPORT_MESSAGE"))
                .getResponse();
        }
    }
}

function getMainMenuAplDocument(handlerInput) {
    const viewportProfile = Alexa.getViewportProfile(handlerInput.requestEnvelope);
    return new AplDocument(
        <FruitsMainPageApl viewportProfile={viewportProfile}></FruitsMainPageApl>
    ).getDirective();
}

const handler = Alexa.SkillBuilders.custom().addRequestHandlers(
    new LaunchIntentHandler(),
    new MainMenuIntentHandler(),
    new FruitSelectIntentHandler())
    .lambda();
module.exports = { handler };