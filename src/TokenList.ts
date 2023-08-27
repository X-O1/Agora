type Erc721Option = {
    imgSrc: string;
    name: string;
    symbol: string;
    address: string;
}
type Erc1155Option = {
    imgSrc: string;
    name: string;
    symbol: string;
    address: string;
}
type Erc20Option = {
    imgSrc: string;
    name: string;
    symbol: string;
    address: string;
}

const defaultErc721s: Erc721Option[] = [
    {
        imgSrc: "./images/erc721-project-images/rareshipLogo.png",
        name: "Rareships",
        symbol: "RSHPS",
        address: "0xe170b5b0d507b3e0ce3d51c043175e0a39f78b9f"
    },
    {
        imgSrc: "./images/erc721-project-images/rareshipLogo.png",
        name: "Rareships",
        symbol: "RSHPS",
        address: "0xe170b5b0d507b3e0ce3d51c043175e0a39f78b9f"
    }
];
const defaultErc1155s: Erc1155Option[] = [
    {
        imgSrc: "./images/erc155-project-images/bloodcrystal.png",
        name: "Blood Crytals",
        symbol: "BLOOD",
        address: "0xe170b5b0d507b3e0ce3d51c043175e0a39f78b9f"
    }
];
const defaultErc20s: Erc20Option[] = [
    {
        imgSrc: "./images/erc20-project-images/linktokenimage.png",
        name: "Chainlink",
        symbol: "LINK",
        address: "0xe170b5b0d507b3e0ce3d51c043175e0a39f78b9f"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const tokenMenuPopup = document.querySelector(".token-menu-popup") as HTMLDivElement;

    defaultErc721s.forEach((option) => {
        const tokenOptionDiv = document.createElement("div") as HTMLDivElement;
        tokenOptionDiv.classList.add("token-option");
        tokenMenuPopup.appendChild(tokenOptionDiv);

        const optionImageDiv = document.createElement("div") as HTMLDivElement;
        optionImageDiv.classList.add("option-image");
        tokenOptionDiv.appendChild(optionImageDiv);

        const optionImage = document.createElement("img") as HTMLImageElement;
        optionImage.src = option.imgSrc;
        optionImageDiv.appendChild(optionImage);

        const optionDetailsDiv = document.createElement("div") as HTMLDivElement;
        optionDetailsDiv.classList.add("token-details");
        tokenOptionDiv.appendChild(optionDetailsDiv);

        const optionName = document.createElement("div") as HTMLDivElement;
        optionName.classList.add("option-name");
        optionName.innerHTML = option.name;

        const optionSymbol = document.createElement("div") as HTMLDivElement;
        optionSymbol.classList.add("option-symbol");
        optionSymbol.innerHTML = option.symbol;

        optionDetailsDiv.appendChild(optionName);
        optionDetailsDiv.appendChild(optionSymbol);

        const optionOrderDetailsDiv = document.createElement("div") as HTMLDivElement;
        optionOrderDetailsDiv.classList.add("erc721-choice-details");
        tokenOptionDiv.appendChild(optionOrderDetailsDiv);
    
        const optionTokenId = document.createElement("input") as HTMLInputElement;
        optionTokenId.type = "text";
        optionTokenId.placeholder = "Token ID";
        optionTokenId.classList.add("option-token-id");
    
        const addAssetButton = document.createElement("button") as HTMLButtonElement;
        addAssetButton.innerHTML = "Add";
        addAssetButton.classList.add("add-asset");
    
        optionOrderDetailsDiv.appendChild(optionTokenId);
        optionOrderDetailsDiv.appendChild(addAssetButton);

    })


    defaultErc1155s.forEach((option) => {
        const tokenOptionDiv = document.createElement("div") as HTMLDivElement;
        tokenOptionDiv.classList.add("token-option");
        tokenMenuPopup.appendChild(tokenOptionDiv);

        const optionImageDiv = document.createElement("div") as HTMLDivElement;
        optionImageDiv.classList.add("option-image");
        tokenOptionDiv.appendChild(optionImageDiv);

        const optionImage = document.createElement("img") as HTMLImageElement;
        optionImage.src = option.imgSrc;
        optionImageDiv.appendChild(optionImage);

        const optionDetailsDiv = document.createElement("div") as HTMLDivElement;
        optionDetailsDiv.classList.add("token-details");
        tokenOptionDiv.appendChild(optionDetailsDiv);

        const optionName = document.createElement("div") as HTMLDivElement;
        optionName.classList.add("option-name");
        optionName.innerHTML = option.name;

        const optionSymbol = document.createElement("div") as HTMLDivElement;
        optionSymbol.classList.add("option-symbol");
        optionSymbol.innerHTML = option.symbol;

        optionDetailsDiv.appendChild(optionName);
        optionDetailsDiv.appendChild(optionSymbol);

        const optionOrderDetailsDiv = document.createElement("div") as HTMLDivElement;
        optionOrderDetailsDiv.classList.add("erc721-choice-details");
        tokenOptionDiv.appendChild(optionOrderDetailsDiv);
    
        const optionTokenId = document.createElement("input") as HTMLInputElement;
        optionTokenId.type = "text";
        optionTokenId.placeholder = "Token ID";

        optionTokenId.classList.add("option-token-id");

        const optionAmount = document.createElement("input") as HTMLInputElement;
        optionAmount.placeholder = "Amount";
        optionAmount.type = "text";
        optionAmount.classList.add("option-amount");
    
        const addAssetButton = document.createElement("button") as HTMLButtonElement;
        addAssetButton.innerHTML = "Add";
        addAssetButton.classList.add("add-asset");
    
        optionOrderDetailsDiv.appendChild(optionTokenId);
        optionOrderDetailsDiv.appendChild(optionAmount);
        optionOrderDetailsDiv.appendChild(addAssetButton);

    })

    defaultErc20s.forEach((option) => {
        const tokenOptionDiv = document.createElement("div") as HTMLDivElement;
        tokenOptionDiv.classList.add("token-option");
        tokenMenuPopup.appendChild(tokenOptionDiv);

        const optionImageDiv = document.createElement("div") as HTMLDivElement;
        optionImageDiv.classList.add("option-image");
        tokenOptionDiv.appendChild(optionImageDiv);

        const optionImage = document.createElement("img") as HTMLImageElement;
        optionImage.src = option.imgSrc;
        optionImageDiv.appendChild(optionImage);

        const optionDetailsDiv = document.createElement("div") as HTMLDivElement;
        optionDetailsDiv.classList.add("token-details");
        tokenOptionDiv.appendChild(optionDetailsDiv);

        const optionName = document.createElement("div") as HTMLDivElement;
        optionName.classList.add("option-name");
        optionName.innerHTML = option.name;

        const optionSymbol = document.createElement("div") as HTMLDivElement;
        optionSymbol.classList.add("option-symbol");
        optionSymbol.innerHTML = option.symbol;

        optionDetailsDiv.appendChild(optionName);
        optionDetailsDiv.appendChild(optionSymbol);

        const optionOrderDetailsDiv = document.createElement("div") as HTMLDivElement;
        optionOrderDetailsDiv.classList.add("erc721-choice-details");
        tokenOptionDiv.appendChild(optionOrderDetailsDiv);
    
        const optionAmount = document.createElement("input") as HTMLInputElement;
        optionAmount.type = "text";
        optionAmount.placeholder = "Amount";
        optionAmount.classList.add("option-amount");
    
        const addAssetButton = document.createElement("button") as HTMLButtonElement;
        addAssetButton.innerHTML = "Add";
        addAssetButton.classList.add("add-asset");
    
        optionOrderDetailsDiv.appendChild(optionAmount);
        optionOrderDetailsDiv.appendChild(addAssetButton);

    })

})
