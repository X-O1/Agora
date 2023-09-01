import { termErc1155s, termErc20s, termErc721s } from "./FrontEndElements.js";
import {
  ErcDetails,
  wantedErc1155s,
  wantedErc20s,
  wantedErc721s,
  // getTokenListInStorage,
  // setItem,
} from "./TokenMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  createWantedList(wantedErc721s);
  createWantedList(wantedErc1155s);
  createWantedList(wantedErc20s);
});
const createWantedList = async (termTokens: ErcDetails[] | null) => {
  try {
    termTokens?.forEach((token) => {
      const selectedTermAssetDiv: HTMLDivElement =
        document.createElement("div");
      const termAssetImageDiv: HTMLDivElement = document.createElement("div");
      const termAssetImage: HTMLImageElement = document.createElement("img");
      const termAssetSymbol: HTMLDivElement = document.createElement("div");
      const termAssetTokenId: HTMLDivElement = document.createElement("div");
      const termAssetAmount: HTMLDivElement = document.createElement("div");
      const deleteAssetButton: HTMLButtonElement =
        document.createElement("button");

      selectedTermAssetDiv.classList.add("selected-term-asset");
      termAssetImageDiv.classList.add("term-asset-image");
      termAssetSymbol.classList.add("term-asset-symbol");
      termAssetTokenId.classList.add("term-asset-tokenId");
      termAssetAmount.classList.add("term-asset-amount");
      deleteAssetButton.classList.add("delete-asset");

      selectedTermAssetDiv.appendChild(termAssetImageDiv);
      termAssetImageDiv.appendChild(termAssetImage);
      selectedTermAssetDiv.appendChild(termAssetSymbol);

      if (termTokens === wantedErc721s) {
        termErc721s.appendChild(selectedTermAssetDiv);
        selectedTermAssetDiv.appendChild(termAssetTokenId);
        selectedTermAssetDiv.appendChild(deleteAssetButton);
      } else if (termTokens === wantedErc1155s) {
        termErc1155s.appendChild(selectedTermAssetDiv);
        selectedTermAssetDiv.appendChild(termAssetSymbol);
        selectedTermAssetDiv.appendChild(termAssetTokenId);
        selectedTermAssetDiv.appendChild(termAssetAmount);
        selectedTermAssetDiv.appendChild(deleteAssetButton);
      } else if (termTokens === wantedErc20s) {
        termErc20s.appendChild(selectedTermAssetDiv);
        selectedTermAssetDiv.appendChild(termAssetAmount);
        selectedTermAssetDiv.appendChild(deleteAssetButton);
      }

      termAssetImage.src = token.imgSrc;
      termAssetSymbol.innerHTML = token.symbol;
      "amount" in token
        ? (termAssetAmount.innerHTML = `Amt: ${token.amount}`)
        : null;
      "tokenId" in token
        ? (termAssetTokenId.innerHTML = `#${token.tokenId}`)
        : null;

      deleteAssetButton.innerHTML = "Delete";
    });
  } catch (error) {
    error: console.log("Wanted asset list failed to load");
  }
};

export { createWantedList };
