import userModel from "../models/userModel.js";
import ProductModel from "../models/ProductModel.js";
import blogModel from "../models/blogModel.js"
import { calculatePercentage,getChartData,getInventories } from "../utils/features.js";

export const statController = async(req,res)=>{
 try{
    let stats={};
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const thisMonth = {
       start: new Date(today.getFullYear(), today.getMonth(), 1),
       end: today,
    };
    const lastMonth = {
      start: new Date(today.getFullYear(), today.getMonth() - 1, 1),
      end: new Date(today.getFullYear(), today.getMonth(), 0),
    };
    const thisMonthProductsPromise = ProductModel.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthProductsPromise = ProductModel.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });

    const thisMonthUsersPromise = userModel.find({
      createdAt: {
        $gte: thisMonth.start,
        $lte: thisMonth.end,
      },
    });

    const lastMonthUsersPromise = userModel.find({
      createdAt: {
        $gte: lastMonth.start,
        $lte: lastMonth.end,
      },
    });
 // execution of this start
    const [thisMonthProducts, thisMonthUsers, lastMonthProducts,
       lastMonthUsers, productsCount,
       usersCount,categories]
        = await Promise.all([
      thisMonthProductsPromise,
      thisMonthUsersPromise,
      lastMonthProductsPromise,
      lastMonthUsersPromise,
      ProductModel.countDocuments(),
      userModel.countDocuments(),  
      ProductModel.distinct("category")]);
     //--------------------
      const changePercent = {
        product: calculatePercentage(thisMonthProducts.length, lastMonthProducts.length),
        user: calculatePercentage(thisMonthUsers.length, lastMonthUsers.length)
      }
      const count = {
        product: productsCount,
        user: usersCount,
      }
      const categoryCount = await getInventories({
        categories,
        productsCount,
    });

     stats={
      categoryCount,
      changePercent,
      count, 
     }
    
     return res.status(200).json({
      success:true,
      message:"This is your stats",
      stats,
      

     })
 
  }catch(error){
        return res.status(500).json({
        success:true,
        message:"Error in getting the stats"
      })
  }
}

export const barController = async (req, res) => {
  try{
  let charts;
      const today = new Date();
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
      const sixMonthProductPromise = ProductModel.find({
          createdAt: {
              $gte: sixMonthsAgo,
              $lte: today,
          },
      }).select("createdAt");
      const sixMonthUsersPromise = userModel.find({
          createdAt: {
              $gte: sixMonthsAgo,
              $lte: today,
          },
      }).select("createdAt");
      
      const [products, users] = await Promise.all([
          sixMonthProductPromise,
          sixMonthUsersPromise,
          
      ]);
      const productCounts = getChartData({ length: 6, today, docArr: products });
      const usersCounts = getChartData({ length: 6, today, docArr: users });
         
      charts = {
          users: usersCounts,
          products: productCounts,
          
      };
    return res.status(200).json({
      success: true,
      charts,
  });

}catch(error){
    return res.status(500).json({
    success:true,
    message:"Error in getting the stats"
  })

}

}




export const lineController =async(req,res)=>{
 try{
  let charts;
      const today = new Date();
  
      const twelveMonthsAgo = new Date();
      twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 6);
  
      const baseQuery = {
        createdAt: {
          $gte: twelveMonthsAgo,
          $lte: today,
        },
      };
  
      const [users] = await Promise.all([
        userModel.find(baseQuery).select("createdAt"),
      ]);
      const usersCounts = getChartData({ length: 6, today, docArr: users });
    
      charts = {
        users: usersCounts,
      
      };
    return res.status(200).json({
      success: true,
      charts,
    });

}
catch(error){
    return res.status(500).json({
    success:true,
    message:"Error in getting the stats"
  })
}
}