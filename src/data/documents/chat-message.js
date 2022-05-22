// SPDX-FileCopyrightText: 2022 Johannes Loher
//
// SPDX-License-Identifier: MIT

import { packageId } from '../../constants.js';

export const registerChatMessageFunctionality = () => {
  Hooks.on('preCreateChatMessage', preCreateChatMessage);
};

const preCreateChatMessage = (chatMessage, data, options) => {
  if (chatMessage.isRoll) {
    const actor = ChatMessage.getSpeakerActor(chatMessage.data.speaker);
    if (actor) {
      const rollMode = actor.getFlag(packageId, 'roll-mode');
      if (rollMode !== undefined) {
        chatMessage.applyRollMode(rollMode);
        options.rollMode = rollMode;
      }
    }
  }
};