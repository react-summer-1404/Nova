import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFilter = create(persist(
    (set) => ({
        selectedTechs: [],
        selectedLevels: [],
        selectedTeachers: [],
        selectedStates: [],
        value: [0, 2000],
        searchQuery: "",
        sortType: "DESC",
        sortingCol: "Active",
        currentPage: 1,
      
        setSelectedTechs: (selectedTechs) => set({ selectedTechs }),
        setSelectedLevels: (selectedLevels) => set({ selectedLevels }),
        setSelectedTeachers: (selectedTeachers) => set({ selectedTeachers }),
        setSelectedStates: (selectedStates) => set({ selectedStates }),
        setValue: (value) => set({ value }),
        setSearchQuery: (searchQuery) => set({ searchQuery }),
        setSortType: (sortType) => set({ sortType }),
        setSortingCol: (sortingCol) => set({ sortingCol }),
        setCurrentPage: (currentPage) => set({ currentPage }),
      }),
      {name:'filter-storage'}
      )
);

export default useFilter;
