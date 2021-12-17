async function main() {
    // We get the contract to deploy
    const Message = await ethers.getContractFactory("Message");
    const message = await Message.deploy('Hello world');
  
    console.log("MyMessagingContract deployed to:", message.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });