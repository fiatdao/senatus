// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.7.1;

import "../interfaces/IComitium.sol";

contract ComitiumMock {
    uint256 private _fdtStaked;
    mapping(address => uint256) private _votingPowerAtTs;
    bool public lockCreatorBalanceHasBeenCalled;
    bool public withdrawHasBeenCalled;

    // votingPowerAtTs returns the voting power (bonus included) + delegated voting power for a user at a point in time
    function votingPowerAtTs(address user, uint256 timestamp) external view returns (uint256){
        return _votingPowerAtTs[user];
    }

    function votingPower(address user) external view returns (uint256) {
        return _votingPowerAtTs[user];
    }

    function fdtStaked() external view returns (uint256) {
        return _fdtStaked;
    }

    function fdtStakedAtTs(uint256 ts) public view returns (uint256) {
        return _fdtStaked;
    }

    function setFDTStaked(uint256 val) public {
        _fdtStaked = val;
    }

    function setVotingPower(address user, uint256 val) public {
        _votingPowerAtTs[user] = val;
    }

    function withdraw(uint256 amount) external {
        withdrawHasBeenCalled = true;
    }
}
