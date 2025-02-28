const manager = new Manager(managerArray);
Gomszab.addFileUploader(fileResult => {
  const fileLines = fileResult.split('\n');
  for (const line of fileLines){
    const fields = line.split(';');
  }
})
const deckArea = new DeckArea('deck', manager);
const solutionArea = new SolutionArea('solution', manager);