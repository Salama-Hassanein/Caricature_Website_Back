const React = require("../../models/user.caricature.react");


const createFavouriteCaricature = async (req, res, next) => {
    try {
        const caricature_id = req.params.caricatureid;
        const user_id = req.params.id;
        const newReact = {
            userId: user_id,
            caricatureId: caricature_id,
            react: true
        };
        const fav = await React.create(newReact);
        if (fav) {
            return res.status(200).send(fav);
        } else {
            return res.status(200).send({ message: "error" });
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createFavouriteCaricature,
}