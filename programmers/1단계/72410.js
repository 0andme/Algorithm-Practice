function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.match(/[\w-\.]/g).join("");
  new_id = new_id.replace(/\.{2,}/g, ".");
  if (new_id[0] === ".") {
    new_id = new_id.slice(1);
  }
  if (new_id[new_id.length - 1] === ".") {
    new_id = new_id.slice(0, new_id.length - 1);
  }
  if (new_id === "") {
    new_id = "a";
  }
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }
  if (new_id.length <= 2) {
    let lastChar = new_id[new_id.length - 1];
    while (new_id.length < 3) {
      new_id += lastChar;
    }
  }

  return new_id;
}
