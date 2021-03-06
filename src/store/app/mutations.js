export function setWallet(state, { wallet }) {
  state.user.wallet = wallet;
}

export function setNetworkClient(state, { networkClient }) {
  state.networkClient = networkClient;
}

export function setColonyClient(state, { colonyClient }) {
  state.colonyClient = colonyClient;
}

export function setUserRoles(state, { hasRootRole, hasFundingRole }) {
  state.user.hasRootRole = hasRootRole;
  state.user.hasFundingRole = hasFundingRole;
}

export function clearUserRoles(state) {
  state.user.hasRootRole = false;
  state.user.hasFundingRole = false;
}

export function clearRewardPercentage(state) {
  state.rewardPercentage = 0;
}

export function toggleMoveFundsDialog(state, isOpen) {
  if (typeof isOpen === "boolean") {
    state.moveFundsDialog = isOpen;
  } else {
    state.moveFundsDialog = !state.moveFundsDialog;
  }
}

export function toggleSetRewardsDialog(state, isOpen) {
  if (typeof isOpen === "boolean") {
    state.setRewardsDialog = isOpen;
  } else {
    state.setRewardsDialog = !state.setRewardsDialog;
  }
}

export function togglePayoutDialog(state, isOpen) {
  if (typeof isOpen === "boolean") {
    state.payoutDialog = isOpen;
  } else {
    state.payoutDialog = !state.payoutDialog;
  }
}

export function toggleLockTokensDialog(state, isOpen) {
  if (typeof isOpen === "boolean") {
    state.lockTokensDialog = isOpen;
  } else {
    state.lockTokensDialog = !state.lockTokensDialog;
  }
}

export function toggleStartPayoutDialog(state, isOpen) {
  if (typeof isOpen === "boolean") {
    state.startPayoutDialog = isOpen;
  } else {
    state.startPayoutDialog = !state.startPayoutDialog;
  }
}

export function setSelectedPayout(state, { payout }) {
  state.selectedPayout = payout;
}

export function addRewardPotToken(state, { token, balance, name, symbol }) {
  state.rewardPotTokens.push({
    token,
    balance,
    name,
    symbol
  });
}

export function addNonRewardPotToken(state, { token, balance, symbol }) {
  state.nonRewardPotTokens.push({
    token,
    balance,
    symbol
  });
}

export function clearRewardPotTokens(state) {
  state.rewardPotTokens = [];
}

export function clearRewardPayouts(state) {
  state.rewardPayouts = [];
}

export function clearNonRewardPotTokens(state) {
  state.nonRewardPotTokens = [];
}

export function addDomain(state, { domain }) {
  state.domains.push(domain);
}

export function clearDomains(state) {
  state.domains = [];
}

export function setRewardPercentage(state, { rewardPercentage }) {
  state.rewardPercentage = rewardPercentage;
}

export function setColonyAddress(state, { address }) {
  state.colonyAddress = address;
}

export function addRewardPayoutInfo(state, { active, payoutId, payoutInfo }) {
  state.rewardPayouts.push({
    payoutId,
    ...payoutInfo,
    active
  });
}

export function setCurrentLock(state, { totalLockId, userLockId }) {
  state.totalLockId = totalLockId;
  state.userLockId = userLockId;
}
