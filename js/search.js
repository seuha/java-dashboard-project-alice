function initializeSearch(treeInfo, events) {
    const searchBox = document.querySelector('#treeList');
    searchBox.addEventListener('input', (evt) => {
      handleSearchBoxInput(evt, treeInfo, events);
    });
  }
  
  function handleSearchBoxInput(evt, treeInfo, events) {
    updateFilteredStations(treeInfo, events);
  }
  
  function updateFilteredStations(treeInfo, events) {
    const searchBox = document.querySelector('#treeList');
    const lowercaseValue = searchBox.value.toLowerCase();
  
    const filteredTrees = [];
    for (const tree of treeTypes) {
      if (treeType.toLowerCase().includes(searchTerm.toLowerCase)) {
        filteredTrees.push(tree);
      }
    }
  
    // const filteredStations = stationInfo.data.stations
    //     .filter((station) => station.name.toLowerCase().includes(lowercaseValue));
  
    const newEvent = new CustomEvent('filter-tree', { detail: { filteredTrees }});
    events.dispatchEvent(newEvent);
  }
  
  export {
    initializeSearch,
  };
  