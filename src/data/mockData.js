// Datos Mockup para cuando la API no está disponible
// Mantienen la misma estructura que los datos reales de la API

export const mockData = {
  // Datos para el endpoint /api/totalProductsTypeGrinding
  totalProductsTypeGrinding: [
    {
      name: "Grano Entero",
      totalProducts: 15
    },
    {
      name: "Molienda Fina",
      totalProducts: 8
    },
    {
      name: "Molienda Media",
      totalProducts: 12
    },
    {
      name: "Molienda Gruesa",
      totalProducts: 6
    },
    {
      name: "Molienda Extra Fina",
      totalProducts: 4
    }
  ],

  // Datos para el endpoint /api/totalProductGrames
  totalProductGrames: [
    {
      grames: 250,
      totalProducts: 25
    },
    {
      grames: 500,
      totalProducts: 30
    },
    {
      grames: 1000,
      totalProducts: 20
    }
  ],

  // Datos para el endpoint /api/totalProducts
  totalProducts: {
    totalProductsActives: 45
  },

  // Datos para el endpoint /api/totalUsers
  totalUsers: {
    totalUsers: 128
  },

  // Datos para el endpoint /api/totalRolesUser
  totalRolesUser: {
    totalRoles: 3
  },

  // Datos para el endpoint /api/lastProductCreated
  lastProductCreated: {
    id: 1,
    name: "Café Especial Colombiano",
    description: "Un café excepcional de las montañas de Colombia con notas de cacao y frutos rojos.",
    images_products: [
      {
        id: 1,
        path: "cafe-colombiano.jpg"
      }
    ],
    products_grames: [
      {
        id: 1,
        grames: 250
      },
      {
        id: 2,
        grames: 500
      },
      {
        id: 3,
        grames: 1000
      }
    ],
    type_grindings: [
      {
        id: 1,
        name: "Grano Entero"
      },
      {
        id: 2,
        name: "Molienda Media"
      },
      {
        id: 3,
        name: "Molienda Fina"
      }
    ]
  },

  // Datos para el endpoint /api/lastUserCreated
  lastUserCreated: {
    id: 1,
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@email.com",
    image: "user-default.jpg",
    roles: {
      id: 2,
      name: "Cliente"
    },
    directions: [
      {
        id: 1,
        street: "Av. Siempre Viva 123",
        city: "Springfield",
        country: "Argentina",
        default: true
      }
    ]
  },

  // Datos para el endpoint /api/productsActives
  productsActives: [
    {
      id: 1,
      name: "Café Especial Colombiano",
      rating: 4.8,
      description: "Un café excepcional de las montañas de Colombia con notas de cacao y frutos rojos.",
      type_grindings: [
        { id: 1, name: "Grano Entero" },
        { id: 2, name: "Molienda Media" }
      ],
      products_grames: [
        { id: 1, grames: 250 },
        { id: 2, grames: 500 }
      ]
    },
    {
      id: 2,
      name: "Café Orgánico Etiopía",
      rating: 4.6,
      description: "Café orgánico certificado con notas florales y cítricas.",
      type_grindings: [
        { id: 2, name: "Molienda Fina" },
        { id: 3, name: "Molienda Media" }
      ],
      products_grames: [
        { id: 2, grames: 500 },
        { id: 3, grames: 1000 }
      ]
    },
    {
      id: 3,
      name: "Blend Especial House",
      rating: 4.9,
      description: "Nuestra mezcla exclusiva perfecta para espresso.",
      type_grindings: [
        { id: 1, name: "Grano Entero" },
        { id: 4, name: "Molienda Gruesa" }
      ],
      products_grames: [
        { id: 1, grames: 250 },
        { id: 2, grames: 500 },
        { id: 3, grames: 1000 }
      ]
    },
    {
      id: 4,
      name: "Café Descafeinado Suizo",
      rating: 4.5,
      description: "Proceso suizo de descafeinado manteniendo todo el sabor.",
      type_grindings: [
        { id: 2, name: "Molienda Fina" },
        { id: 3, name: "Molienda Media" }
      ],
      products_grames: [
        { id: 2, grames: 500 }
      ]
    },
    {
      id: 5,
      name: "Café Single Origin Guatemala",
      rating: 4.7,
      description: "Café de origen único con notas de chocolate y nuez.",
      type_grindings: [
        { id: 1, name: "Grano Entero" }
      ],
      products_grames: [
        { id: 3, grames: 1000 }
      ]
    }
  ]
};