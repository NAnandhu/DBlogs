
// pragma solidity 0.8.28;

// contract Blogs{
//     struct Blog{
//     string BlogName;
//     string Cateogry;
//     string Location;
//     string Date;
//     string Blog;
//     }
    
//  mapping (uint256=>Blog) public BlogDetails;

//    function AddBlogs(uint256 _id,
//    string memory _BlogName,
//    string memory _Cateogry ,
//    string memory _Location, 
//    string memory _Date, 
//    string memory _Blog) public {
//     BlogDetails[_id]=Blog(_BlogName,_Cateogry,_Location,_Date,_Blog);


//    }

// }
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Blogs {
    struct Blog {
        string BlogName;
        string Category;
        string Location;
        string Date;
        string Content;
    }

    mapping(string => Blog) public BlogDetails; // Mapping with BlogName as the unique key
    string[] private blogNames; // Array to keep track of all blog names

    // Add a new blog
    function AddBlogs(
        string memory _BlogName,
        string memory _Category,
        string memory _Location,
        string memory _Date,
        string memory _Content
    ) public {
        require(bytes(_BlogName).length > 0, "BlogName cannot be empty");
        require(bytes(_Category).length > 0, "Category cannot be empty");
        require(bytes(_Location).length > 0, "Location cannot be empty");
        require(bytes(_Date).length > 0, "Date cannot be empty");
        require(bytes(_Content).length > 0, "Content cannot be empty");
        require(bytes(BlogDetails[_BlogName].BlogName).length == 0, "Blog with this name already exists");

        BlogDetails[_BlogName] = Blog(_BlogName, _Category, _Location, _Date, _Content);
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
}
