const {expect} = require('chai');

describe("My Metamask and web3 Contract connection", async () => {
    before(async () => {
        Message = await ethers.getContractFactory("Message");
        message = await Message.deploy('Hello world');

        await message.deployed();
    })


    it("Initial return Hello world", async () => {
        expect((await message.readMessage()).toString()).to.equal("Hello world")
    })

    it("Retrieve returns the previous value that was stored", async () => {
        await message.updateMessage("Learning metamask");
        expect((await message.readMessage()).toString()).to.equal("Learning metamask")
    })
})