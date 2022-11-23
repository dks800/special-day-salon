export const service = [
  {
    name: "Threading",
    code: "s1",
    category: [
      {
        name: "Eyebrow",
        categoryCode: "c1",
        serviceCode: "s1",
        prices: [
          {
            code: "n_p",
            name: "Standard",
            price: 40,
          },
          {
            code: "w_p",
            name: "Wax",
            price: 50,
          },
        ],
      },
      {
        name: "Forehead",
        categoryCode: "c2",
        serviceCode: "s1",
        prices: [
          {
            code: "n_p",
            name: "Standard",
            price: 20,
          },
          {
            code: "w_p",
            name: "Wax",
            price: "--",
          },
        ],
      },
      {
        name: "Under Lips",
        categoryCode: "c3",
        serviceCode: "s1",
        prices: [
          {
            code: "n_p",
            name: "Standard",
            price: 20,
          },
          {
            code: "w_p",
            name: "Wax",
            price: "--",
          },
        ],
      },
      {
        name: "Chin",
        categoryCode: "c4",
        serviceCode: "s1",
        prices: [
          {
            code: "n_p",
            name: "Standard",
            price: 20,
          },
          {
            code: "w_p",
            name: "Wax",
            price: 50,
          },
        ],
      },
      {
        name: "Side Locks",
        categoryCode: "c5",
        serviceCode: "s1",
        prices: [
          {
            code: "n_p",
            name: "Standard",
            price: 80,
          },
          {
            code: "w_p",
            name: "Wax",
            price: 100,
          },
        ],
      },
      {
        name: "Full Face",
        categoryCode: "c6",
        serviceCode: "s1",
        prices: [
          {
            code: "n_p",
            name: "Standard",
            price: 150,
          },
          {
            code: "w_p",
            name: "Wax",
            price: 250,
          },
        ],
      },
    ],
  },
  {
    name: "Waxing",
    code: "s2",
    category: [
      {
        name: "Under Arms",
        categoryCode: "c1",
        serviceCode: "s2",
        prices: [
          {
            code: "s_p",
            name: "Sugar",
            price: 80,
          },
          {
            code: "r_p",
            name: "Rica",
            price: 99,
          },
        ],
      },
      {
        name: "Full Hand",
        categoryCode: "c2",
        serviceCode: "s2",
        prices: [
          {
            code: "s_p",
            name: "Sugar",
            price: 150,
          },
          {
            code: "r_p",
            name: "Rica",
            price: 199,
          },
        ],
      },
      {
        name: "Half Legs",
        categoryCode: "c3",
        serviceCode: "s2",
        prices: [
          {
            code: "s_p",
            name: "Sugar",
            price: 150,
          },
          {
            code: "r_p",
            name: "Rica",
            price: 199,
          },
        ],
      },
      {
        name: "Full Legs",
        categoryCode: "c4",
        serviceCode: "s2",
        prices: [
          {
            code: "s_p",
            name: "Sugar",
            price: 299,
          },
          {
            code: "r_p",
            name: "Rica",
            price: 399,
          },
        ],
      },
      {
        name: "Full Back",
        categoryCode: "c5",
        serviceCode: "s2",
        prices: [
          {
            code: "s_p",
            name: "Sugar",
            price: 299,
          },
          {
            code: "r_p",
            name: "Rica",
            price: 399,
          },
        ],
      },
      {
        name: "Full Body",
        categoryCode: "c6",
        serviceCode: "s2",
        prices: [
          {
            code: "n_p",
            name: "Standard",
            price: 1199,
          },
          {
            code: "r_p",
            name: "Rica",
            price: 1499,
          },
        ],
      },
    ],
  },
];

export const salesSummary = [
  {
    phoneNumber: 9727622278,
    customerName: "Deepak",
    serviceDetails: [
      {
        serviceCode: "s1",
        categoryCode: "c1",
        priceCode: "n_p",
      },
      {
        serviceCode: "s2",
        categoryCode: "c3",
        priceCode: "w_p",
      },
    ],
    netTotal: 1250,
    discount: 50,
    grandTotal: 1200,
    date: "23/11/2022 12:44:22",
  },
  {
    phoneNumber: 9865488815,
    customerName: "Jaydeep",
    serviceDetails: [
      {
        serviceCode: "s1",
        categoryCode: "c1",
        priceCode: "n_p",
      },
    ],
    netTotal: 1360,
    discount: 60,
    grandTotal: 1300,
    date: "22/11/2022 21:35:22",
  },
  {
    phoneNumber: 9852366625,
    customerName: "Gaurav",
    serviceDetails: [
      {
        serviceCode: "s2",
        categoryCode: "c3",
        priceCode: "n_p",
      },
    ],
    netTotal: 630,
    discount: 30,
    grandTotal: 600,
    date: "21/11/2022 10:05:22",
  },
  {
    phoneNumber: 8562111145,
    customerName: "Raja Hindustani",
    serviceDetails: [
      {
        serviceCode: "s1",
        categoryCode: "c3",
        priceCode: "w_p",
      },
      {
        serviceCode: "s1",
        categoryCode: "c5",
        priceCode: "n_p",
      },
    ],
    netTotal: 12650,
    discount: 50,
    grandTotal: 12600,
    date: "20/11/2022 09:45:22",
  },
];
