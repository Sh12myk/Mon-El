const arrResult = [getMyTaxes.call(latvia, 1500),
    getMiddleTaxes.call(ukraine),
    getTotalTaxes.call(latvia),
  ]
  
  arrResult.forEach(el => console.log(el))
  getMySalary.call(latvia)