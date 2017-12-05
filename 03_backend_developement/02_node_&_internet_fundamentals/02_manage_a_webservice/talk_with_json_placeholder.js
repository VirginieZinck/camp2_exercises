const request = require("request");


function fetchPosts(callback) {

  request.get("http://jsonplaceholder.typicode.com/posts", function (error, response, body) {
    callback(body);
  });
}

function fetchPostByUser(userId, callback) {
  request.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`, function (error, response, body) {
    callback(body);
  });
}

function fetchPost(id, callback) {
  request.get(`http://jsonplaceholder.typicode.com/posts/${id}`, function (error, response, body) {
    callback(body);
  });
}

function fetchUsers(callback) {
  request.get("http://jsonplaceholder.typicode.com/users", function (error, response, body) {
    callback(body);
  });
}

function fetchUser(userId, callback) {
  request.get(`http://jsonplaceholder.typicode.com/users/${userId}`, function (error, response, body) {
    callback(body);
  });
}

function fetchComments(callback) {
  request.get("http://jsonplaceholder.typicode.com/comments", function (error, response, body) {
    callback(body);
  });
}

function fetchCommentsByPost(postId, callback) {
  request.get(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`, function (error, response, body) {
    callback(body);
  });
}

function publishPost(userId, title, body, callback) {
  const post = {
    userId: userId,
    title: title,
    body: body
  };

  request.post(
    {
      url:"http://jsonplaceholder.typicode.com/posts",
      form:post
    },
    function (error, response, body) {
      callback(body);
    }
  );
}

function publishComment(postId, name, email, body, callback) {

  const post = {
    postId: postId,
    name: name,
    email: email,
    body: body
  };

  request.post(
    {
      url:"http://jsonplaceholder.typicode.com/comments",
      form:post
    },
    function (error, response, body) {
      callback(body);
    }
  );
}

function updatePostTitle(postId, newTitle, callback) {

  request.put(
    {
      url:`http://jsonplaceholder.typicode.com/posts/${postId}`,
      form:{
        id: postId,
        title: newTitle
      }
    },
    function (error, response, body) {
      callback(body);
    }
  );
}

function updatePostBody(postId, newBody, callback) {

  request.put(
    {
      url:`http://jsonplaceholder.typicode.com/posts/${postId}`,
      form:{
        body: newBody
      }
    },
    function (error, response, body) {
      callback(body);
    }
  );
}

function updatePost(postId, newTitle, newBody, callback) {
  request.put(
    {
      url:`http://jsonplaceholder.typicode.com/posts/${postId}`,
      form:{
        title: newTitle,
        body: newBody
      }
    },
    function (error, response, body) {
      callback(body);
    }
  );
}


function displayResult(body) {
  console.log("This is the result :",body);
}

function displayError(error) {
  console.log("Error!! =>",error);
}

updatePost(1, "newTitle","newbody",displayResult);

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
};
