const nftName = "ScaryEye Egg";
const description = "ScaryEye, SoScaryEyes";
const hiddenImgUrl = "ipfs://QmavebHyfeat5rtT1RJko3pDsF4pYmd9EWhxze8rZNv2a9";
const totalNum = 100;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}