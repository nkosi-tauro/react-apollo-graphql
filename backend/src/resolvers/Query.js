const {forwardTo} = require('prisma-binding')

const Query = {
    items : forwardTo('db')
    // async items(parent, agrs, ctx, info){
    //     const items = await ctx.db.query.items();
    //     return items;
    // }
    
};

module.exports = Query;
