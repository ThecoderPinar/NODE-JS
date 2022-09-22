const postList = [
    { postName: "Post 1", postDetail: "Post 1 Detail" },
    { postName: "Post 2", postDetail: "Post 2 Detail" },
    { postName: "Post 3", postDetail: "Post 3 Detail" },
  ];
  
  function addPost(value) {
    return new Promise((resolve, reject) => {
      if (value) {
        postList.push(value);
        resolve("___\nyeni kitap eklendi\n___");
      } else {
        reject("yeni kitap eklenemedi");
      }
    });
  }
  function listPost() {
    postList.map((value) => {
      console.log("%s => %s", value.postName, value.postDetail);
    });
  }
  
  async function postAddAndList(newPost) {
    try {
      const addStatus = await addPost(newPost);
      console.log(addStatus);
      listPost();
    } catch (err) {
      console.log(err);
    }
  }
  listPost();
  postAddAndList({
    postName: "Post 4",
    postDetail: "Post 4 Detail",
  });