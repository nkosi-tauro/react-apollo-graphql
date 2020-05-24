const Mutations = {
    async createItem(parent, args, ctx, info){
        //TODO add authentication
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        return item;
    }
  
};

module.exports = Mutations;
