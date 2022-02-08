//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import 'openzeppelin-solidity/contracts/access/Ownable.sol';

contract Replenisher is Ownable {
  address payable receiver;
  uint256 replenishmentId = 0;
  uint256 replenishFee;
  event Replenished(uint256 replenishmentId, uint256 NFTID);

  constructor(address payable _receiver, uint256 _replenishFee) {
    receiver = _receiver;
    replenishFee = _replenishFee;
  }

  function setFee(uint256 newFee) public onlyOwner {
    replenishFee = newFee;
  }

  function replenish(uint256 NFTID) external payable {
    require(msg.value >= replenishFee, "Not enough funds to replenish");
    replenishmentId++;
    receiver.transfer(msg.value);
    emit Replenished(replenishmentId, NFTID);
  }
}
