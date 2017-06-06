import moment from 'moment';

export function getVehicles() {
  return [
    {
      id: 1,
      model: "Duster",
      mark: "Renault",
      plate: 'ABC 8080',
      createdAt: moment().toDate()
    },
    {
      id: 2,
      model: "Civic",
      mark: "Honda",
      plate: "GDA 8734",
      createdAt: moment().toDate()
    },
  ];
}
