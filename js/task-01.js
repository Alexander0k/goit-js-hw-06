const totalItem = document.querySelectorAll(".item");
console.log(`Number of categories:${totalItem.length}`);

const itemArray = [...totalItem]
  .map(
    item => `Category: ${item.children[0].textContent}
Elements: ${item.children[1].children.length}`
  )
  .join("\n");
console.log(itemArray);