export const state = () => ({
  pins: [
    {
      id: 1,
      status: 'processing',
    },
    {
      id: 2,
      status: 'sent',
    },
    {
      id: 3,
      status: 'processing',
    },
    {
      id: 4,
      status: 'processing',
    },
    {
      id: 6,
      status: 'delivered',
    },
    {
      id: 7,
      status: 'processing',
    },
    {
      id: 8,
      status: 'processing',
    },
    {
      id: 9,
      status: 'processing',
    },
    {
      id: 10,
      status: 'processing',
    },
    {
      id: 11,
      status: 'processing',
    },
    {
      id: 12,
      status: 'processing',
    },
    {
      id: 13,
      status: 'processing',
    },
    {
      id: 14,
      status: 'processing',
    },
    {
      id: 15,
      status: 'processing',
    },
    {
      id: 16,
      status: 'processing',
    },
    {
      id: 17,
      status: 'processing',
    },
    {
      id: 18,
      status: 'processing',
    },
    {
      id: 19,
      status: 'processing',
    },
  ],
})

export const getters = {
  get_pins(state) {
    return state.pins
  },
}
