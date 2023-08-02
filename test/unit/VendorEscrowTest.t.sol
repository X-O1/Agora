// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {VendoraEscrow} from "../../src/VendoraEscrow.sol";
import {DeployVendoraEscrow} from "../../script/DeployVendoraEscrow.s.sol";

contract VendoraEscrowTest is Test {
    VendoraEscrow vendoraEscrow;

    address INITIATOR = makeAddr("user");
    address FINALIZER = makeAddr("user2");
    address USER3 = makeAddr("user3");
    address USER4 = makeAddr("user4");

    function setUp() external {
        DeployVendoraEscrow deployVendoraEscrow = new DeployVendoraEscrow();
        vendoraEscrow = deployVendoraEscrow.run();
    }

    function testInitiatorCanOnlyBeSetOnce() public {
        vm.prank(INITIATOR);
        vendoraEscrow.setInitiator();
        vm.prank(USER3);
        vm.expectRevert();
        vendoraEscrow.setInitiator();
    }

    function testInitiatorAddressIsSetToMsgSenderAddress() public {
        vm.prank(INITIATOR);
        vendoraEscrow.setInitiator();
        assert(vendoraEscrow.getInitiatorAddress() == INITIATOR);
    }

    function testInitiatorCantBeSetIfTradeIsLive() public {
        vm.prank(INITIATOR);
        vendoraEscrow.setInitiator();
        vm.prank(INITIATOR);
        vendoraEscrow.finalizeTermsAndOpenDeposits();
        vm.prank(USER3);
        vm.expectRevert();
        vendoraEscrow.setInitiator();
    }

    function testFinalizerCanOnlyBeSetOnce() public {
        vm.prank(INITIATOR);
        vendoraEscrow.setInitiator();
        vm.prank(INITIATOR);
        vendoraEscrow.finalizeTermsAndOpenDeposits();
        vm.prank(FINALIZER);
        vendoraEscrow.setFinalizer();
        vm.prank(USER3);
        vm.expectRevert();
        vendoraEscrow.setFinalizer();
    }

    function testFinalizerAddressIsSetToMsgSenderAddress() public {
        vm.prank(INITIATOR);
        vendoraEscrow.setInitiator();
        vm.prank(INITIATOR);
        vendoraEscrow.finalizeTermsAndOpenDeposits();
        vm.prank(FINALIZER);
        vendoraEscrow.setFinalizer();
        assert(vendoraEscrow.getFinalizerAddress() == FINALIZER);
    }

    function testFinalizerCanOnlyBeSetAfterInitiatorIsSet() public {
        vm.prank(FINALIZER);
        vm.expectRevert();
        vendoraEscrow.setFinalizer();
    }
    
}
