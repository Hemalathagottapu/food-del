import userModel from "../models/UserModel.js"

//add items to user cart
/*
const addToCart=async(req,res)=>{
    try{
        let userData=await userModel.findById(req.userId);
        let cartData=userData.cartData || {};
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId]+=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to cart"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}
*/
const addToCart = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        let cartData = user.cartData || {};

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.userId, { cartData });

        res.json({ success: true, message: "Added to cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};
//remove items from user cart
const removeFromcart=async(req,res)=>{
    try{
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"removed from cart"})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

//fetch user cart data
// const getCart=async(req,res)=>{
//     try{
//         let userData=await userModel.findById(req.body.userId)
//         let cartData=await userData.cartData
//         res.json({success:true,cartData})
//     }
//     catch(error){
//         console.log(error)
//         res.json({succesfull:false,message:"error"})
//     }
// }
const getCart = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            cartData: user.cartData || {}
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error fetching cart"
        });
    }
};
export {addToCart,removeFromcart,getCart}