const post = require('../models/post');
const asyncHandler = require('express-async-handler');

//@route GET /api/post
//@desc  fetch all post
//access  public

exports.getPost = asyncHandler (async (req, res, next) => {
    
        const posts = await post.find()
        res.status(200).json({success: true, posts})
   
 
})

//@route POST /api/post
//@desc  create a post
//access  public

exports.postComment = asyncHandler(async (req, res, next) => {
    const newPost = new post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json({success: true, savedPost})

});

exports.getComment = asyncHandler (async(req, res, next) => {
    const comment= await post.findById(req.params.postId)
    res.status(200).json({success: true, comment})
})

// @route Put/api/products/:id
//@desc update a products
//@access private

exports.putComment = asyncHandler(async (req, res, next) =>{
    const updatedComment = await post.findByIdAndUpdate(req.params.postdId, {$set:req.body}, {new:true})
    res.status(200).json({success: true, updatedComment})
});

// @route Delete/api/products/:id
//@desc Delete a products
//@access private

exports.deleteComment = asyncHandler(async (req, res, next) => {
     await post.findByIdAndDelete(req.params.postId)
     res.status(200).json({success: true, message: 'Comment Deleted'})
});