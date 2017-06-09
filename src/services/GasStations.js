import moment from 'moment';

export function getGasStations() {
  return [
    {
      id: 1,
      latlng: {
        latitude: -19.9535542,
        longitude: -44.1956893
      },
      name: "Auto Posto Rodrigo",
      address: "Av. Artur da Silva Bernardes, \n 355 - Ingá, Betim - MG, 32630-050",
      prices: [
        {
          fuel: 'Gasolina',
          unit: 'Litro',
          value: 3.599,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Etanol',
          unit: 'Litro',
          value: 2.659,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel',
          unit: 'Litro',
          value: 2.999,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel S10',
          unit: 'Litro',
          value: 3.099,
          collectedAt: '29/05/2017'
        }
      ]
    },
    {
      id: 2,
      latlng: {
        latitude: -19.9569862,
        longitude: -44.200691
      },
      name: "Posto Angola",
      address: "Rua do Rosário, 1001 - Angola - Angola, Betim - MG",
      prices: [
        {
          fuel: 'Gasolina',
          unit: 'Litro',
          value: 3.447,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Etanol',
          unit: 'Litro',
          value: 2.658,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel',
          unit: 'Litro',
          value: 2.999,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel S10',
          unit: 'Litro',
          value: 3.049,
          collectedAt: '29/05/2017'
        }
      ]
    },
    {
      id: 3,
      latlng: {
        latitude: -19.963362,
        longitude: -44.2002451
      },
      name: "Posto Liberdade",
      address: "Avenida Edméia Mattos Lazzarotti, 1381 - Angola, Betim - MG",
      prices: [
        {
          fuel: 'Gasolina',
          unit: 'Litro',
          value: 3.498,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Etanol',
          unit: 'Litro',
          value: 2.627,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel',
          unit: 'Litro',
          value: 2.988,
          collectedAt: '29/05/2017'
        }
      ]
    },
    {
      id: 4,
      latlng: {
        latitude: -19.9659516,
        longitude: -44.1938548
      },
      name: "Posto Gas Station Ltda",
      address: "Rua Inconfidência, 111 - Centro, Betim - MG",
      prices: [
        {
          fuel: 'Gasolina',
          unit: 'Litro',
          value: 3.599,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Etanol',
          unit: 'Litro',
          value: 2.599,
          collectedAt: '29/05/2017'
        }
      ]
    },
    {
      id: 5,
      latlng: {
        latitude: -19.9493729,
        longitude: -44.1599271
      },
      name: "Posto Alterosa Ltda",
      address: "Avenida Campo de Ourique, 1265 - Alterosa, Betim - MG",
      prices: [
        {
          fuel: 'Gasolina',
          unit: 'Litro',
          value: 3.497,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Etanol',
          unit: 'Litro',
          value: 2.495,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel',
          unit: 'Litro',
          value: 2.898,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel S10',
          unit: 'Litro',
          value: 2.999,
          collectedAt: '29/05/2017'
        }
      ]
    },
    {
      id: 6,
      latlng: {
        latitude: -19.9645504,
        longitude: -44.1971507
      },
      name: "Posto Cidade Nova",
      address: "Avenida Juiz Marco Tulio Isac, 330 - Centro, Betim - MG",
      prices: [
        {
          fuel: 'Gasolina',
          unit: 'Litro',
          value: 3.699,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Etanol',
          unit: 'Litro',
          value: 2.949,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel',
          unit: 'Litro',
          value: 3.099,
          collectedAt: '29/05/2017'
        }
      ]
    },
    {
      id: 7,
      latlng: {
        latitude: -19.9577137,
        longitude: -44.0922727
      },
      name: "Posto Vila Fernão Dias",
      address: "Rodovia Fernão Dias Br 381 Km 429, Jardim Terezopolis, Betim - MG",
      prices: [
        {
          fuel: 'Gasolina',
          unit: 'Litro',
          value: 3.399,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Etanol',
          unit: 'Litro',
          value: 2.399,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel',
          unit: 'Litro',
          value: 2.799,
          collectedAt: '29/05/2017'
        },
        {
          fuel: 'Diesel S10',
          unit: 'Litro',
          value: 2.899,
          collectedAt: '29/05/2017'
        }
      ]
    }
  ];
}
