# Blogs dApp

The **Blogs dApp** is a decentralized blogging application that allows users to create, store, and view blogs on the Ethereum blockchain. This repository includes:
1. A Solidity smart contract for managing blogs.
2. A React.js frontend for interacting with the contract.

---

## Features

### Smart Contract Features
- **Add Blogs**: Users can create blogs with a unique name and content.
- **Get All Blogs**: Retrieve all blogs stored on the blockchain.
- **Get Blog**: Fetch a specific blog by its name.

### Frontend Features
- **Create Blog**: User-friendly interface to create and add blogs to the blockchain.
- **View All Blogs**: Display a list of all blogs stored on the blockchain.
- **View Single Blog**: Search for and view a specific blog by name.

---

## Prerequisites

Before starting, ensure you have:
1. [Node.js and npm](https://nodejs.org/) installed.
2. [MetaMask](https://metamask.io/) browser extension.
3. A deployed instance of the **Blogs** smart contract on an Ethereum-compatible network.

---

## Smart Contract Overview

### Contract Structure
The smart contract includes:
1. A `Blog` struct containing:
   - `BlogName` (string): Name of the blog.
   - `Author` (address): Address of the blog creator.
   - `Content` (string): Content of the blog.
2. `AddBlogs` function: Allows users to add new blogs.
3. `GetAllBlogs` function: Returns all blogs stored on the blockchain.
4. `GetBlog` function: Fetches a specific blog by its name.

### Deployment
Deploy the smart contract to an Ethereum-compatible blockchain (e.g., Goerli, Sepolia).

---

## Frontend Setup

### 1. Clone the Repository
```bash
git clone https://github.com/NAnandhu/DBlogs
cd Web3
npm install
npm run dev

You can copy and paste this into your `README.md` file. Let me know if you need any further adjustments!
