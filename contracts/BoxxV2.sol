// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import {Boxx} from "./Boxx.sol";

/// @title BoxxV2
/// @notice An improved box with objects inside.
/// @custom:oz-upgrades-from Box
contract BoxxV2 is Boxx{
    /*//////////////////////////////////////////////////////////////
                                FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /// @notice Add an object to the box.
    function addObject() external {
        numberOfObjects += 1;
    }

    /// @notice Returns the box version.
    function boxVersion() external pure returns (uint256) {
        return 2;
    }
}