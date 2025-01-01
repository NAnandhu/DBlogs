// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Blogs{
    struct Blog{
    string BlogName;
    string Cateogry;
    string Location;
    string Date;
    string Blog;
    }
    
 mapping (uint256=>Blog) public BlogDetails;

   function AddBlogs(uint _id,
   string memory _BlogName,
   string memory _Cateogry ,
   string memory _Location, 
   string memory _Date, 
   string memory _Blog) public {
    BlogDetails[_id]=Blog(_BlogName,_Cateogry,_Location,_Date,_Blog);


   }

}