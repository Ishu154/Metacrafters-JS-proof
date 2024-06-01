/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftWallet = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,symbol,element,planet) {
    let NFT = {
        name:name,
        symbol:symbol,
        element:element,
        planet:planet
    }
    nftWallet.push(NFT);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < nftWallet.length; i++){
        console.log("\n\n__________ ZODIAC SIGNS __________\n\n" );
        console.log("Name: " + nftWallet[i].name);
        console.log("Symbol: " + nftWallet[i].symbol);
        console.log("Element: " + nftWallet[i].element);
        console.log("Planet: " + nftWallet[i].planet);
        console.log("\n\n_________________&&&_______________\n" );
    }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
    console.log("Total NFTs in wallet: " + nftWallet.length);

}

// call your functions below this line
mintNFT("Aries", "Ram", "Fire", "Mars");
mintNFT("Taurus", "Bull", "Earth", "Venus");
mintNFT("Leo", "Lion", "Fire", "Sun");
mintNFT("Piesces", "Fish", "Water", "Venus");

listNFTs();
getTotalSupply();
