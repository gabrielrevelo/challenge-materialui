const plates: Array<any> = [];

for (let i = 1; i <= 6; i++) {
  const plate = {
    id: i,
    companyName: `Empresa ${i}`,
    plateName: `Titulo ${i}`,
    platePrice: i * 100,
  };
  plates.push(plate);
}

export default plates;
