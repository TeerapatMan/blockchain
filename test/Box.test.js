// test/Box.test.js

const { accounts, contract } = require("@openzeppelin/test-environment");
const { expect } = require("chai");

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

const Box = contract.fromArtifact("Box");

describe("Box", function() {
  const [owner, other] = accounts;

  // Use large integers ('big numbers')
  const value = new BN("42");

  beforeEach(async function() {
    this.contract = await Box.new({ from: owner });
  });

  it("retrieve returns a value previously stored", async function() {
    await this.contract.store(value, { from: owner });

    // Use large integer comparisons
    expect(await this.contract.retrieve()).to.be.bignumber.equal(value);
  });

  it("store emits an event", async function() {
    const receipt = await this.contract.store(value, { from: owner });

    // Test that a ValueChanged event was emitted with the new value
    expectEvent(receipt, "ValueChanged", { newValue: value });
  });

  it("non owner cannot store a value", async function() {
    // Test a transaction reverts
    await expectRevert(
      this.contract.store(value, { from: other }),
      "Ownable: caller is not the owner"
    );
  });
});
