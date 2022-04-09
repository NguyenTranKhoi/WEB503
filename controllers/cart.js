import Cart from '../models/cart'

export const listcart = async (req, res) => {
    try {
        const ListCart = await Cart.find().exec()
        res.json(ListCart)
    } catch (error) {

    }
}
export const addcart = async (req, res) => {
    try {
        const AddCart = await new Cart(req.body).save()
        res.json(AddCart)
    } catch (error) {

    }
}
export const listcarts = async (req, res) => {
    try {
        const user = await Cart.find({ user: req.params.user, "order": null }).exec()
        res.json(user)
    } catch (error) {

    }
}
export const removecart = async (req, res) => {
    try {
        const remove = await Cart.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(remove)
    } catch (error) {

    }
}