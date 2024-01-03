
// authorize.mixin.js
module.exports = {
    methods: {
        globalErrorHandler(ctx, error) {
            // ctx.meta.$statusCode = 502;
            // console.warn(" \n \n Error is => \n \n");
            // console.error(error);
            // console.warn(" \n \n Error Data is => \n \n");
            // console.error(error.data);
            // console.warn(" \n \n Error Code is => \n \n");
            // console.error(error.code);
            // console.warn(" \n \n Error Type is => \n \n");
            // console.error(error.type);
            // console.warn(" \n \n Error Message is => \n \n");
            // console.error(error.message);

            throw new Error("Oops! Our sincerest apologies—an internal server error occurred. Please try again later. Thank you for your patience!");
        },
    }
}