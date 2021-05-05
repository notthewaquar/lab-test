export class LabDataService {
  labSamples: any[] = [
    {
      categoryA: '3',
      categoryB: '2',
      comment: '545',
      readingA: 'fgsdf',
      readingB: 'fgsdf',
      tester: 'testerB',
      title: 'fsgf',
      status: 'PENDING',
    },
  ];

  getAllData() {
    return this.labSamples;
  }

  getEachData(index) {
    return this.labSamples[index]
  }

  addNewSample(sample: any) {
    this.labSamples.push(sample);
  }
}

// "title",
// "readingA",
// "readingB",
// "categoryA",
// "categoryB",
//     "tester",
//     "comment",
//     "status"