
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Blogs {
    struct Blog {
        string BlogName;
        address Author; // Author is the address of the person calling the function
        string Content;
    }

    mapping(string => Blog) public BlogDetails; // Mapping with BlogName as the unique key
    string[] private blogNames; // Array to keep track of all blog names

    // Add a new blog
    function AddBlogs(
        string memory _BlogName,
        string memory _Content
    ) public {
        require(bytes(_BlogName).length > 0, "Blog name cannot be empty");
        require(bytes(_Content).length > 0, "Content cannot be empty");
        require(
            bytes(BlogDetails[_BlogName].BlogName).length == 0,
            "A blog with this name already exists"
        );

        BlogDetails[_BlogName] = Blog(_BlogName, msg.sender, _Content);
        blogNames.push(_BlogName); // Track the blog name
    }

    // Get all blogs
    function GetAllBlogs() public view returns (Blog[] memory) {
        Blog[] memory blogs = new Blog[](blogNames.length);
        for (uint256 i = 0; i < blogNames.length; i++) {
            blogs[i] = BlogDetails[blogNames[i]];
        }
        return blogs;
    }

    // Get a specific blog by its name
    function GetBlog(string memory _BlogName) public view returns (Blog memory) {
        require(
            bytes(BlogDetails[_BlogName].BlogName).length > 0,
            "Blog does not exist"
        );
        return BlogDetails[_BlogName];
    }
}


