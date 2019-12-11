import shop from '../../api/shop'

// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('setProducts', products)
        })
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.all = products
    },

    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    },
    addProductInventory(state, { id, quantity }) {
        const product = state.all.find(product => product.id === id)
        product.inventory += quantity
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}